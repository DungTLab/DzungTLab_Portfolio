import { vietnamese } from '../i18n/vi';
import type { Language, TranslationKey } from '../i18n/vi';
import { required } from '../lib/dom';
import { storage } from '../lib/storage';
import { THEME_STORAGE_KEY, LANGUAGE_STORAGE_KEY } from '../config/preferences';

type Theme = 'light' | 'dark';

export function initPreferences(): () => void {
  function isTranslationKey(key: string | undefined): key is TranslationKey {
    return key !== undefined && Object.hasOwn(vietnamese, key);
  }

  const root = document.documentElement;
  const translatedElements = [...document.querySelectorAll<HTMLElement>('[data-i18n]')];
  const english = new Map<TranslationKey, string>();
  translatedElements.forEach(element => {
    const key = element.dataset.i18n;
    if (!isTranslationKey(key)) throw new Error(`Missing translation: ${key}`);
    english.set(key, element.textContent ?? '');
  });

  const languageButton = required<HTMLButtonElement>('#language-toggle');
  const themeButton = required<HTMLButtonElement>('#theme-toggle');
  const menuButton = required<HTMLButtonElement>('#menu-toggle');
  const navigation = required<HTMLElement>('#navigation');
  const description = required<HTMLMetaElement>('meta[name="description"]');
  const themeColor = required<HTMLMetaElement>('meta[name="theme-color"]');
  const brandLogo = required<HTMLImageElement>('.brand-image img');
  let language: Language = 'en';

  function updateControlLabels(): void {
    const vi = language === 'vi';
    const dark = root.dataset.theme === 'dark';
    languageButton.textContent = vi ? 'EN' : 'VI';
    languageButton.setAttribute('aria-label', vi ? 'Switch to English' : 'Chuyển sang tiếng Việt');
    languageButton.lang = vi ? 'en' : 'vi';
    themeButton.setAttribute('aria-label', vi
      ? (dark ? 'Dùng giao diện sáng' : 'Dùng giao diện tối')
      : (dark ? 'Use light theme' : 'Use dark theme'));
    themeButton.setAttribute('aria-pressed', String(dark));
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-label', vi
      ? (open ? 'Đóng điều hướng' : 'Mở điều hướng')
      : (open ? 'Close navigation' : 'Open navigation'));
    navigation.setAttribute('aria-label', vi ? 'Điều hướng chính' : 'Main navigation');
  }

  function setLanguage(value: string | null): void {
    language = value === 'vi' ? 'vi' : 'en';
    root.lang = language;
    translatedElements.forEach(element => {
      const key = element.dataset.i18n;
      if (isTranslationKey(key)) {
        element.textContent = language === 'vi' ? vietnamese[key] : (english.get(key) ?? '');
      }
    });
    description.content = language === 'vi'
      ? 'Lê Tiến Dũng — Java Backend Intern. Dự án Java web, môi trường Docker và trải nghiệm làm việc nhóm.'
      : 'Lê Tiến Dũng — Java Backend Intern. Selected Java web projects, Docker development environments, and thoughtful teamwork.';
    brandLogo.alt = language === 'vi'
      ? 'DzungTLab — logo quân mã với họa tiết mạch điện'
      : 'DzungTLab — circuit knight logo';
    updateControlLabels();
    storage.set(LANGUAGE_STORAGE_KEY, language);
  }

  function setTheme(value: string | null): void {
    // New visitors get black, independent of their OS theme preference.
    const theme: Theme = value === 'light' ? 'light' : 'dark';
    root.dataset.theme = theme;
    themeColor.content = theme === 'dark' ? '#0d0e0e' : '#f7f7f2';
    updateControlLabels();
    storage.set(THEME_STORAGE_KEY, theme);
  }

  languageButton.addEventListener('click', () => setLanguage(language === 'en' ? 'vi' : 'en'));
  themeButton.addEventListener('click', () => setTheme(root.dataset.theme === 'light' ? 'dark' : 'light'));
  setLanguage(storage.get(LANGUAGE_STORAGE_KEY));
  setTheme(storage.get(THEME_STORAGE_KEY));
  [languageButton, themeButton].forEach(button => { button.hidden = false; });
  return updateControlLabels;
}
