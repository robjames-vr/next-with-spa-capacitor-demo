import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "beer.com",
  appName: "shared-spa",
  webDir: "out",
  server: {
    androidScheme: "https",
  },
};

export default config;
