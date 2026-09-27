import { readInvitationCode, nativeInvitationLink } from "./invite-token.mjs";

const locales = ["ko", "ja", "en"];

const messages = {
  ko: {
    title: "Usmori · 우리만의 공간으로 초대해요",
    description: "Usmori 커플 초대를 안전하게 열어 보세요.",
    navigationLabel: "언어",
    pictureAlt: "두 손을 모은 어스모리 수달",
    eyebrow: "Usmori · 둘만의 초대",
    heading: "우리만의 공간으로 초대해요",
    lead: "작은 기록들을, 이제 함께 쌓아가요.",
    status: {
      ready: "코드 유효성과 기한은 앱에서 확인해요.",
      invalid: "이 초대 링크는 여기에서 열 수 없어요. 파트너에게 원본 링크나 새 링크를 다시 받아 주세요.",
      copying: "초대 코드를 복사하고 있어요.",
      copied: "초대 코드를 복사했어요.",
      manual: "복사가 완료되지 않았어요. 화면에 보인 코드를 직접 선택해 복사해 주세요."
    },
    validHeading: "초대 열기",
    openLabel: "Usmori에서 열기",
    openNote: "상대를 확인하고 수락하면 연결돼요.",
    codeHeading: "초대 코드",
    codeLabel: "초대 코드",
    codeHelp: "코드를 길게 누르거나 선택해 직접 복사할 수도 있어요.",
    copyLabel: "코드 복사",
    flowHeading: "그다음 과정",
    flow: [
      "앱을 열고 로그인해요.",
      "파트너의 초대 내용을 확인해요.",
      "원하는 상대가 맞으면 연결을 수락해요."
    ],
    invalidHeading: "초대 링크 필요",
    fallbackHeading: "앱이 열리지 않나요?",
    fallbackCopy: "어스모리는 출시 준비 중이에요. 앱 설치 후 원래 메시지의 링크를 다시 열거나, ‘우리’ 탭에 초대 코드를 붙여 넣어 주세요.",
    sensitiveHeading: "둘 사이에만 간직해 주세요",
    sensitiveCopy: "이 링크와 코드는 연결할 상대에게만 보내 주세요.",
    ageNotice: "이용 대상 14세 이상 · Otterday Studio"
  },
  ja: {
    title: "Usmori · ふたりの空間への招待",
    description: "Usmoriのカップル招待を安全に開きます。",
    navigationLabel: "言語",
    pictureAlt: "手を合わせたUsmoriのカワウソ",
    eyebrow: "Usmori · 非公開招待",
    heading: "ふたりの場所へ、ようこそ",
    lead: "何気ない毎日を、これから一緒に。",
    status: {
      ready: "招待の有効期限はアプリで確認できます。",
      invalid: "この招待リンクはここでは開けません。パートナーに元のリンク、または新しいリンクをもう一度送ってもらってください。",
      copying: "招待コードをコピーしています。",
      copied: "招待コードをコピーしました。",
      manual: "コピーが完了しませんでした。表示されたコードを直接選択して手動でコピーしてください。"
    },
    validHeading: "招待を開く",
    openLabel: "Usmoriで開く",
    openNote: "相手を確認して、招待を受け入れるとつながります。",
    codeHeading: "招待コード",
    codeLabel: "招待コード",
    codeHelp: "コードを長押し、または選択して手動でコピーすることもできます。",
    copyLabel: "コードをコピー",
    flowHeading: "次の流れ",
    flow: [
      "アプリを開いてログインします。",
      "パートナーからの招待内容を確認します。",
      "つながりたい相手か確認して、招待を受け入れます。"
    ],
    invalidHeading: "招待リンクが必要です",
    fallbackHeading: "アプリが開かないときは",
    fallbackCopy: "Usmoriはリリースに向けて準備中です。インストール後に元のリンクを開くか、「ふたり」タブに招待コードを貼り付けてください。",
    sensitiveHeading: "ふたりだけの招待です",
    sensitiveCopy: "このリンクとコードは、つながりたい相手だけに送ってください。",
    ageNotice: "対象年齢 14歳以上 · Otterday Studio"
  },
  en: {
    title: "Usmori · You’re invited to our shared space",
    description: "Open a private Usmori couple invitation safely.",
    navigationLabel: "Language",
    pictureAlt: "A Usmori otter holding its paws together",
    eyebrow: "Usmori · Private invitation",
    heading: "You’re invited to our shared space",
    lead: "A little place for your everyday moments, together.",
    status: {
      ready: "The invitation code is shown below. Its validity and expiry are checked by the app.",
      invalid: "This invitation link can’t be opened here. Please ask your partner to send the original link again, or a new link.",
      copying: "Copying the invitation code.",
      copied: "Invitation code copied.",
      manual: "Copy didn’t complete. Please select the displayed code and copy it manually."
    },
    validHeading: "Open the invitation",
    openLabel: "Open in Usmori",
    openNote: "Review who invited you, then choose whether to connect.",
    codeHeading: "Invitation code",
    codeLabel: "Invitation code",
    codeHelp: "You can also long-press or select the code to copy it manually.",
    copyLabel: "Copy code",
    flowHeading: "What happens next",
    flow: [
      "Open the app and sign in.",
      "Review the invitation from your partner.",
      "Choose to connect when you’re ready."
    ],
    invalidHeading: "Invitation link needed",
    fallbackHeading: "If the app doesn’t open",
    fallbackCopy: "Usmori is getting ready to launch. After installing it, reopen the original link or paste the code in the app’s Us tab.",
    sensitiveHeading: "Just between you two",
    sensitiveCopy: "Send this link and code only to the person you want to connect with.",
    ageNotice: "Ages 14+ · Otterday Studio"
  }
};

function element(document, tagName, className) {
  const node = document.createElement(tagName);
  if (className) node.className = className;
  return node;
}

function append(parent, ...children) {
  parent.append(...children.filter(Boolean));
}

function preferredLocale(window) {
  const navigator = window.navigator || {};
  const preferred = [navigator.language, ...(navigator.languages || [])];
  const normalized = preferred.map((value) => String(value).toLowerCase().split("-")[0]);
  return normalized.find((value) => locales.includes(value)) || "en";
}

export function mountInvitationHandoff({
  document,
  window,
  root,
  picture,
  description,
  languageNavigation,
  languageButtons
} = {}) {
  if (!document || !window || !root) throw new Error("invitation_ui_context_missing");

  const buttons = new Map();
  for (const locale of locales) {
    const button = languageButtons?.[locale];
    if (button) buttons.set(locale, button);
  }

  const eyebrow = element(document, "p", "invite-eyebrow");
  const heading = element(document, "h1", "invite-heading");
  const lead = element(document, "p", "invite-lead");
  const status = element(document, "p", "invite-status");
  status.setAttribute("role", "status");
  status.setAttribute("aria-live", "polite");

  const validPanel = element(document, "section", "invite-panel invite-valid");
  const validHeading = element(document, "h2", "invite-panel-heading");
  const openAction = element(document, "a", "invite-open-action");
  const openNote = element(document, "p", "invite-open-note");
  const codeHeading = element(document, "h3", "invite-code-heading");
  const codeLabel = element(document, "span", "visually-hidden");
  const codeField = element(document, "p", "invite-code-field");
  const code = element(document, "code");
  code.id = "invite-code";
  code.tabIndex = 0;
  code.setAttribute("aria-labelledby", "invite-code-label");
  const codeHelp = element(document, "p", "invite-code-help");
  const copyAction = element(document, "button", "invite-copy-action");
  copyAction.type = "button";
  const actions = element(document, "div", "invite-actions");
  const flowHeading = element(document, "h3", "invite-code-heading");
  const flow = element(document, "ol", "invite-flow");

  const invalidPanel = element(document, "section", "invite-panel invite-invalid");
  invalidPanel.setAttribute("role", "alert");
  const invalidHeading = element(document, "h2", "invite-panel-heading");
  const invalidCopy = element(document, "p", "invite-invalid-copy");

  const fallback = element(document, "section", "invite-fallback");
  const fallbackHeading = element(document, "h2");
  const fallbackCopy = element(document, "p", "invite-fallback-copy");
  const sensitive = element(document, "section", "invite-sensitive");
  const sensitiveHeading = element(document, "h2");
  const sensitiveCopy = element(document, "p", "invite-sensitive-copy");
  const ageNotice = element(document, "p", "invite-age");

  codeLabel.id = "invite-code-label";
  openAction.setAttribute("rel", "noreferrer");
  openAction.setAttribute("aria-describedby", "invite-open-note");
  openNote.id = "invite-open-note";
  append(validPanel, validHeading, actions, openNote, codeHeading, codeLabel, codeField, codeHelp, flowHeading, flow);
  append(actions, openAction, copyAction);
  append(codeField, code);
  append(invalidPanel, invalidHeading, invalidCopy);
  append(fallback, fallbackHeading, fallbackCopy);
  append(sensitive, sensitiveHeading, sensitiveCopy);
  append(root, eyebrow, heading, lead, status, validPanel, invalidPanel, fallback, sensitive, ageNotice);

  let locale = preferredLocale(window);
  let invitationCode = null;
  let notice = { kind: "invalid" };
  let active = true;

  function renderStatus() {
    status.textContent = messages[locale].status[notice.kind] || messages[locale].status.ready;
    status.lang = locale;
  }

  function renderLocale() {
    const copy = messages[locale];
    document.documentElement.lang = locale;
    document.title = copy.title;
    if (description) description.setAttribute("content", copy.description);
    if (picture) picture.setAttribute("alt", copy.pictureAlt);
    if (languageNavigation) languageNavigation.setAttribute("aria-label", copy.navigationLabel);
    root.lang = locale;
    eyebrow.lang = locale;
    heading.lang = locale;
    lead.lang = locale;
    status.lang = locale;
    eyebrow.textContent = copy.eyebrow;
    heading.textContent = copy.heading;
    lead.textContent = copy.lead;

    validHeading.textContent = copy.validHeading;
    openAction.textContent = copy.openLabel;
    openAction.lang = locale;
    openNote.textContent = copy.openNote;
    codeHeading.textContent = copy.codeHeading;
    codeLabel.textContent = copy.codeLabel;
    codeLabel.lang = locale;
    codeHelp.textContent = copy.codeHelp;
    copyAction.textContent = copy.copyLabel;
    copyAction.lang = locale;
    flowHeading.textContent = copy.flowHeading;
    flow.replaceChildren(...copy.flow.map((step) => {
      const item = element(document, "li");
      item.lang = locale;
      item.textContent = step;
      return item;
    }));

    invalidHeading.textContent = copy.invalidHeading;
    invalidCopy.textContent = copy.status.invalid;
    fallbackHeading.textContent = copy.fallbackHeading;
    fallbackCopy.textContent = copy.fallbackCopy;
    sensitiveHeading.textContent = copy.sensitiveHeading;
    sensitiveCopy.textContent = copy.sensitiveCopy;
    ageNotice.textContent = copy.ageNotice;

    for (const [buttonLocale, button] of buttons) {
      button.setAttribute("aria-pressed", String(buttonLocale === locale));
    }
    renderStatus();
  }

  function renderCode() {
    invitationCode = readInvitationCode(window.location.hash, window.location.search);
    status.hidden = !invitationCode;
    fallback.hidden = !invitationCode;
    if (invitationCode) {
      code.textContent = invitationCode;
      openAction.setAttribute("href", nativeInvitationLink(invitationCode));
      openAction.removeAttribute("aria-disabled");
      copyAction.disabled = false;
      validPanel.hidden = false;
      invalidPanel.hidden = true;
      notice = { kind: "ready" };
    } else {
      code.textContent = "";
      openAction.removeAttribute("href");
      openAction.setAttribute("aria-disabled", "true");
      copyAction.disabled = true;
      validPanel.hidden = true;
      invalidPanel.hidden = false;
      notice = { kind: "invalid" };
    }
    renderStatus();
  }

  function showManualCopy() {
    notice = { kind: "manual" };
    renderStatus();
  }

  function copyInvitation() {
    if (!invitationCode) return;
    const requestedCode = invitationCode;
    notice = { kind: "copying" };
    renderStatus();

    let clipboard;
    try {
      clipboard = window.navigator?.clipboard;
    } catch {
      showManualCopy();
      return;
    }

    if (!clipboard || typeof clipboard.writeText !== "function") {
      showManualCopy();
      return;
    }

    let write;
    try {
      write = clipboard.writeText(requestedCode);
    } catch {
      showManualCopy();
      return;
    }

    Promise.resolve(write).then(
      () => {
        if (!active || invitationCode !== requestedCode) return;
        notice = { kind: "copied" };
        renderStatus();
      },
      () => {
        if (!active || invitationCode !== requestedCode) return;
        showManualCopy();
      }
    );
  }

  function localeFromEvent(event) {
    const value = event.currentTarget?.dataset?.language;
    return locales.includes(value) ? value : null;
  }

  function onLocaleClick(event) {
    const nextLocale = localeFromEvent(event);
    if (!nextLocale) return;
    locale = nextLocale;
    renderLocale();
  }

  function onHashChange() {
    renderCode();
  }

  for (const [, button] of buttons) button.addEventListener("click", onLocaleClick);
  copyAction.addEventListener("click", copyInvitation);
  window.addEventListener("hashchange", onHashChange);

  renderLocale();
  renderCode();

  return {
    applyLocale(nextLocale) {
      if (!locales.includes(nextLocale)) throw new Error("unsupported_invitation_locale");
      locale = nextLocale;
      renderLocale();
    },
    refreshCode: renderCode,
    cleanup() {
      active = false;
      for (const [, button] of buttons) button.removeEventListener("click", onLocaleClick);
      copyAction.removeEventListener("click", copyInvitation);
      window.removeEventListener("hashchange", onHashChange);
    }
  };
}

if (typeof document !== "undefined") {
  const root = document.getElementById("invite-root");
  if (root) {
    mountInvitationHandoff({
      document,
      window: globalThis,
      root,
      picture: document.getElementById("invite-picture"),
      description: document.querySelector('meta[name="description"]'),
      languageNavigation: document.querySelector(".invite-languages"),
      languageButtons: {
        ko: document.querySelector('[data-language="ko"]'),
        ja: document.querySelector('[data-language="ja"]'),
        en: document.querySelector('[data-language="en"]')
      }
    });
  }
}
