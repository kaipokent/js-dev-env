export default function getBaseUrl() {
  const inDevelopment = window.location.hostname === 'localhost';
  const usingBrowserSync = window.location.hostname === '192.168.1.10';
  const usingLocaltunnel = window.location.hostname === 'kent.localtunnel.me';
  if (inDevelopment) {
    return 'http://localhost:3010/';
  } else if (usingBrowserSync) {
    return 'http://192.168.1.10:3010/';
  } else if (usingLocaltunnel) {
    return 'https://kent.localtunnel.me:3010/';
  }
  else {
    return '/';
  }
}
