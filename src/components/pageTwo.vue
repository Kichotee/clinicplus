<template>
<div class="slideshow">

    <h4>What we do</h4>
    <div class="circle-design">

        <span class="green-circle"></span>
        <span class="white-circle"></span>
    </div>
    <transition-group tag="div" appear="" @before-enter= 'beforeEnter' @enter='enter' class="card-box">
        <div v-for="(item, index) in props" :key="item.id" :data-index='index' class="card"  >
            <img :src="item.slideshowImages"  alt="">
            <div class="card-text" >
                <p> {{cardText}} </p>
            </div>
            <div class="card-button" >
                <button>
                    <i>&#8649;</i>
                    See-more
                </button>
            </div>

        </div>

    </transition-group>

</div>
</template>

<script>
import gsap from 'gsap'
import scrollTrigger from 'gsap/ScrollTrigger'
export default {

    setup() {
        gsap.registerPlugin(scrollTrigger)
        const beforeEnter = (el) => {
            console.log('not entered');
            el.style.opacity = 0
            el.style.transform = 'translateY(-50px)'
        }
        const enter = (el, done) => {
            console.log(el, 'enter');
           gsap.to(
                el, {
                    scrollTrigger: {
                        target: el,
                        toggleActions: "restart reset reverse none ",
                        
                    },
                    duration: 3,
                    y: 0,
                    opacity: 1,
                    ease: 'elastic',
                    onComplete: done,
                    delay: el.dataset.index * 0.5,
                }
            )
        }
        
        
        return {
            beforeEnter,
            enter
        }
    },
    props: {
        props: {
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
    z-index: 2;
    gap: 42px;
    width: calc(324px *3.4);
    overflow: hidden;
    position: relative;
    

    /* border: solid; */
}

.card {
    width: 244px;
    height: 372px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    position: relative;
    margin-bottom: 3rem;
}

.card .card-text {
    margin: 21px 0;
    font-size: 0.8rem;
}

.card .card-button {
    overflow: hidden;
}

.card .card-button button {
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

.card .card-button button i {
    font-size: ;
}

.slideshow .card img {
    width: 244px;
    height: 193px;
    border-radius: 20px;
    /* margin-right: 45px; */
    object-fit: cover;

}

.slideshow .card img:first-of-type {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}
</style>
