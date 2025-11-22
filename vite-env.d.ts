/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RECAPTCHA_SITE_KEY: string;
  // add more env variables here if you have them
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}