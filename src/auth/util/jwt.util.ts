import * as jwt from 'jsonwebtoken';

// You can generate keys by https://travistidwell.com/jsencrypt/demo/
export const privateSecret = 'mySecretUpstockAI';

export async function signJwt(payload) {
  const token = await this.jwtService.signAsync(payload, {
    secret: privateSecret,
    expiresIn: '1y',
  });
  return token;
  // return jwt.sign(payload, privateSecret, {
  //   algorithm: 'RS256',
  //   expiresIn: '1y',
  // });
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
