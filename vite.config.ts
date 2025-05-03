import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir:false,
    rollupOptions: {
      input: {
        service_worker: 'src/service-worker.ts',
        content_script: 'src/content-script.ts',
        popup: 'src/popup.ts'
      },
      output: {
        entryFileNames: '[name].js'
      }
    }
  }
});



