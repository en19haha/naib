import Vue from 'vue';
import Router from 'vue-router';
import LoginView from '../views/LoginView';
import SignupView from '../views/SignupView';
import MainView from '../views/MainView';
import PostAddView from '../views/PostAddView';
import PostDetailView from '../views/PostDetailView';
import test from '../views/test';
import store from '../store';
import { getUserFromCookie } from '../utils/cookies.js';
import eventMain from '@/views/eventMain';
import Decotter from '@/components/decotter';
import Comment from '@/components/comment';
import CollaborationMain from '@/views/collaborationMain';
import CollaborationArt from '@/components/collaborationArt';
import CollaborationWrite from '@/components/collaborationWrite';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: eventMain,
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
            // beforeEnter(to, from, next) {
            // 	store.getters['isLoggedIn'] ? next('/main') : next();
            // },
        },
        {
            path: '/test',
            name: 'test',
            component: test,
            // beforeEnter(to, from, next) {
            // 	store.getters['isLoggedIn'] ? next('/main') : next();
            // },
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignupView,
        },
        /*{
      path: "/main",
      name: "main",
      component: MainView,
      // beforeEnter,
    },*/
        {
            path: '/new',
            name: 'new',
            component: PostAddView,
            // beforeEnter,
        },
        {
            path: '/post/:id',
            name: 'PostDetailView',
            component: PostDetailView,
            // beforeEnter,
        },
        {
            path: '/icondeco',
            name: 'Decotter',
            component: Decotter,
        },
        {
            path: '/message',
            name: 'Comment',
            component: Comment,
        },
        {
            path: '/collaboration',
            name: 'CollaborationMain',
            component: CollaborationMain,
        },
        {
            path: '/collaboration/art',
            name: 'CollaborationArt',
            component: CollaborationArt,
        },
        {
            path: '/collaboration/text',
            name: 'CollaborationWrite',
            component: CollaborationWrite,
        },
    ],
});

/*
function beforeEnter(to, from, next) {
	if (store.getters['isLoggedIn'] || getUserFromCookie()) {
		next();
	} else {
		alert('sign in please');
		next('/login');
	}
}
*/
