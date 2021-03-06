// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  url:"https://servicios.espe.edu.ec:8443/Tutorias-0.0.1-SNAPSHOT/tutoring/",
  tipoPersonaE: 'ESTUDIANTE',
  tipoPersonaD: 'DOCENTE',
  tipoTutoriaA:  'ACOMPAÑAMIENTO',
  tipoTutoriaR:  'REFORZAMIENTO',
  estado: 'A',
  estadoC: 'C',
  interacion: '0',
  codigoFormularios: '',
  codigoFormularios: '',
  codigoFormularios: '',
  codigoFormularios: '',
  codigoFormularios: '',
  codigoFormularios: '',

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
