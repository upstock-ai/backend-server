import * as jwt from 'jsonwebtoken';

// generated by https://travistidwell.com/jsencrypt/demo/
export const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIICWwIBAAKBgGzSVeP4+pM6jX5nsksLJqOtaOIH4PsAdzDZBmG2IBN4NjkZWYU7
s+FGmc8BidejfDBwcAwygZV8grziARKdHHwHXom/dOijWJ+dmDoNaIIWHt+vO7uQ
KJmOTKtKHckq1uOCYzo9R7LEsrcaRfg1WTi6/AmE3K24df5th3I9vHd/AgMBAAEC
gYAkPpok6BRtXR8rbtZPcFNaSLOaNQ2WDD2mo2IgwUxFr9A/jFXork3nRmCMNfL3
Q5hlec2YAmpuo53X016QGIwXw/C7TTYF/GbzK8C5Dt4l6eiGPiqDLUY1ay6f5kXI
IudZ4Q85akBWknhdVnJRqn6TESseyfovn65ongrVwriGwQJBALCJzrrxhXljRz2u
8rXwz4OIVAROET+Gejm6LTzUpbDqd+agN/Vu5nzqW3VYAXMP+dTUtaobj5mZ0BTO
Yl5oFwcCQQCdzafayvAbT4/7GR6gbOYI30H749hKnL4oqXF4CcdhKO2M7K9Skbdf
HElEw3XJpgUPLRknicoUL+p1lJEM5sXJAkEAj90NsjymN+DWqobKVchTY24SgZuY
5LrTGf4FZYApMn4wjandUE462Gsncv3v2HOZdX6OOHzTTioRbxMtCKAsuwJARz5W
Df2ZMXtWMbNBlIQVxuOk0qgnOmhRoeH+DIe9sCveM8WX0dtfwlzu51CnmQaPOi7O
MH+Q8FRBshwE8KIvoQJAUDLMQ/mnqq2rernCGW6MwSNIsbd1z0oeqg54QKSFUi16
lac+Mp2s8PPflD2c1YxI0433otrKt4cQTV7XV5d4PQ==
-----END RSA PRIVATE KEY-----`;

const publicKey = `-----BEGIN PUBLIC KEY-----
MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgGzSVeP4+pM6jX5nsksLJqOtaOIH
4PsAdzDZBmG2IBN4NjkZWYU7s+FGmc8BidejfDBwcAwygZV8grziARKdHHwHXom/
dOijWJ+dmDoNaIIWHt+vO7uQKJmOTKtKHckq1uOCYzo9R7LEsrcaRfg1WTi6/AmE
3K24df5th3I9vHd/AgMBAAE=
-----END PUBLIC KEY-----`;

export function signJwt(payload) {
  return jwt.sign(payload, privateKey, { algorithm: 'RS256', expiresIn: '1y' });
}

export function decode(token: string) {
  if (!token) return null;
  try {
    token = token.replace('Bearer ', '');
    const decoded = jwt.verify(token, publicKey);

    return decoded;
  } catch (error) {
    console.error(`error`, error);
    return null;
  }
}