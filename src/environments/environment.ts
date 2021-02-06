// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/**
 * el apiKey es generado por la pagina https://newsapi.org/account para darnos noticias, maximo 500 por dia
 */
export const environment = {
  production: false,
  apiKey: 'a127756bb1ee4632a6298936d13c9b25',
  apiUrl: 'http://newsapi.org/v2'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
