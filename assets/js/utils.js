// eslint-disable-next-line no-unused-vars
const utils = {
  validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  },

  showStatus(element, message, isSuccess) {
    const el = element;
    el.textContent = message;
    el.style.color = isSuccess ? '#4CAF50' : '#ff4444';
    el.style.padding = '1rem';
    el.style.marginTop = '1rem';
    el.style.borderRadius = '5px';
    el.style.backgroundColor = isSuccess ? 'rgba(76, 175, 80, 0.1)' : 'rgba(255, 68, 68, 0.1)';
    el.style.border = `1px solid ${isSuccess ? '#4CAF50' : '#ff4444'}`;

    if (isSuccess) {
      setTimeout(() => {
        el.textContent = '';
        el.style.padding = '0';
        el.style.marginTop = '0';
        el.style.border = 'none';
        el.style.backgroundColor = 'transparent';
      }, 5000);
    }
  },
};
