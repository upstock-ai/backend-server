import * as jwt from 'jsonwebtoken';

// You can generate keys by https://travistidwell.com/jsencrypt/demo/
export const privateSecret = 'mySecretUpstockAI';

export function signJwt(payload) {
  return jwt.sign(payload, privateSecret, {
    algorithm: 'RS256',
    expiresIn: '1y',
  });
}

export function decode(token: string) {
  if (!token) return null;
  try {
    token = token.replace('Bearer ', '');
    const decoded = jwt.verify(token, privateSecret);
    return decoded;
  } catch (error) {
    console.error(`error`, error);
    return null;
  }
}
