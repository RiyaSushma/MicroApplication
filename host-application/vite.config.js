import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "hostApp",
      remotes:
        {
          // emailApplication: {
          //   external: `Promise.resolve('http://localhost:5000/assets/remoteEntry.js')`,
          //   // external: 'http://localhost:5000/assets/remoteEntry.js',
          //   from: 'vite',
          //   externalType: 'promise'
          // },
          emailApplication: 'http://localhost:5002/assets/remoteEntry.js',
          chatApplication: 'http://localhost:5001/assets/remoteEntry.js',
          // chatApplication: {
          //     external: `Promise.resolve('http://localhost:5003/assets/remoteEntry.js')`,
          //     // external: 'http://localhost:5000/assets/remoteEntry.js',
          //     from: 'vite',
          //     externalType: 'promise'
          //   }
        },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
    ],
    build: {
      modulePreload: false,
      target: 'esnext',
      minify: false,
      cssCodeSplit: false,
    },
});
