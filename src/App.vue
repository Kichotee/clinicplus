<template>
<div class="home">

    <nav v-if="![`LoginForm`, `Signup`,`dashboard`].includes($route.name)">

        <div class="navlinks">
            <router-link to="/">
                <img :src="logo" alt="">
            </router-link>

            <ul>
                <li v-for="item in navElements">
                    <p>{{item.element}}</p>
                </li>
            </ul>
            <div class="register-box">
                <router-link to="/LoginForm">
                    Login
                </router-link>
                <router-link to="/Signup">
                    <button>Register</button>
                </router-link>

            </div>
            <div @click="toggleMenu" class="menu-icon">
                <img src="./assets/clinicplus/menu.png" alt="">
            </div>
        </div>

    </nav>

    <div v-if="activeMenu && ![`LoginForm`, `Signup`,`dashboard`].includes($route.name)" class="navlinks-mobile">
        <ul>
            <li v-for="item in navElements">
                <p>{{item.element}}</p>
            </li>
             <div class="register-box">
            <router-link to="/LoginForm">
                Login
            </router-link>
            <router-link to="/Signup">
                <button>Register</button>
            </router-link>

        </div>
        </ul>
       
    </div>
</div>

<router-view></router-view>
<Footer v-if="![`LoginForm`, `Signup`,`dashboard`].includes($route.name)" />
</template>

<script>
import homePage from '../src/views/HomePage.vue'
import Footer from '../src/components/Footer.vue'

export default {
    components: {
        homePage,
        Footer
    },
    data() {
        return {
            activeMenu: false,
            navElements:

                [{
                        element: 'About'
                    },
                    {
                        element: 'Services'
                    },
                    {
                        element: 'Contact'
                    }

                ],
            logo: require('./assets/clinicplus/logo.png'),
        }
    },
    methods: {
        toggleMenu() {
            this.activeMenu = !this.activeMenu
        }
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

::-webkit-scrollbar {
    width: 0;
    scroll-behavior: smooth;
}

.home nav {

    padding: 0 0 0 3.56rem;
    background: #f5f5f5;
    border-bottom: 1px solid #2F845B;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 3;
    color: #2c3e50;
}

.navlinks {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    justify-items: center;
    align-items: center;
    height: 4.75rem;

}

.home nav img {
    width: 5.875rem;
    height: 2.3475rem;
    justify-self: start;
    /* animation: image-pulse 2s infinite; */

}

.home nav ul {
    width: 598px;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    justify-self: center;
}

.home nav ul li {
    margin: 0;
    padding: 0;
    color: #2c3e50;
}

.home nav ul li p:hover {
    animation: hover-pulse 2s infinite;
}

.home nav ul li p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.4025rem;
    cursor: pointer;
}

.home nav .register-box {
    width: 10.3745rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-self: center;
    color: #2c3e50;

}

.home nav .register-box a {
    color: #2c3e50;
    font-family: poppins;
}

button {
    height: 2.125rem;
    width: 5.875rem;
    background-color: #04514C;
    color: #FFFFFF;
    border: 0;
    outline: 0;
    border-radius: 3px;
    cursor: pointer;

}

.navlinks-mobile a {
    color: #fff;
}

.navlinks-mobile a.router-exact-link-active {
    color: #fff;
}

.navlinks-mobile {
    display: none;
}

.menu-icon {
    display: none;
}

.home nav .menu-icon img {
    width: 40px;
    height: 30px;

}

@keyframes hover-pulse {
    50% {
        font-size: 1.2rem;
        color: #04514C;
    }
}

@keyframes image-pulse {
    50% {
        width: 100px;
    }
}

/* media reponsiveness */
@media screen and (max-width:821px) {
    .home nav {
        display: flex;
        height: 4rem;
        width: 100%;
        padding: 0 12px 0 137px;
        background: #f5f5f5;
        border-bottom: 1px solid #2F845B;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        z-index: 3;
    }

    .home nav img {
        width: 5rem;
        height: 2rem;
        justify-self: start;

    }

    .home nav ul li p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 0.9rem;
        line-height: 1.2rem;
        cursor: pointer;
    }

    .home nav .register-box {
        width: 9.3745rem;
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-self: center;
        font-size: 0.9rem
    }

    .home nav .register-box a {
        color: #2c3e50;
    }

    button {
        height: 1.75rem;
        width: 4.875rem;
        background-color: #04514C;
        color: #FFFFFF;
        border: 0;
        outline: 0;
        font-size: 0.8rem;
        border-radius: 3px;

    }
}

@media screen and (max-width:468px) {
    .home nav {
        padding: 0 1rem 0;

    }

    .navlinks {
        display: flex;
        justify-content: space-between;
        width: 100%;

    }

    .home nav ul {
        display: none;
        /* flex-direction: column; */

    }

    .page {
        padding: 0 1.25rem 0;
    }

    .menu-icon {
        display: block;
        width: 60px;

    }

    .menu-icon img {
        width: 30px;

    }

    .home nav .register-box {
        display: none;

    }

    .navlinks-mobile {
        display: block;
        width: 100%;
        height: 25vh;
        background: #04514C;
        color: #ffff;
    }

    .navlinks-mobile ul {
        height: 80%;
        display: flex;
        flex-direction: column;
        width: 100%;
        text-align: left;
        align-items: center;
        justify-content: space-evenly;
        padding: 0 1.25rem;

    }

    .navlinks-mobile .register-box {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        border: solid;
        text-align: left;
        gap: 10px;

    }

    button {
        background-color: #f5f5f5;
        width: 100%;
        color: #04514C;
        font-size: 1.15rem;
        text-align: center;
        padding: 0.25rem 0.5rem;

    }

}
</style>
