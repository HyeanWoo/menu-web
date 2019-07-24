import Vue from 'vue'
import Router from 'vue-router'
import PostPage from './views/PostPage.vue'
import PortfolioPage from './views/PortfolioPage.vue'
import LoginPage from './views/LoginPage.vue'
import PortfolioNewPage from './views/PortfolioNewPage.vue'
import HomePage from './views/HomePage.vue'
import GitlabGraph2 from './views/GitlabGraph2.vue'
import PortfolioDetailPage from './views/PortfolioDetailPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
		{
			path: '/',
			name: 'home',
			component: HomePage
		},
		{
			path: '/post',
			name: 'post',
			component: PostPage
		},
		{
			path: '/portfolio',
			name: 'portfolio',
			component: PortfolioPage,
		},
		{
			path: '/login',
			name: 'login',
			component: LoginPage
		},
		{
			path: '/portfolio/new',
			name: 'new',
			component: PortfolioNewPage
		},
   		{
			path: '/gitlabgraph2',
			name: 'gitlabgraph2',
			component: GitlabGraph2
		},
		{	
			path: '/portfolio/:Pfid',
			name: 'details',
			component: PortfolioDetailPage,
		},
  ]
})
