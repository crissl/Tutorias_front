// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  url:"http://localhost:8083/tutoring/",
  production: false
  production: false,
  returnUrl: 'http://localhost:4200//#/',
  returnUrlComplete: 'http://localhost:4200/#/correcto',
  cancelUrl: 'http://localhost:4200/#/cancelar',
  Endpoint: '/redirection/',
  locate: 'es_CO',
  Url: 'http://localhost:8083/',
  typeDocument: 'CI',
  statusPending: 'PENDIENTE',
  moneda: 'USD',
  sso: {
    serverUrl: 'https://srvcas.espe.edu.ec',
    clientId: 'puy_fq2xdzPp2HvioN3p2986KoEa',
    issuer: '/oauth2endpoints/token',
    redirectUri: window.location.origin,
    postredirectUrL: window.location.origin,
    scope: 'openid profile email',
    logout: '/oidc/logout',
    tokenEndpoint: '/oauth2endpoints/token',
    userinfoEndpoint: '/oauth2/userinfo',
    authorizationEndpoint: '/oauth2/authorize',
    jwksEndpoint: '/oauth2/jwks',
    showDebugInformation: true,
    requireHttps: false,
    responseType: 'id_token token'
  }
};
