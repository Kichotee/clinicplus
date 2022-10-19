<template>
<home-page />
</template>

<script>
import homePage from '../src/views/HomePage.vue'

export default {
    components: {
        homePage
    }
}
</script>

<style>
#app {
    font-family: Poppins, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    overflow-x: hidden;
    background: #fff;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
