/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * The base URL of the backend API.
   */
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
