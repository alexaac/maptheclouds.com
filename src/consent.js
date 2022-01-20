// https://github.com/codebubb/cookie-consent-tutorial
// TODO: check per session, don't show on every page

const consentCheck = () => {
  const consentPopup = document.getElementById('consent-popup');

  const cookieStorage = {
    getItem: (item) => {
      const cookies = document.cookie
        .split(';')
        .map((cookie) => cookie.split('='))
        .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});

      return cookies[item];
    },
    setItem: (item, value) => {
      document.cookie = `${item}=${value};`;
    },
  };

  const removeConsent = () => {
    consentPopup.classList.add('hidden');
  };

  const remove = document.getElementById('consent-remove');
  remove.addEventListener('click', removeConsent);

  const storageType = cookieStorage;
  const consentPropertyName = 'jdc_consent';
  const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
  const saveToStorage = () => storageType.setItem(consentPropertyName, true);

  window.onload = () => {
    const acceptFn = (event) => {
      saveToStorage(storageType);
      consentPopup.classList.add('hidden');
    };
    const acceptBtn = document.getElementById('accept');
    acceptBtn.addEventListener('click', acceptFn);

    if (shouldShowPopup(storageType)) {
      setTimeout(() => {
        consentPopup.classList.remove('hidden');
      }, 1000);
    }
  };
};

export { consentCheck };
