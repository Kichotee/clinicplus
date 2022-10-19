<template>

<h4>Patients’ Testimonials</h4>
<div class="testimonials">
    <div v-for="i in testimony" class="testimony-box">
        <p>{{i.testimony}}</p>
        <h5>-{{i.patient}}</h5>
        <hr>
    </div>

</div>
</template>

<script>
export default {
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

<style>
h4 {
    margin-bottom: 3rem;
    color: #121212;
    font-size: 1.45rem;
    font-weight: 500;
    line-height: 60px;
    letter-spacing: 0em;
    text-align: left;

}

.testimonials {
    width: 94%;

    height: 376px;
    margin: 0 40px 1rem 0;
    padding-bottom: 0.5rem;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 20px;
    background: #FFFFFFf0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: end;
    gap: 32px;
    color: #6E6D6D;
    text-align: left;
    font-size: 0.9rem;
    position: relative;

}

.testimony-box {
    padding: 0 2rem;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    /* border:solid; */
    height: 80%;
    gap: 9px;
}

.testimony-box p {
    align-self: start;
    font-size: 16px;
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
    height:100%;
    background: green;
    z-index: 2;
}
</style>
