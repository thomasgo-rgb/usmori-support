(() => {
  "use strict";

  const locales = ["ko", "ja", "en"];
  const metadata = {
    ko: {
      title: "Usmori · 둘의 하루가 머무는 작은 집",
      description: "Usmori는 한국·일본 출시를 준비 중인 커플 앱입니다.",
      skipLink: "본문으로 건너뛰기",
      languageLabel: "언어",
      heroImageAlt: "작은 집에서 다정하게 기대 앉은 수달 두 마리"
    },
    ja: {
      title: "Usmori · ふたりの毎日に、ほっとできる場所を。",
      description: "Usmoriは、韓国・日本での公開を準備中のカップルアプリです。",
      skipLink: "本文へスキップ",
      languageLabel: "言語",
      heroImageAlt: "小さな家で寄り添う2匹のカワウソ"
    },
    en: {
      title: "Usmori · A little home for our everyday moments.",
      description: "Usmori is a couple app preparing for release in Korea and Japan.",
      skipLink: "Skip to content",
      languageLabel: "Language",
      heroImageAlt: "Two otters cuddling in their little home"
    }
  };

  const panels = Array.from(document.querySelectorAll("[data-locale]"));
  const buttons = new Map();

  for (const locale of locales) {
    const button = document.querySelector(`[data-language="${locale}"]`);
    if (button) {
      buttons.set(locale, button);
    }
  }

  function requestedLocale() {
    const fromQuery = new URLSearchParams(window.location.search).get("lang");
    if (locales.includes(fromQuery)) {
      return fromQuery;
    }

    const languages = [
      window.navigator.language,
      ...(window.navigator.languages || [])
    ];
    const preferred = languages.map((language) => String(language).toLowerCase().slice(0, 2));
    return preferred.find((language) => locales.includes(language)) || "en";
  }

  function applyLocale(locale) {
    document.documentElement.lang = locale;
    document.title = metadata[locale].title;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", metadata[locale].description);
    }

    for (const panel of panels) {
      panel.hidden = panel.dataset.locale !== locale;
    }

    for (const [buttonLocale, button] of buttons) {
      button.setAttribute("aria-pressed", String(buttonLocale === locale));
    }

    const skipLink = document.querySelector(".skip-link");
    if (skipLink) {
      skipLink.textContent = metadata[locale].skipLink;
      skipLink.lang = locale;
    }

    const languageNav = document.querySelector(".language-group");
    if (languageNav) {
      languageNav.setAttribute("aria-label", metadata[locale].languageLabel);
    }

    const heroImage = document.querySelector(".hero-figure img");
    if (heroImage) {
      heroImage.setAttribute("alt", metadata[locale].heroImageAlt);
    }

    for (const link of document.querySelectorAll('[data-policy-link="support"]')) {
      link.setAttribute("href", `./support.html#${locale}`);
    }
    for (const link of document.querySelectorAll('[data-policy-link="privacy"]')) {
      link.setAttribute("href", `./privacy.html#${locale}`);
    }
  }

  for (const [locale, button] of buttons) {
    button.addEventListener("click", () => {
      applyLocale(locale);
      const url = new URL(window.location.href);
      url.searchParams.set("lang", locale);
      window.history.replaceState(null, "", url);
      button.focus();
    });
  }

  if (buttons.size === locales.length) {
    applyLocale(requestedLocale());
  }
})();
