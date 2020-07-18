<template>
    <div>
        <transition-group
            name="list"
            mode="out-in"
            v-bind:css="false"
            v-on:before-enter="listBeforeEnter"
            v-on:enter="listEnter"
            v-on:leave="listLeave"
        >
            <li v-for="item in randomList" :key="item.contents" v-html="item.contents"></li>
        </transition-group>

        <transition-group
            name="list"
            mode="out-in"
            v-bind:css="false"
            v-on:before-enter="listBeforeEnter"
            v-on:enter="listEnter"
            v-on:leave="listLeave"
        >
            <div
                v-for="item in array"
                :key="item.title"
                class="list-item"
                v-html="item.title"
            ></div>
        </transition-group>
    </div>
</template>
<script>
export default {
    data() {
        return {
            array: [
                { title: 'ㄱ' },
                { title: 'ㄴ' },
                { title: 'ㄷ' },
                { title: 'ㄹ' },
                { title: 'ㅁ' },
                { title: 'ㅂ' },
                { title: 'ㅅ' },
                { title: 'ㅈ' },
                { title: 'ㅊ' },
                { title: 'ㅌ' },
                { title: 'ㅍ' },
                { title: 'ㅎ' },
            ],
        };
    },
    mounted: function() {
        setTimeout(() => {
            this.array.splice(1, 1, { title: 'ㄲ' });
        }, 2000);
    },
};
</script>
<style scoped>
.list-enter-active,
.list-leave-active {
    transition: all 1s;
}
.list-enter,
.list-leave-to {
    opacity: 0.4;
    float: right;
    transform: translateX(100%);
}

.list-item {
    display: flex;
    flex-direction: row;
    width: 50px;
    border: 1px solid red;
}
</style>
