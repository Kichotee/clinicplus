<template>
<div class="slideshow">

    <h4>What we do</h4>
    <span>
        <div class="green-circle">

        </div>
        <div class="white-circle">

        </div>
        <!-- <img :src="designProps[1].img" alt=""> -->
        <!-- <img class="white-circle" :src="designProps[0].img" alt=""> -->
    </span>

    <transition-group tag="div" appear="" @before-enter='beforeEnter' @enter='enter' class="card-box">

        <div class="circle-design">

        </div>
        <div v-for="(item, index)  in props" :key="item.id" :data-index='index' class="slide-card">
            <img :src="item.img" alt="">
            <div class="card-text">
                <p> {{cardText}} </p>
            </div>
            <div class="card-button">
                <button>
                    <i>&#8649;</i>
                    
                    See-more
                </button>
            </div>

        </div>

    </transition-group>
    <!-- <button @click="yes" class="moveButton">Move card</button> -->

</div>
</template>

<script>
import gsap from 'gsap'
import scrollTrigger from 'gsap/ScrollTrigger'
import {
    onMounted
} from "vue";

export default {

    setup() {
        gsap.registerPlugin(scrollTrigger)
        const beforeEnter = (el) => {

            el.style.opacity = 0
            el.style.transform = 'translateY(-10%)'
            
        }
        const enter = (el, done) => {
            let mm = gsap.matchMedia()
            gsap.to(
                el, {
                    scrollTrigger: {
                        target: el,
                        toggleActions: "play reverse play none ",
                        start: "18% 10%",
                        end: "30% center",
                        // markers: true,
                    },
                    duration: 3,
                    y: 0,
                    opacity: 1,
                    ease: 'elastic',
                    onComplete: done,
                    delay: el.dataset.index * 0.5,
                }
            )
            mm.add('(max-width:486px)', () => {
                gsap.to(el, {
                    scrollTrigger: {
                        target: el,
                        toggleActions: 'play reverse play none',
                        
                        start: '10% center',
                        end: "40% center",
                        // markers: true
                    },
                    duration: 2,

                    y: 0,
                    opacity: 1,
                    ease: 'elastic',
                    onComplete: done,
                    delay: el.dataset.index * 0.25,

                })
            })

        }

        const yes = () => {

        }

        return {
            enter,
            beforeEnter,
            yes

        }
    },

    props: {
        props: {
            type: Object,
            required: true
        },
        designProps: {
            type: Object,
            required: true
        },

    },

    data() {
        return {
            cardText: 'Connect with Affordable healthcare professionals around you and get the best treatment.',
            cards: null,
            hidden: 'hidden',

        }
    }
}
// inheritAttrs:false
</script>

<style scoped>
.slideshow {
    /* height: 100vh; */
    overflow: none;
    position: relative;
    z-index: 100;

}

h4 {
    margin-bottom: 3rem;
    color: #121212;
    font-size: 1.45rem;
    font-weight: 500;
    line-height: 60px;
    letter-spacing: 0em;
    text-align: left;

}

.card-box {
    display: flex;
    flex-direction: row;
    
    gap: 42px;
    /* width: calc(244*4px); */
    overflow-x: scroll;
    overflow-y: hidden;
    position: relative;
    scroll-behavior: smooth;

}

.card-box::-webkit-scrollbar {
    width: 0;
}

.slide-card {
    width: 244px;
    height: 372px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    position: relative;
    margin-bottom: 3rem;
}

.slide-card .card-text {
    margin: 1.3rem 0;
    font-size: 75%;
}

.slide-card .card-button {
    overflow: hidden;
}

.slide-card .card-button button {
    position: absolute;
    width: 120px;
    height: 43px;
    right: 0;
    bottom: 0;
    border: 0;
    outline: 0;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 25px;
    background: #04514Cdf;
    color: #fff;
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 1.25rem;
    cursor: pointer
}

.hidden-card {
    display: none;
}

.visible-card {
    display: none;
}

.slide-card .card-button button i {
    font-size: ;
}

.slideshow .slide-card img {
    width: 244px;
    height: 60%;
    border-radius: 20px;
    /* margin-right: 45px; */
    object-fit: cover;

}

.slideshow .slide-card img:first-of-type {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}

span .green-circle {
    height: 597px;
    width: 651px;

    background: #04514C;
    ;
    border-radius: 50%;
    position: absolute;
    right: -305px;
    top: 45px;
    z-index: 2;

}

span .white-circle {
    height: 602px;
    width: 651px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    right: -395px;
    top: 120px;
    border: 2px solid #04514C;
    z-index: 2;

}

/* responsiveness */
@media only screen and (max-width:468px) {
    .slideshow {

}
    h4 {
        margin-bottom: 1rem;
        color: #121212;
        font-size: 1.75rem;
        font-weight: 500;
        line-height: 30px;
        text-align: center;
    }

    .card-box {
        display: flex;
        flex-direction: column;
        height: auto;
        padding-bottom: 5%;
        z-index: 2;
        gap: 42px;
        align-items: center;
        overflow-y: hidden;

    }

    .slide-card {
        width: 19rem;
        height: 20.25rem;
        background: #FFFFFF;
        border-radius: 20px;
        gap: 1rem;
        margin: 0;

    }

    .slideshow .slide-card img {
        width: 100%;
        height: 60%;
        border-radius: 20px;
        object-fit: cover;

    }

    .slide-card .card-text {
        margin: 1rem 0;
        font-size: 90%;
    }

    span .green-circle {
        height: 929px;
        width: 551px;
        background: #04514C;
        border-radius: 70%;
        position: absolute;
        right: -335px;
        top: 70px;

    }

    span .white-circle {
        height: 929px;
        width: 551px;
        background: #fff;
        border-radius: 50%;
        position: absolute;
        right: -425px;
        top: 140px;
        border: 2px solid #04514C;

    }

}

</style>
