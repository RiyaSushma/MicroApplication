import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
    name: 'emailApp',
    // remotes: {
    //   homepage: 'http://localhost:5000/assets/homepage.js',
    // },
    filename: "remoteEntry.js",
    exposes: {
      "./EmailPage": './src/App'
    },
    shared: ["react", "react-dom", 'react-router-dom']
  }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});


