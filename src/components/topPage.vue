<template>
<div class="top-page">
    <div class="text-content">
        <div class="text-content-first-row">
            <transition name="headerText" appear="">

                <h2>
                    Affordable <span class="color-text"> Healthcare</span>

                    <br> anytime, <span class="color-text"> anywhere</span>
                </h2>
            </transition>
            <p>
                Connect with Affordable healthcare <br> professionals around you and get the best <br> treatment.
            </p>
        </div>

        <button>Learn More</button>
    </div>
    <transition name="img" appear>
        <div class="img-content">
            <img src="../assets/clinicplus/toppageimage.png" alt="">
        </div>
    </transition>
</div>
</template>

<script>
export default {
    name: 'topPage',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.top-page {
    display: grid;
    grid-template-columns: 1fr 0.7fr;
    margin: 21px 0 0;
    height: 100vh;
    justify-items: center;
    align-items: start;

}

.top-page .text-content {
    display: flex;
    flex-direction: column;
    justify-self: left;
    text-align: left;
    margin: 8.5625rem 0 0;
}

.text-content-first-row {}

.top-page .text-content h2 {
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 2.25rem;
    color: #121212;

}

.top-page .text-content p {
    font-weight: 400;
    font-size: 0.9rem;
    color: #6E6D6D;
    margin-top: 0.6rem;

}

.top-page .text-content .color-text {
    color: #04514C;
}

.top-page .img-content img {
    width: 28.125rem;
}

.top-page .img-content {
    justify-self: end;

}

button {
    height: 48px;
    width: 127px;
    background-color: #04514C;
    color: #FFFFFF;
    border: 0;
    outline: 0;
    border-radius: 3px;
    margin: 2.5rem 0;

}

.img-enter-from {
    transform: translateY(-75px);
    opacity: 0;
}

.img-enter-to {
    transform: translateY(0);
    opacity: 1;
}

.img-enter-active {
    transition: all 3s ease;
}

.headerText-enter-from {
    transform: translateX(-200px);
    opacity: 0;
}

.headerText-enter-to {
    transform: translateX(0);
    opacity: 1;
}

.headerText-enter-active {
    transition: all 2s ease;
}

/* Media responsiveness */

/* Tablet */
@media screen and (max-width:821px) {
    .top-page {
        margin: 0;
        height: 50vh;
    }

    .top-page .img-content img {
        width: 24.725rem;
        margin-top: 3rem;
    }

    .top-page .text-content h2 {
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 2.25rem;
        color: #121212;
    }

    button {
        height: 3rem;
        width: 6rem;
        background-color: #04514C;
        color: #FFFFFF;
        border: 0;
        outline: 0;
        border-radius: 3px;
        margin: 3rem 0;

    }
}

/* ?Mobile */

@media screen and (max-width:468px) {
    .top-page {
        margin: 0;
        padding: 0;
        height: 50vh;
        display: block;

    }

    .top-page .img-content img {
        display: none;
    }

    button {
        width: 100%;
    }
     .top-page .text-content{
        margin: 2rem 0 0;
     }
    .top-page .text-content h2{
        font-size: 2rem;
        padding: 0;
        margin:0;
        line-height: 3rem;

    }

    .top-page .text-content p {
        font-weight: 400;
        font-size: 1rem;
        color: #6E6D6D;
        margin-top: 0.6rem;

    }

}
@media only screen and (max-width:478px) {
    .top-page{
        height: 40vh;
       
    }
    button{
        margin: 1.75rem 0;
    }
}
@media only screen and (max-width:380px) {
    .top-page {
        margin: 0;
        padding: 0;
        height: 50vh;
        display: block;
        margin-bottom: 10px;

    }

    .top-page .img-content img {
        width: 24.725rem;
        margin-top: 3rem;
        display: none;
    }

    button {
        width: 100%;
    }
     .top-page .text-content{
        margin: 1rem 0 0;
     }
    .top-page .text-content h2{
        font-size: 2rem;
        padding: 0;
        margin:0;
        line-height: 3rem;

    }

    .top-page .text-content p {
        font-weight: 400;
        font-size: 1rem;
        color: #6E6D6D;
        margin-top: 0.6rem;

    }

}
</style>
