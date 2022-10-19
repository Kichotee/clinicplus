<template>
<div class="home">

    <nav>

        <img :src="logo" alt="">
        <ul>
            <li v-for="item in navElements">
                <p>{{item.element}}</p>
            </li>
        </ul>
        <div class="register-box">
            <p>
                Login
            </p>
            <button>Register</button>

        </div>

    </nav>
    <div class="page">
        <div class="page-content">
            <topPage>

            </topPage>

        </div>
        <pageTwo :props='img'></pageTwo>
        <pageThree :props="vectorImg" :docProps='doctorImg'></pageThree>
         <pageFour ></pageFour>
    </div>

</div>
</template>

<script>
// @ is an alias to /src
import topPage from '@/components/topPage.vue'
import PageTwo from '../components/pageTwo.vue'
import pageThree from '../components/pageThree.vue'
import pageFour from '../components/pageFour.vue'

export default {
    name: 'HomeView',
    components: {
        topPage,
        PageTwo,
        pageThree,
        pageFour,
    },
    data() {
        return {
            navElements: [{
                    element: 'About'
                },
                {
                    element: 'Services'
                },
                {
                    element: 'Contact'
                }

            ],
            logo: require('../assets/clinicplus/logo.png'),
            img: [{
                    slideshowImages: require('../assets/clinicplus/unsplash_38Un6Oi5beE.png'),
                    id:1
                },
                {
                    slideshowImages: require('../assets/clinicplus/unsplash_bD1bK7IUvd8.png'),
                    id:2
                },
                {
                    slideshowImages: require('../assets/clinicplus/unsplash_Be5aVKFv9ho.png'),
                    id: 3
                },
                {
                    slideshowImages: require('../assets/clinicplus/unsplash_GnLuuG9crEY.png'),
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
                    docName:'Dr. Mark Pude',
                    specialty:'Optical Surgeon',
                    id:1

                },
                {
                    doctorImages: require('../assets/clinicplus/Ellipse-1.png'),
                    docName:'Dr. Mark Pude',
                    specialty:'Optical Surgeon',
                    id:2
                },
                {
                    doctorImages: require('../assets/clinicplus/Ellipse-2.png'),
                    docName:'Dr. Mark Pude',
                    specialty:'Optical Surgeon',
                    id: 3
                },
                {
                    doctorImages: require('../assets/clinicplus/doctor.png'),
                    docName:'Dr. Mark Pude',
                    specialty:'Optical Surgeon',
                    id: 4
                }

            ],

        }
    }

}
</script>

<style scoped>
.home nav {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    justify-items: center;
    align-items: center;
    height: 76px;
    padding: 0 0 0 137px;
    background: #f5f5f5;
    border-bottom: 1px solid #2F845B;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 3;
}

.home nav img {
    width: 94px;
    height: 37.5px;
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
}

.home nav ul li p:hover {
    animation: hover-pulse 2s infinite;
}

.home nav ul li p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22.5px;
    cursor: pointer;
}

.home nav .register-box {
    width: 167px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-self: center;

}

button {
    height: 34px;
    width: 94px;
    background-color: #04514C;
    color: #FFFFFF;
    border: 0;
    outline: 0;
    border-radius: 3px;

}

.page {
    padding: 0 0 0 137px;
}

@keyframes hover-pulse {
    50% {
        font-size: 18px;
        color: #04514C;
    }
}

@keyframes image-pulse {
    50% {
        width: 100px;
    }
}
</style>
