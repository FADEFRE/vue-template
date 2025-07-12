import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import VueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig({
	// server: {
	// 	proxy: {
	// 		'/api': {
	// 			target: 'http://localhost:8090',
	// 			changeOrigin: true,
	// 		},
	// 	},
	// },
	plugins: [VueDevTools(), vue()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
		extensions: ['.js', '.ts', '.vue', '.json'],
	},
});
