import * as jwt from 'jsonwebtoken';

// You can generate keys by https://travistidwell.com/jsencrypt/demo/
const secret = 'mySecretUpstockAI';

export function signJwt(payload) {
  return jwt.sign(payload, secret, { algorithm: 'RS256', expiresIn: '1y' });
}

export function decode(token: string) {
  if (!token) return null;
  try {
    token = token.replace('Bearer ', '');
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    console.error(`error`, error);
    return null;
  }
}
