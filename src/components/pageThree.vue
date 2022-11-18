 <template>
<div class="book-appointments">
    <h4>Book an appointment</h4>

    <transition-group tag="div" appear @before-enter='featureBeforeEnter' @enter='featureEnter' class="feature-card-box">
        <span>
            <div class="ds-circle">

            </div>
            <div class="ds2-circle">

            </div>

        </span>
        <div v-for="(item, index) in props" :key="item.id" class="card" :data-index='index'>

            <div class="circle-design">
                <span class="circle">

                    <img :src="item.vectorImages" alt="">
                </span>
            </div>
            <div class="card-header">
                <p>{{item.header}}</p>
            </div>
            <div class="card-text">
                <p>{{item.text}}</p>
            </div>
        </div>
    </transition-group>

    <h4>Our top Doctors</h4>
    <transition-group tag="div" appear @before-enter='doctorBeforeEnter' @enter='doctorEnter' class="doctor-card-box">
        <div v-for="(item, index)  in docProps" :key="item.id" class="doc-card" :data-index='index'>
            <div class="doc-card-body">

                <img :src="item.doctorImages" alt="">
                <div class="doc-card-text">
                    <h3>
                        {{item.docName}}
                    </h3>
                    <p>
                        {{item.specialty}}
                    </p>
                </div>

            </div>
            <button>Connect</button>
        </div>

    </transition-group>
</div>
</template>

<script>
import gsap from 'gsap'
import scrollTrigger from 'gsap/ScrollTrigger.js'
import {
    onMounted
} from "vue";

export default {
    setup() {

        gsap.registerPlugin(scrollTrigger)
        const doctorBeforeEnter = (el) => {

            el.style.opacity = 0
            el.style.transform = 'translateX(-30px)'
        }
        const doctorEnter = (el, done) => {

            gsap.to(
                el, {
                    scrollTrigger: {
                        trigger: el,
                        toggleActions: 'restart pause resume none',
                        scrub: true
                    },

            
                    x: 0,
                    opacity: 1,
                    ease: 'bounce',
                    onCompleted: done,
                    delay: el.dataset.index * 0.25,
                }

            )

        }
        const featureBeforeEnter = (el) => {

            el.style.opacity = 0
            
        }
        const featureEnter = (el, done) => {
            let media = window.matchMedia(("max-width:468px"))
            if (media.matches) {
                el.style.opacity = 0
                el.style.transform = 'translateX(-300px) rotate(45deg)'
            }
            let mm = gsap.matchMedia()
           mm.add('(max-width:486px)', ()=>{
             gsap.to(
                el, {
                    scrollTrigger: {
                        target: el,
                        toggleActions: "restart pause resume none",
                        scrub: false,
                        start: "40% 90%",
                        end: "55% 90%",
                        // markers:true

                    },
                    duration: 10,
                   
                    opacity: 1,
                    ease: 'elastic',
                    onComplete: done,
                    delay: el.dataset.index * 0.5,
                }
            )
           })
            gsap.to(
                el, {
                    scrollTrigger: {
                        target: el,
                        toggleActions: "restart pause resume none ",
                        start: "29% 50%",
                        end: "52% 75%",
                        // markers:true


                    },
                    duration: 10,
                    y: 0,
                    rotation: 0,
                    opacity: 1,
                    // stagger:{amount:0.5,

                    // },
                    ease: 'elastic',
                    onComplete: done,
                    delay: el.dataset.index * 0.5,
                }
            )

        }

        gsap.from(document.getElementsByTagName('h4'), {
            duration: 1,
            y: 50
        })
        // onMounted(()=>{
        //   const  cards=document.getElementsByClassName('card')
        //     console.log(cards.length,cards);
        //  })

        return {
            doctorBeforeEnter,
            doctorEnter,
            featureBeforeEnter,
            featureEnter

        }
    },
    props: {
        props: {
            type: Object,
            required: true
        },
        docProps: {
            type: Object
        }
    }
}
</script>

<style scoped>
.book-appointments {
    position: relative;
    z-index: 99;

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

.feature-card-box {
    display: flex;
    width: calc(374px *3.4);
    position: relative;
    height: 70vh;
    width: ;
    display: flex;
    flex-direction: row;
    gap: 2rem;
}

.card {
    width: 296px;
    height: 302px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    display: flex;

    flex-direction: column;
    align-items: center;
    padding: 1rem 1rem;
    justify-content: space-around;

}

.circle-design {
    height: 7.5rem;
    width: 7.5rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

}

.circle {
    height: 4.063rem;
    width: 4.063rem;
    background: #04514C;
    border-radius: 50%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

}

.circle img {
    width: 30px;
    height: 30px;
    border: 0px;
}

.card-text {
    flex-basis: 95px;
    text-align: left;
    color: #6E6D6D;
    font-size: 0.9rem;
}

.card-header {
    width: 100%;
    text-align: left;
    font-weight: 500;
}

.doctor-card-box {
    width: 80vw;
    height: 50vh;
    margin-bottom: 4rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: start;
    row-gap: 60px;
}

.doc-card {
    width: 276px;
    height: 110px;
    background: #FFFFFF;
    box-shadow: 0px 2px 2px #00000040;
    border-radius: 20px;
    position: relative;
}

.doc-card-body {
    display: flex;
    margin: 0.4rem 0.8rem;
    align-items: center;
    gap: 1rem;

}

.doc-card img {
    width: 65px;
}

.doc-card-text {
    text-align: left;
}

.doc-card-text h3 {
    font-weight: 400;
    font-size: 1rem;
    line-height: 28px;
}

.doc-card-text p {
    color: #6E6D6D;
    font-weight: 400;
    font-size: 1rem;
    line-height: 28px;
}

.doc-card button {
    position: absolute;
    width: 100px;
    height: 31px;
    right: 0;
    bottom: 0;
    border: 0;
    outline: 0;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 20px;
    background: #04514Cdf;
    color: #fff;
    font-size: 1rem;
    cursor: pointer
}

.feature-card-box span .ds-circle {
    height: 37.625rem;
    width: 40.6875rem;
    border-radius: 50%;
    background: transparent;
    border: 2px solid #04514C;
    position: absolute;
    transform: translate(-500px, 16px);
    z-index: ;
}

.feature-card-box span .ds2-circle {
    height: 32rem;
    width: 28.188rem;
    border-radius: 80%;
    background: transparent;
    border: 2px solid #04514C;
    position: absolute;
    left: 0;
    transform: translate(-400px, 16px);
    z-index: ;
}

@media only screen and (max-width:486px) {
    h4 {
        margin-bottom: 1rem;
        text-align: center;
        font-size: 1.25rem;
    }

    h4:nth-of-type(2) {
        margin: 1.25rem 0;
    }

    .feature-card-box {
        display: flex;
        flex-direction: column;
        height: auto;
        width: 100%;
        align-items: center;
    }

    .card {
        width: 16.875rem;
        height: 249px;
    }

    .doctor-card-box {
        width: 100%;
        margin-bottom: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: start;
        height: auto;
        row-gap: 30px;
    }

    .feature-card-box span .ds-circle {
        height: 46.625rem;
        width: 40.6875rem;
        border-radius: 50%;
        background: transparent;
        border: 4px solid #04514C;
        position: absolute;
        transform: translate(-600px, -433px);
        z-index: ;
    }

    .feature-card-box span .ds2-circle {
        height: 43rem;
        width: 28.188rem;
        border-radius: 80%;
        background: transparent;
        border: 4px solid #04514C;
        position: absolute;
        left: 0;
        transform: translate(-350px, -473px);
        z-index: ;
    }
}
@media only screen and (max-width:377px) {
    .book-appointments {
 margin-top: 1rem;
 
}
    h4 {
        margin-bottom: 1rem;
        text-align: center;
        font-size: 1.25rem;
    }

    h4:nth-of-type(2) {
        margin: 1.25rem 0;
    }

    .feature-card-box {
        display: flex;
        flex-direction: column;
        height: auto;
        width: 100%;
        align-items: center;
    }

    .card {
        width: 16.875rem;
        height: 249px;
    }

    .doctor-card-box {
        width: 100%;
        margin-bottom: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: start;
        height: auto;
        row-gap: 30px;
    }

    .feature-card-box span .ds-circle {
        height: 46.625rem;
        width: 40.6875rem;
        border-radius: 50%;
        background: transparent;
        border: 4px solid #04514C;
        position: absolute;
        transform: translate(-600px, -433px);
        z-index: ;
    }

    .feature-card-box span .ds2-circle {
        height: 43rem;
        width: 28.188rem;
        border-radius: 80%;
        background: transparent;
        border: 4px solid #04514C;
        position: absolute;
        left: 0;
        transform: translate(-350px, -473px);
        z-index: ;
    }
}
</style>
