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
    name: 'HelloWorld',
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
    margin: 137px 0 0;
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
    ;
}

.top-page .text-content .color-text {
    color: #04514C;
}

.top-page .img-content img {
    width: 450px;
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
    margin: 40px 0;

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
.headerText-enter-from{
    transform: translateX(-200px);
    opacity: 0;
}
.headerText-enter-to{
    transform: translateX(0);
    opacity: 1;
}
.headerText-enter-active{
   transition: all 2s ease;
}
</style>
