// Reviewed invitation transport boundary. Tokens never leave the URL fragment here.
const codePattern = /^[A-Za-z0-9_-]{43}$/;
export function readInvitationCode(hash, search = '') {
  if (typeof hash !== 'string' || search !== '' || !hash.startsWith('#')) return null;
  const code = hash.slice(1);
  return codePattern.test(code) ? code : null;
}
export function nativeInvitationLink(code) {
  if (typeof code !== 'string' || !codePattern.test(code)) throw new Error('invalid_invitation_code');
  return `usmori://invite/${code}`;
}
