export const environment = {
  Url: 'https://servicios.espe.edu.ec:8443/Tutorias-0.0.1-SNAPSHOT/tutoring/',
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
