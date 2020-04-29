export const environment = {
  production: true
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
    clientId: 'WQBGkVfuOz6aqwaRsrKwXvcn6I4a',
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
};
}