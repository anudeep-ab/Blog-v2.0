// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCqAHfPIb1hy8Yluxwvji5sEtDpExECIbY',
    authDomain: 'blog-mag.firebaseapp.com',
    databaseURL: 'https://blog-mag.firebaseio.com',
    projectId: 'blog-mag',
    storageBucket: '',
    messagingSenderId: '606933467058'
  }
};
