(function () {
    'use strict';

    const cookieName = 'cookie_consent_accepted';
    const expiryDays = 365; // Срок действия в днях (например: 30, 90, 365)

    const getCookie = name => {
        const parts = `; ${document.cookie}`.split(`; ${name}=`);
        return parts.length === 2 ? parts.pop().split(';').shift() : null;
    };

    const setConsentCookie = () => {
        const date = new Date();
        date.setTime(date.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
        const secure = window.location.protocol === 'https:' ? '; secure' : '';
        document.cookie = `${cookieName}=1; expires=${date.toUTCString()}; path=/${secure}; samesite=lax`;
    };

    const initCookieConsent = () => {
        const banner = document.getElementById('cookie-consent-banner');
        if (!banner || getCookie(cookieName)) return;

        setTimeout(() => banner.classList.remove('cookie-consent-hidden'), 500);

        const hideBanner = e => {
            e.preventDefault();
            banner.classList.add('cookie-consent-hidden');
        };

        const bindClick = (id, handler) => {
            const btn = document.getElementById(id);
            if (btn) btn.addEventListener('click', handler);
        };

        bindClick('cookie-accept-btn', e => {
            setConsentCookie();
            hideBanner(e);
        });
        bindClick('cookie-cancel-btn', hideBanner);
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCookieConsent);
    } else {
        initCookieConsent();
    }
})();