<template>
    <div class="message-wrap">
        <div class="section">
            <div class="message-txt">
                {{ mee }}
            </div>
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
                    v-for="item in randomList"
                    :class="commentItemClass()"
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
            showModal: true,
            username: 'test@test.com',
            password: 'testtest',
            logMessage: '',
            title: '',
            contents: '',
            cmtKey: this.$id('ddd'),
            resultMessage: '',
            postItems: null,
            randomList: [],
            mee: '',
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
    created() {
        if (!this.showModal) {
            this.fetchData();
        }
    },
    computed: {
        // liClass() {
        //     return {
        //         test: this.fontSize(),
        //         'comment-list-item': 'comment-list-item',
        //     };
        // },
    },
    mounted() {
        this.login();
    },
    methods: {
        spliteTxt(string) {
            const arr = string.split('');
            arr.forEach((t, i) => {
                arr[i] = `<span>${t}</span>`;
            });
            return arr.join('');
        },
        listEnter: function(el, done) {
            const text = el.querySelectorAll('span');
            function random(min, max) {
                return Math.random() * (max - min) + min;
            }
            text.forEach((ele, i) => {
                gsap.from(
                    ele,
                    {
                        opacity: 0,
                        x: random(-100, 100),
                        y: random(-50, 50),
                        z: random(-200, 0),
                        scale: 0.2,
                        delay: i * 0.02,
                        duration: 1,
                        onComplete: done,
                    },
                    '+=0'
                );
            });
        },
        listLeave: function(el, done) {
            const text = el.querySelectorAll('span');
            function random(min, max) {
                return Math.random() * (max - min) + min;
            }
            text.forEach((ele, i) => {
                console.log(ele);
                gsap.to(
                    ele,
                    {
                        opacity: 0,
                        x: random(-100, 100),
                        y: random(-50, 50),
                        z: random(-200, 0),
                        scale: 0.2,
                        delay: i * 0.02,
                        duration: 1,
                        onComplete: done,
                    },
                    '+=0'
                );
            });
        },

        randomDelete() {
            const deleteLength = 1; //Math.floor(Math.random() * 3 + 2);
            for (let i = deleteLength - 1; i >= 0; i--) {
                let count = 0;
                while (count < 1) {
                    const randomListR = Math.floor(Math.random() * this.randomList.length);
                    const postItemsR = Math.floor(Math.random() * this.postItems.length);
                    const everyCheck = this.randomList.every(el => {
                        return el.contents !== this.postItems[postItemsR].contents;
                    });
                    if (everyCheck) {
                        this.randomList.splice(randomListR, 1, this.postItems[postItemsR]);
                        count = count + 1;
                    }
                }
            }
            console.log(this.randomList);
        },
        ticker() {
            setTimeout(() => {
                if (!!this.randomList.length) {
                    this.randomDelete();
                    this.ticker();
                }
            }, 5000);
        },
        commentItemClass() {
            const fontSize = Math.random() >= 0.5 ? 'fontSize20' : 'fontSize20';
            const fadeTime = 'test';
            return `${fontSize} ${fadeTime} comment-list-item`;
        },
        modalClose() {
            this.showModal = false;
            if (!this.randomList.length) {
                this.fetchData();
            }
        },
        getListNum() {
            while (this.randomList.length < 14) {
                const r = Math.floor(Math.random() * this.postItems.length);
                const everyCheck = this.randomList.every(el => {
                    return el.contents !== this.postItems[r].contents;
                });
                if (everyCheck) {
                    this.randomList.push(this.postItems[r]);
                }
            }
            this.ticker();
        },
        open() {
            this.showModal = true;
        },
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
                    this.mee = this.contents;
                    document.querySelector('.message-txt').classList.add('active');
                    this.title = '';
                    this.contents = '';
                    // setTimeout(function () {
                    //   document.querySelector('.message-txt').classList.remove('active');
                    // },5000)
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
.comment2-list {
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    font-size: 400px;
}
.fontSize14 {
    font-size: 14px !important;
}
.fontSize20 {
    font-size: 20px !important;
}
input {
    border: 1px solid red;
}

.comment-list-item {
    height: 2.5em;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    perspective: 400px;
}

/*.comment-list-item {
    height: 2.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1s;
}
.comment-list-enter,
.comment-list-leave-to {
    opacity: 0;
}
.comment-list-leave-active {
    position: absolute;
}*/
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
