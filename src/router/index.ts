import Home from '@/views/Home.vue';
import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
