import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      // @ts-ignore
      babel: {
        plugins: [
          [
            'module-resolver',
            {
              root: ['./src'],
              alias: {
                '@': './src',
                '@components': './src/components',
                '@pages': './src/pages',
                '@hooks': './src/hooks',
                '@utils': './src/utils',
                '@services': './src/services',
                '@assets': './src/assets',
                '@styles': './src/styles'
              },
            },
          ],
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@styles": path.resolve(__dirname, "./src/styles")
    },
  },
})
