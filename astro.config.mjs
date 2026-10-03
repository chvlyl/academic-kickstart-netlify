import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.PAGES_SITE || 'https://www.ericzchen.me',
  base: process.env.PAGES_BASE || '/',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
