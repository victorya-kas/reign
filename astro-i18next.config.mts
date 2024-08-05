/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
    defaultLocale: "en",
    locales: ["en", "ru"],
    namespaces: ["common", "Follower", "Tooltip"],
    defaultNamespace: "common",
    i18nextServer: {
      backend: {
        loadPath: './public/locales/{{lng}}/{{ns}}.json',
      },
    },
  };