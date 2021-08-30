export const msalConfig = {
    auth: {
      clientId:'aef8500b-c964-4a5c-880a-04a60f4a8d82',
      authority: 'https://login.microsoftonline.com/95076fc4-3910-486c-99cb-928b6f847a06',
      
      redirectUri: 'http://localhost:3000',
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["User.Read"]
  };
  
  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  export const graphConfig = {
      graphMeEndpoint: 'https://graph.microsoft.com'
  };