## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Running mobile
Make sure everything is installed, then you can use the following commands to setup android and ios
```bash
npm run app

npx cap add ios
npx cap add android
```

Every time you make a change to the app and want to run it on mobile you will need to run the following commands to build and then sync the exported files
```bash
npm run app
npx cap sync
```

The app can then be opened in either android studio or xcode, from which it can be built and run on emulators
```bash
npx cap open android
npx cap open ios
```

## Making changes
To edit the server side rendered next project you can simply add files and folders as you would normally inside src/app. All files will be wrapped with the 
default layout, which automatically loads the SPA if a user is signed in on web or on mobile.

To add to the mobile app or web spa edit the files inside src/spa. 
