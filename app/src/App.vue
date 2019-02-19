<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        created() {
            
        },
        beforeCreate() {
            console.log(new Date());
        }
    }
</script>


<style lang="less" scoped>
    #app {
        height: 100%;
    }
    html {
        height: 100%;
    }
    body {
        margin: 0;
        height: 100%;
    }
    h1, h2, h3, h4, h5 {
        margin: 0;
    }
</style>

