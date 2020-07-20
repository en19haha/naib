<template>
    <div class="message-wrap">
        <div class="section">
            <transition
                mode="out-in"
                v-bind:css="false"
                v-on:enter="listEnter"
                v-on:leave="listLeave"
            >
                <div class="message-txt" v-if="mee" v-html="mee"></div>
            </transition>
            <transition-group
                v-if="randomList"
                name="comment-list"
                tag="ul"
                class="comment-list"
                mode="out-in"
                v-bind:css="false"
                v-on:enter="listEnter"
                v-on:leave="listLeave"
            >
                <li
                    v-for="(item, index) in randomList"
                    :class="commentItemClass(index)"
                    :key="item.contents"
                    v-html="item.contents"
                ></li>
            </transition-group>

            <div class="naib">
                <img src="../assets/images/comment/naib.png" alt="나이브" />
            </div>

            <div class="comment">
                <form @submit.prevent="submitForm" class="form">
                    <div class="inner">
                        <i class="icon-mail" @click="open()"></i>
                        <label class="id">
                            <input
                                type="text"
                                ref="userId"
                                v-model="title"
                                placeholder="트위터ID"
                                maxlength="10"
                            />
                        </label>
                        <label class="message">
                            <input
                                ref="msg"
                                type="text"
                                v-model="contents"
                                placeholder="메세지를 입력해 주세요"
                                maxlength="30"
                            />
                        </label>
                        <button type="submit"><span>SEND</span></button>
                    </div>
                </form>
            </div>
            <transition name="modal">
                <modal02 v-if="showModal" @close="modalClose"> </modal02>
            </transition>
        </div>
    </div>
</template>
<script>
import { createNewPost, fetchPosts } from '@/api/posts';
import modal02 from './modal02';
import bus from '@/utils/bus';
import { gsap } from 'gsap/all';

export default {
    name: 'comment',
    data() {
        return {
            firstInit: false,
            timer: null,
            showModal: false,
            username: 'test@test.com',
            password: 'testtest',
            logMessage: '',
            title: '',
            contents: '',
            cmtKey: this.$id('ddd'),
            resultMessage: '',
            postItems: null,
            randomList: [],
            mee: null,
        };
    },
    watch: {
        randomList() {
            //console.log(this.randomList);
        },
    },
    components: {
        modal02,
    },
    created() {},
    computed: {
        itemLength() {
            return Math.min(15, this.postItems.length);
        },
    },
    mounted() {
        this.login();
        this.getCookie();
    },
    methods: {
        // modal
        setCookie(name, value, expiredays) {
            const todayDate = new Date();
            todayDate.setDate(todayDate.getDate() + expiredays);
            document.cookie =
                name + '=' + escape(value) + '; path=/; expires=' + todayDate.toGMTString() + ';';
        },
        getCookie() {
            const cookieData = document.cookie;
            if (cookieData.indexOf('todayCookie=done') < 0) {
                this.showModal = true;
            } else {
                this.showModal = false;
                this.fetchData();
            }
        },
        modalClose() {
            this.showModal = false;
            this.setCookie('todayCookie', 'done', 1);
            if (!this.randomList.length) {
                this.fetchData();
            }
        },
        open() {
            this.showModal = true;
        },

        // list animation
        spliteTxt(string) {
            const arr = string.split('');
            arr.forEach((t, i) => {
                arr[i] = `<span>${t}</span>`;
            });
            return arr.join('');
        },
        listEnter: function(el, done) {
            function random(min, max) {
                return Math.random() * (max - min) + min;
            }
            gsap.set(el, {
                opacity: 0,
            });

            setTimeout(
                () => {
                    gsap.set(el, {
                        opacity: 1,
                    });
                    const text = el.querySelectorAll('span');
                    text.forEach((ele, i) => {
                        gsap.from(ele, {
                            opacity: 0,
                            x: random(-100, 100),
                            y: random(-50, 50),
                            z: random(-200, 0),
                            scale: 0.2,
                            delay: i * 0.02,
                            duration: 0.8,
                            onComplete: done,
                        });
                    });
                    this.firstInit = true;
                },
                this.firstInit ? 0 : random(0, 2000)
            );
        },
        listLeave: function(el, done) {
            const text = el.querySelectorAll('span');
            function random(min, max) {
                return Math.random() * (max - min) + min;
            }
            text.forEach((ele, i) => {
                gsap.fromTo(
                    ele,
                    {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        z: 0,
                        scale: 1,
                    },
                    {
                        opacity: 0,
                        x: random(-100, 100),
                        y: random(-50, 50),
                        z: random(-200, 0),
                        scale: 0.2,
                        delay: i * 0.02,
                        duration: 1,
                        onComplete: done,
                    }
                );
            });
        },

        // list setting
        randomDelete() {
            const deleteLength = 15; //Math.floor(Math.random() * 3 + 2);
            for (let i = deleteLength - 1; i >= 0; i--) {
                let count = 0;
                while (count < 1) {
                    const randomListR = Math.floor(Math.random() * this.randomList.length);
                    const postItemsR = Math.floor(Math.random() * this.postItems.length);
                    console.log('--------------------------------------------');
                    const everyCheck = this.randomList.every(el => {
                        return el.contents !== this.postItems[postItemsR].contents;
                        console.log(this.postItems[postItemsR].contents);
                    });
                    if (everyCheck) {
                        console.log(this.postItems[postItemsR].contents);
                        this.randomList.splice(randomListR, 1, this.postItems[postItemsR]);
                        count = count + 1;
                    }
                }
            }
        },
        ticker() {
            this.timer = setTimeout(() => {
                if (!!this.randomList.length) {
                    this.randomDelete();
                    this.ticker();
                }
            }, 5000);
        },
        commentItemClass(index) {
            const fadeTime = 'test';
            const itemIndex = `item${index + 1}`;
            return `${itemIndex} ${fadeTime} comment-list-item`;
        },
        getListNum() {
            while (this.randomList.length < this.itemLength) {
                const r = Math.floor(Math.random() * this.postItems.length);
                const everyCheck = this.randomList.every(el => {
                    return el.contents !== this.postItems[r].contents;
                });
                if (everyCheck) {
                    this.randomList.push(this.postItems[r]);
                }
            }
            clearTimeout(this.timer);
            this.ticker();
        },

        // get data
        async fetchData() {
            try {
                const {
                    data: { posts: postItems },
                } = await fetchPosts();
                this.postItems = postItems;
                this.postItems.forEach(el => {
                    el.contents = this.spliteTxt(el.contents);
                });
                this.getListNum();
                return;
            } catch (error) {
                console.log(error);
            }
        },
        async submitForm() {
            try {
                if ((this.title === '' && this.contents === '') || this.title === '') {
                    alert('트위터ID를 입력해주세요');
                    this.$refs.userId.focus();
                } else if (this.contents === '') {
                    alert('메세지를 입력해주세요');
                    this.$refs.msg.focus();
                } else {
                    const response = await createNewPost({
                        title: this.title,
                        contents: this.contents,
                        cmtKey: this.cmtKey,
                    });
                    this.fetchData();
                    this.mee = this.spliteTxt(this.contents);

                    this.title = '';
                    this.contents = '';
                    /*setTimeout(() => {
                        this.mee = null;
                    }, 10000);*/
                }
            } catch (error) {
                console.log(error.data.error.errmsg);
                this.resultMessage = error.data.message;
            }
        },
        async login() {
            if (!this.username || !this.password) {
                alert('Fill in the account information');
                return;
            }
            try {
                const response = await this.$store.dispatch('LOGIN', {
                    username: this.username,
                    password: this.password,
                });
                bus.$emit('show:toast', response.data.message);
                //this.$router.push("/");
                this.initForm();
            } catch (error) {
                this.logMessage = error.response.data;
            }
        },
        initForm() {
            this.username = '';
            this.password = '';
        },
    },
};
</script>
<style scoped>
.fontSize14 {
    font-size: 14px !important;
}
.fontSize20 {
    font-size: 20px !important;
}
input {
    border: 1px solid red;
}

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
}
</style>
