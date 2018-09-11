// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCcmlsrEPP0qvcrTRn4OSuTfUZxeZYtcUc",
    authDomain: "jiajun-fitness-tracker.firebaseapp.com",
    databaseURL: "https://jiajun-fitness-tracker.firebaseio.com",
    projectId: "jiajun-fitness-tracker",
    storageBucket: "jiajun-fitness-tracker.appspot.com",
    messagingSenderId: "78457872151"
  }
};
