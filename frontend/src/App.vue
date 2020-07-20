<template>
    <div class="app">
        <!--<div style="position:fixed; top:50%; z-index:500">
            <router-link to="/"><span>hoom</span></router-link>
            <router-link to="/icondeco"><span>icondeco</span></router-link>
            <router-link to="/message"><span>message</span></router-link>
        </div>-->
        <transition
            name="fade"
            mode="out-in"
            v-bind:css="false"
            v-on:enter="listEnter"
            v-on:leave="listLeave"
        >
            <router-view />
        </transition>
    </div>
</template>

<script>
import { gsap } from 'gsap/all';

export default {
    data() {
        return {};
    },
    methods: {
        listEnter: function(el, done) {
            gsap.fromTo(
                el,
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 0.4,
                    onComplete: done,
                }
            );
        },
        listLeave: function(el, done) {
            gsap.fromTo(
                el,
                {
                    opacity: 1,
                },
                {
                    opacity: 0,
                    duration: 0.4,
                    onComplete: function() {
                        window.scrollTo(0, 0);
                        done();
                    },
                }
            );
        },
    },
    components: {},
};
</script>

<style>
@import './assets/css/reset.css';
@import './assets/css/common.css';
@import url('assets/css/naib.css');
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
.link-list {
    text-align: center;
}
.link-list li {
    display: inline-block;
}
</style>
