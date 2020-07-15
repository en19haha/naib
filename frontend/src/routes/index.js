import Vue from "vue";
import Router from "vue-router";
import LoginView from "../views/LoginView";
import SignupView from "../views/SignupView";
import MainView from "../views/MainView";
import PostAddView from "../views/PostAddView";
import PostDetailView from "../views/PostDetailView";
import store from "../store";
import { getUserFromCookie } from "../utils/cookies.js";
import eventMain from "@/views/eventMain";
import Decotter from "@/components/decotter";
import Comment from "@/components/comment";
import CollaborationMain from "@/views/collaborationMain";
import CollaborationArt from "@/components/collaborationArt";
import CollaborationWrite from "@/components/collaborationWrite";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "main",
      component: eventMain,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      // beforeEnter(to, from, next) {
      // 	store.getters['isLoggedIn'] ? next('/main') : next();
      // },
    },
    {
      path: "/signup",
      name: "signup",
      component: SignupView,
    },
    /*{
      path: "/main",
      name: "main",
      component: MainView,
      // beforeEnter,
    },*/
    {
      path: "/new",
      name: "new",
      component: PostAddView,
      // beforeEnter,
    },
    {
      path: "/post/:id",
      name: "detail",
      component: PostDetailView,
      // beforeEnter,
    },
    {
      path: "/icondeco",
      name: "detail",
      component: Decotter,
    },
    {
      path: "/message",
      name: "detail",
      component: Comment,
    },
    {
      path: "/collaboration",
      name: "detail",
      component: CollaborationMain,
    },
    {
      path: "/collaboration/art",
      name: "detail",
      component: CollaborationArt,
    },
    {
      path: "/collaboration/text",
      name: "detail",
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
