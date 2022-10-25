<template>


    <div class="page">

        <topPage>

        </topPage>

        <pageTwo :props='img' :designProps='designImg'></pageTwo>
        <pageThree :props="vectorImg" :docProps='doctorImg'></pageThree>
        <pageFour :designProps='designImg'></pageFour>
        <page-five></page-five>
       

    

</div>

</template>

<script>
// @ is an alias to /src
import topPage from '@/components/topPage.vue'
import PageTwo from '../components/pageTwo.vue'
import pageThree from '../components/pageThree.vue'
import pageFour from '../components/pageFour.vue'
import pageFive from '../components/pageFive.vue'
import footer from '../components/Footer.vue'

export default {
    name: 'HomeView',
    components: {
        topPage,
        PageTwo,
        pageThree,
        pageFour,
        pageFive,

    },
    data() {
        return {
       
            designImg: [{
                    img: require('../assets/clinicplus/white-circle.png'),
                    id: 1
                },
                {
                    img: require('../assets/clinicplus/green-circle.png'),
                    id: 2
                },
                {
                    img: require('../assets/clinicplus/Ellipse 5.png'),
                    id: 3
                },
                {
                    img: require('../assets/clinicplus/Ellipse 6.png'),
                    id: 4
                }

            ],
            vectorImg: [{
                    vectorImages: require('../assets/clinicplus/plusvector.png'),
                    text: 'Select the type of care you need assistance with easily from our care categories.',
                    header: 'Select your type of care',
                    id: 1
                },
                {
                    vectorImages: require('../assets/clinicplus/Vector.png'),
                    text: 'Select the type of care you need assistance with easily from our care categories.',

                    header: 'Find available Practisioner',
                    id: 2
                },
                {
                    vectorImages: require('../assets/clinicplus/Vector-1.png'),
                    text: ' Fix a date and time for your check-up and you are all set.',
                    header: 'Schedule a meeting',
                    id: 3
                }

            ],
            doctorImg: [{
                    doctorImages: require('../assets/clinicplus/Ellipse.png'),
                    docName: 'Dr. Mark Pude',
                    specialty: 'Optical Surgeon',
                    id: 1

                },
                {
                    doctorImages: require('../assets/clinicplus/Ellipse-1.png'),
                    docName: 'Dr. Mark Pude',
                    specialty: 'Optical Surgeon',
                    id: 2
                },
                {
                    doctorImages: require('../assets/clinicplus/Ellipse-2.png'),
                    docName: 'Dr. Mark Pude',
                    specialty: 'Optical Surgeon',
                    id: 3
                },
                {
                    doctorImages: require('../assets/clinicplus/doctor.png'),
                    docName: 'Dr. Mark Pude',
                    specialty: 'Optical Surgeon',
                    id: 4
                }

            ],
            img: [{
                    img: require('../assets/clinicplus/unsplash_38Un6Oi5beE.png'),
                    id: 1
                },
                {
                    img: require('../assets/clinicplus/unsplash_bD1bK7IUvd8.png'),
                    id: 2
                },
                {
                    img: require('../assets/clinicplus/unsplash_Be5aVKFv9ho.png'),
                    id: 3
                },
                {
                    img: require('../assets/clinicplus/unsplash_GnLuuG9crEY.png'),
                    id: 4
                }

            ],

        }
    },
   

}
</script>

<style scoped>

.page::-webkit-scrollbar {
    width: none;
}


.page {
    padding: 0 0 0 7.56rem;
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
        padding: 0 1rem;

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
        width: 100%;
        height: 20vh;
        background: #04514C;
        color: #ffff;
    }

    .navlinks-mobile ul {
        height: 50%;
        display: flex;
        flex-direction: column;
        width: 100%;
        text-align: left;
        justify-content: space-around;
        padding: 0 1.25rem;

    }

    .navlinks-mobile .register-box {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: left;
        text-align: left;
        padding: 0 1.25rem;
        gap: 10px;

    }

    button {
        background-color: #f5f5f5;
        width: 40%;
        color: #04514C;
        font-size: 1.15rem;
        text-align: center;
        align-self: right;

    }

}
</style>
