<template>
<section class="testimonials-section">
    <span>
        <div class="ds-circle">

        </div>
        <div class="ds2-circle">

        </div>
    </span>
    <h4>Patients’ Testimonials</h4>
    <div class="testimonials">

        <div v-for="i in testimony" class="testimony-box">
            <p>{{i.testimony}}</p>
            <h5>-{{i.patient}}</h5>
            <hr>
        </div>

    </div>
</section>
</template>

<script>
export default {
    props: {
        designProps: {
            type: Object
        }
    },
    data() {
        return {
            testimony: [{

                    testimony: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ullam distinctio.',
                    patient: 'John Doe'
                }, {

                    testimony: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ullam distinctio.',
                    patient: 'John Doe'
                },
                {

                    testimony: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ullam distinctio.',
                    patient: 'John Doe'
                },
                {

                    testimony: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ullam distinctio.',
                    patient: 'John Doe'
                },

            ]
        }
    }
}
</script>

<style scoped>
h4 {
    margin-bottom: 3rem;
    color: #121212;
    font-size: 1.45rem;
    font-weight: 500;
    line-height: 60px;
    letter-spacing: 0em;
    text-align: left;
    z-index: 3;

}

section {
    width: 100%;
    height: 100vh;
    position: relative;

}

.testimonials {
    width: 94%;

    height: 376px;
    margin: 0 40px 1rem 0;
    padding-bottom: 0.5rem;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 20px;
    background: #FFFFFFaa;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: end;
    gap: 32px;
    color: #6E6D6D;
    text-align: left;
    font-size: 0.9rem;
    position: relative;
    z-index: 3;
    margin-bottom: 40px;

}

.testimony-box {
    padding: 0 2rem;
    display: grid;

    height: 80%;
    gap: 9px;
}

.testimony-box p {
    float: right;
    font-size: 1rem;
}

.testimony-box h5 {

    place-self: end;
    color: #121212;
    font-size: 0.8rem;
}

hr {
    position: absolute;
    top: 0;
    left: 50%;
    /* transform: rotate(90deg); */
    width: 1px;
    height: 100%;
    background: green;
    z-index: ;
}

.ds-circle {
    position: absolute;
    height: 552px;
    width: 551px;
    border-radius: 50%;
    background: transparent;
    border: 2px solid #04514C;
    z-index: 2;
    right: -280px;
    top: 20px;

}

.ds2-circle {
    position: absolute;
    height: 552px;
    width: 551px;
    border-radius: 50%;
    background: transparent;
    border: 2px solid #04514C;
    z-index: 2;
    right: -367px;
    top: 79px;

}

/* Media responsiveness */

@media screen and (max-width:486px) {

    .testimonials {
        width: 18.875rem;
        margin: 0 auto;
        height: auto;
        box-shadow: 0px 4px 4px 0px #00000040;
        border-radius: 20px;
        background: #FFFFFFaa;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
        color: #6E6D6D;
        text-align: left;
        font-size: 0.9rem;
        position: relative;
        z-index: 3;

    }

    .testimony-box {
        max-height: 80%;
        padding: 0;
    }

    hr {
        display: none;
    }

    .testimony-box:not(.testimony-box:last-of-type) {
        border-bottom: 2px solid #04514C;
    }

    .testimony-box p,
    .testimony-box h5 {
        padding: 0 1rem;
    }
    h4{
        text-align: center;
        font-size: 1.25rem;
        margin: 1rem 0;
    }
    .ds-circle {
    position: absolute;
    height: 1083px;
    width: 511px;
    border-radius: 90%;
    background: transparent;
    border: 2px solid #04514C;
    z-index: 2;
    left: 153px;
    top: -620px;

}

.ds2-circle {
    position: absolute;
    height: 1083px;
    width: 511px;
    border-radius: 50%;
    background: transparent;
    border: 2px solid #04514C;
    z-index: 2;
    left: -189;
    top: -549px;

}

}
</style>
