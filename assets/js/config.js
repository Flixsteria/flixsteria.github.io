const CONFIG = {
  API_URL:
    window.location.hostname === 'localhost'
      ? 'http://localhost:3000/api'
      : 'https://api.flixsteria.com/api',
  ENDPOINTS: {
    CONTACT: '/contact',
  },
};
