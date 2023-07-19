import { cookies } from "next/dist/client/components/headers";

// pretend we're doing some proper auth stuff here
function setCookie(cookieName: string, cookieValue: string) {
  var d = new Date();
  d.setTime(d.getTime() + 100 * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie =
    cookieName + "=" + cookieValue + "; " + expires + "; path=/";
}

function getCookie(name: string) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=") ?? [];
  if (parts.length == 2) {
    return parts.pop()?.split(";").shift();
  }
}
const logIn = () => {
  setCookie("auth", "true");
  location.reload();
};
const logOut = () => {
  setCookie("auth", "false");
  location.reload();
};

const isLoggedIn = () => {
  if (process.env.MOBILE_BUILD === "true") return true;
  return typeof document !== "undefined"
    ? getCookie("auth") === "true"
    : cookies().get("auth")?.value === "true";
};

export { setCookie, getCookie, logIn, logOut, isLoggedIn };
