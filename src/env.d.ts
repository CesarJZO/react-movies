/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * The base URL of the backend API.
   */
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  /**
   * The environment variables available in the application.
   */
  readonly env: ImportMetaEnv;
}
