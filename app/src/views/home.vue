<template>
    <div class="home-page">
        <div>{{ name }}的首页</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '呱呱奇遇记',
            }
        }
    }
</script>


<style lang="less">
    .home-page {
        font-size: 20px;
    }
</style>

