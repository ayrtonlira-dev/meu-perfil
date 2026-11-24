import { createContext, useContext, useEffect, useMemo, useState } from "react";
import * as content from "./content";
import { navigationItems } from "./navigation";
import english from "./en.json";

const LanguageContext = createContext(null);
const STORAGE_KEY = "ayrton-portfolio:language";

function initialLanguage() {
  const value = new URLSearchParams(window.location.search).get("lang");
  if (value !== null) return value === "en" ? "en" : "pt";
  try { return localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "pt"; }
  catch { return "pt"; }
}

function translateContent(value, t) {
  if (typeof value === "string") return t(value);
  if (Array.isArray(value)) return value.map((item) => translateContent(item, t));
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, translateContent(item, t)]));
  }
  return value;
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(initialLanguage);
  const value = useMemo(() => {
    const t = (text, variables = {}) => {
      const translated = language === "en" ? english[text] ?? text : text;
      return translated.replace(/\{(\w+)\}/g, (token, key) => variables[key] ?? token);
    };
    return { language, t, ...translateContent(content, t), navigationItems: translateContent(navigationItems, t) };
  }, [language]);

  useEffect(() => {
    const syncLanguage = () => setLanguage(new URLSearchParams(location.search).get("lang") === "en" ? "en" : "pt");
    window.addEventListener("popstate", syncLanguage);
    return () => window.removeEventListener("popstate", syncLanguage);
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    window.history.replaceState(window.history.state, "", url);
    try { localStorage.setItem(STORAGE_KEY, language); } catch { /* Storage may be unavailable. */ }
    document.documentElement.lang = language === "en" ? "en" : "pt-BR";
    const title = `Ayrton Lira — ${value.profile.role}`;
    document.title = title;
    const metadata = {
      'meta[name="description"]': value.profile.bio,
      'meta[property="og:title"]': title,
      'meta[property="og:description"]': value.profile.bio,
      'meta[property="og:locale"]': language === "en" ? "en_US" : "pt_BR",
      'meta[name="twitter:title"]': title,
      'meta[name="twitter:description"]': value.profile.bio,
      'meta[property="og:image:alt"]': language === "en" ? "Ayrton Lira's portfolio profile and projects." : "Perfil e projetos de Ayrton Lira.",
    };
    for (const [selector, text] of Object.entries(metadata)) document.querySelector(selector)?.setAttribute("content", text);
  }, [language, value]);

  const changeLanguage = (next) => {
    if (next === language) return;
    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.history.pushState(null, "", url);
    setLanguage(next);
  };

  return <LanguageContext.Provider value={{ ...value, changeLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
