import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      devOptions: {
        enabled: true, // قابلیت تست PWA در حالت توسعه
      },
      manifest: {
        name: 'Todo List App',
        short_name: 'TodoApp',
        description: 'A simple todo list application',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone', // اپلیکیشن به‌صورت مستقل باز می‌شود
        start_url: './',
        icons: [
          {
            src: './public/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './public/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
