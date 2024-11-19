import { defineConfig } from 'astro/config';
import fulldev from 'fulldev-ui/integration';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [
    fulldev({
      colors: {
        theme: 'dark',
        dark: {
          background: '#111110',
          base: '#6F6D66',
          brand: '#F50',
        },
        light: {
          background: '#EEEEEC',
          base: '#6F6D66',
          brand: '#F50',
        },
      },
    }),
    icon(),
  ],

  output: 'server',
  adapter: vercel(),
});
