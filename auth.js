import { AuthenticationClient } from 'auth0';

const CLIENT_DOMAIN = 'react-to-do-list.auth0.com';
const CLIENT_ID = 'wlSNJddNKcBDsdubTy15dKFgq14tZCA2';
const SCOPE = 'openid email';
const REDIRECT = 'http://localhost:3000/callback';

const auth = new AuthenticationClient({
  domain: CLIENT_DOMAIN,
  clientID: CLIENT_ID,
});

export function login() {
  auth.authorize({
    responseType: 'id_token',
    redirectUri: REDIRECT,
    scope: SCOPE,
  });
}