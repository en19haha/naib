<template>
    <ul>
        <li v-for="(item, index) in postItems" :key="index">
            {{ index }}
            {{ item.contents }}
            <button type="button" @click="removePost(item._id)">delete</button>
        </li>
    </ul>
</template>
<script>
import { deletePostById, fetchPosts } from '@/api/posts';
import bus from '@/utils/bus';

export default {
    name: 'comment',
    data() {
        return {
            postItems: null,

            username: 'test@test.com',
            password: 'testtest',
        };
    },
    watch: {},
    components: {},
    created() {
        this.fetchData();
    },
    computed: {},
    mounted() {
        this.login();
    },
    methods: {
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
                console.log(postItems);
                return;
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
