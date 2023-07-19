import { isLoggedIn } from "@/utils/cookies";
import * as React from "react";

/*
In a proper app you would probably want some redirection here, for now this is just a quick stand in to make
it easier to add new routes. Example:
The private spa has the router /my-profile but the public site does not. If a logged in user was to go to 
/my-profile and refresh that request would be sent to the server which would return a 404. However this page
will prevent that, and the default layout will direct them back to the SPA where it is handled. Pretty neat.
*/
const FallbackPage = () => {
  if (!isLoggedIn()) return <p>{"Not found :("}</p>;
  return (
    <p>
      This page acts as a fallback, incase the user goes to an unhandled route.
    </p>
  );
};

export default FallbackPage;
