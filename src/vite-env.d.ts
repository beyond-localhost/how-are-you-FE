interface ImportMetaEnv {
    VITE_LOCAL_URL: string;
    VITE_API_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
