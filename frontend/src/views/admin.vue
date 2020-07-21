<template>
    <div class="adminBbs">
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
        <div class="adminTbl">
            <table v-if="postItems">
                <thead>
                    <tr>
                        <th>INDEX</th>
                        <th>ID</th>
                        <th>TEXT</th>
                        <th>DATE</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in postItems" :key="index">
                        <td style="text-align:center">{{ index + 1 }}</td>
                        <td style="text-align:center">{{ item.title }}</td>
                        <td>{{ item.contents }}</td>
                        <td style="text-align:center">{{ getDate(item.createdAt) }}</td>
                        <td style="text-align:center">
                            <button type="button" @click="removePost(item._id)">DELETE</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <LoadingSpinner v-else />
        </div>
    </div>
</template>
<script>
import { createNewPost, deletePostById, fetchPosts } from '@/api/posts';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import bus from '@/utils/bus';

export default {
    name: 'comment',
    data() {
        return {
            postItems: null,
            username: 'test@test.com',
            password: 'testtest',
            title: '',
            contents: '',
            cmtKey: this.$id('ddd'),
        };
    },
    watch: {},
    components: { LoadingSpinner },
    created() {
        this.fetchData();
    },
    computed: {},
    mounted() {
        this.login();
    },
    methods: {
        getDate(dateString) {
            const setDate = new Date(dateString);
            const mm = setDate.getMonth() + 1;
            const dd = setDate.getDate();
            const date = [
                setDate.getFullYear(),
                (mm > 9 ? '' : '0') + mm,
                (dd > 9 ? '' : '0') + dd,
            ].join('.');
            var hours = setDate.getHours();
            var minutes = setDate.getMinutes();
            var ampm = hours >= 12 ? '오후' : '오전';
            hours = hours % 12;
            hours = hours ? hours : 12;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            const time = [hours, minutes].join(':');

            return `${date} / ${ampm} ${time}`;
        },
        async removePost(id) {
            try {
                if (confirm('Delete it?')) {
                    const response = await deletePostById(id);
                    await this.fetchData();
                }
            } catch (error) {
                console.log(error);
            }
        },
        async fetchData() {
            try {
                const {
                    data: { posts: postItems },
                } = await fetchPosts();
                this.postItems = postItems;
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
                    this.title = '';
                    this.contents = '';
                }
            } catch (error) {
                console.log(error);
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
.adminBbs {
    display: flex;
    background: #fff;
    padding-left: 300px;
}
.form {
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    padding: 30px;
}
.form input,
.form button {
    font-family: 'Sans-serif' !important;
}
.adminTbl {
    flex: 1 1 auto;
    padding: 30px;
}
table {
    width: 100%;
    background: #fff;
    border-collapse: collapse;
}
td,
th {
    font-family: 'Sans-serif' !important;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #eee;
}
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
