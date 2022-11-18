<template>
<div class="video-testimonials">
    <h4>Why use Clinic Plus?</h4>
    <p>Click on the video below to find out more</p>
    <div class="vid-boilerplate">
        <i class="fa-solid fa-play"></i>
    </div>
    <div class="box">
        <p>We can be your trusted healthcare provider at any day  and time</p>
        <button>Book Appointment</button>
    </div>

</div>
</template>

<script>
export default {

}
</script>

<style>
.video-testimonials {
    width: 94%;

    height: auto;
    margin: 0 40px 1rem 0;
    padding-bottom: 0.5rem;
    text-align: left;
}

.video-testimonials p {
    color: #6E6D6D;
    margin-bottom: 1rem;
}

.vid-boilerplate {
    width: 100%;

    height: 16.265rem;
    background: #121212;
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;



}
i{
    color: white;
}

.video-testimonials .box {
    height: 156px;
    width: 100%;
    border-radius: 25px;
    border: solid 2px #04514C;
    padding: 0.5rem 2rem;
    line-height: 30px;
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: baseline;
}

.video-testimonials .box p {
    /* width: 40%; */
    flex-grow: 1;
    font-size: 20px;
    padding: 0 1.5rem;
}

.video-testimonials button {
    height: 59px;
    background: #04514C;
    flex-grow: 1.5;
    width: 70%;
    outline: none;
    border: none;
    border-radius: 20px;
    font-size: 1.25rem;
    color: #fdfdfd;
    line-height: 30px;
}

@media screen and (max-width:486px) {
    .video-testimonials {
        height: auto;
        margin: 0 auto;
        padding: 0;
    text-align: center;

        
    }

    .vid-boilerplate {
        width: 100%;

        height: 13.25rem;
        background: #121212;
        margin-bottom: 4rem;

    }

    .video-testimonials .box {
        width: 100%;
        height: ;
        padding: 0.25rem 0.5rem;
        
    }
    .video-testimonials .box p{
        font-size: 0.9rem;
        line-height: 24px;
        font-weight: 500;
        width: 40%;
        margin: 0;
        padding: 0;
        text-align: left;
    } 
    .video-testimonials button{
        width: 42%;
        font-size: 0.8rem;
         flex-grow: 1.5;
        height: 1.9rem;
        line-height: 16px;
        border-radius: 5px;
    }
}
</style>
