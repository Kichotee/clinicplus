<template>
<div class="dashboard-page">
    <p class="screen-size-error">
        View on Desktop only
    </p>
    <div class="container">
        <aside>
            <img class="logo" src="../assets/clinicplus/logo.png" alt="">
            <div class="menu">
                <div class="menuitem">
                    <i><img src="../assets/clinicplus/dashVector.png" alt=""></i>
                    <p>Dashboard</p>
                </div>
                <div class="menuitem">
                    <i><img src="../assets/clinicplus/dashVector-1.png" alt=""></i>
                    <p>Messages</p>
                </div>

                <div class="menuitem">
                    <i><img src="../assets/clinicplus/dashVector-2.png" alt=""></i>
                    <p>Appointment</p>
                </div>
                <div class="menuitem">
                    <i><img src="../assets/clinicplus/dashVector-3.png" alt=""></i>
                    <p>Pharmacy</p>
                </div>
            </div>
            <hr>
            <span></span>
            <div class="bottom-menu">
                <div class="menuitem">
                    <i><img src="../assets/clinicplus/dashVector-4.png" alt=""></i>
                    <p>Settings</p>
                </div>
                <div class="menuitem">
                    <i><img src="../assets/clinicplus/dashVector-5.png" alt=""></i>
                    <p>Exit</p>
                </div>
            </div>
        </aside>
        <section>

            <header class="dashboard-header">
                <div>
                    <p>Dashboard</p>
                    <small>Welcome, Mrs Quinn</small>
                </div>
                <div class='header-icons'>
                    <img class="icon-img" src="../assets/clinicplus/Ellipse-1.png" alt="">
                    <img src="../assets/clinicplus/Ellipse-2.png" alt="">

                </div>

            </header>

            <div class="dashboard-body">
                <div class="dates">
                    <div class="date-box">
                        <p>{{Month}}</p>

                        <p>{{day-2}}</p>

                        <small>0 appointments</small>
                    </div>
                    <hr>
                    <div class="date-box">
                        <p>{{Month}}</p>

                        <p>{{day-1}}</p>

                        <small>0 appointments</small>
                    </div>
                    <hr>
                    <div class="date-box">
                        <p>Today</p>
                        <small>2 appointments</small>
                    </div>
                    <hr>
                    <div class="date-box">
                        <p>{{Month}}</p>

                        <p>{{day+1}}</p>

                        <small>0 appointments</small>
                    </div>
                    <hr>
                    <div class="date-box">
                        <p>{{Month}}</p>

                        <p>{{day+2}}</p>

                        <small>0 appointments</small>
                    </div>

                </div>
                <div class="vitals">
                    <div class="vital-signs">

                        <p>heart rate</p>
                        <img-box>
                            <span></span>
                            <img src="../assets/clinicplus/heart.png" alt="">
                        </img-box>

                        <small>70bpm</small>
                    </div>
                    <div class="vital-signs">
                        <p>Blood Pressure</p>
                        <img-box>
                            <span></span>
                            <img src="../assets/clinicplus/Blood.png" alt="">
                        </img-box>

                        <small>123/92mmHg</small>
                    </div>
                    <div class="vital-signs">
                        <p>Sugar level</p>
                        <img-box>
                            <span></span>
                            <img src="../assets/clinicplus/cells.png" alt="">
                        </img-box>

                        <small>7.8 mmol/L</small>
                    </div>
                    <div class="vital-signs">
                        <p>SpO<sub>2</sub></p>
                        <img-box>
                            <span></span>
                            <img src="../assets/clinicplus/lungs.png" alt="">
                        </img-box>

                        <small>98%</small>
                    </div>

                </div>

                <div class="appointments">
                    <div class="appointment-items">
                        <div class="reminder-item">
                            Reminder
                            <i> bell</i>
                        </div>
                        <p>
                            Hey! you have two appointments today
                        </p>
                        <button>
                            view appointments
                        </button>
                    </div>
                    <img src="../assets/clinicplus/nurse.png" alt="">

                </div>
                <div class="medical-report">
                    <div class="report">

                        <ul>
                            <p>Medical-reports</p>
                            <li>
                                <p class="parameter">Pcv</p>
                                -
                                <p class="value">41%</p>
                            </li>
                            <li>
                                <p class="parameter">HGV</p>
                                -
                                <p class="value">Negative</p>
                            </li>
                            <li>
                                <p class="parameter">Blood Group</p>
                                -
                                <p class="value">AB positive</p>
                            </li>
                            <li>
                                <p class="parameter">Genotype</p>
                                -
                                <p class="value">AA</p>
                            </li>
                            <li>
                                <p class="parameter">E.C.G</p>
                                -
                                <p class="value">Normal</p>
                            </li>
                            <li>
                                <p class="parameter">Asthma</p>
                                -
                                <p class="value">Asthmatic</p>
                            </li>
                            <li>
                                <p class="parameter">Asthma</p>
                                -
                                <p class="value">Asthmatic</p>
                            </li>
                            <li>
                                <p class="parameter">Covid-19 Vaccine</p>
                                -
                                <p class="value">Vaccinated</p>
                            </li>
                            <li>
                                <p class="parameter">Urine</p>
                                -
                                <p class="value">Normal</p>
                            </li>
                            <li>
                                <p class="parameter">Asthma</p>
                                -
                                <p class="value">Asthmatic</p>
                            </li>
                            <li>
                                <p class="parameter">Sputum</p>
                                -
                                <p class="value">Normal</p>
                            </li>
                        </ul>
                    </div>

                </div>
                <div class="appointment-history">
                    <header>
                        Appointment History
                    </header>
                    <p>
                        Doctor joel

                        <small>optical surgeon</small>
                    </p>
                    <h5>
                        December 21st,2022
                    </h5>
                    <p>
                        Doctor joel

                        <small>optical surgeon</small>
                    </p>
                    <h5>
                        December 21st,2022
                    </h5>
                    <p>
                        Doctor joel

                        <small>optical surgeon</small>
                    </p>
                    <h5>
                        December 21st,2022
                    </h5>
                    <a href="">View all</a>
                </div>
            </div>

        </section>
    </div>
</div>
</template>

<script>
import {
    ref
} from "vue";
export default {
    setup() {
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const m = new Date()
        let Month = ref(0)
        let day = ref(0)
        Month = months[m.getMonth()]
        day = m.getDate()

        // dayColor = ()=>{
        //     if (document.getElementsByTagName('p').content = 'Today'){
        //         document.querySelector('.dates .date-box').style.color='green'
        //     }
        // }

        return {
            Month,
            day,

        }

    },
    data() {
        return {
            // Month:'',
            // day: null
        }
    },
    Mounted() {

    }
}
</script>

<style scoped>
.screen-size-error {
    display: none;
}

.container {
    display: flex;
    height: 100vh;
    overflow: hidden;

}

aside {
    width: 25%;
    align-self: start;
    /* border: solid; */
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    position: relative;
    padding-top: 2.5%;
}

.menu,
.bottom-menu {
    width: 100%;
    height: 40%;
    margin-top: 35%;

}

.menu {}

aside .logo {
    width: 120px;

}

aside hr {
    background: green;
    height: 100%;
    transform: rotate(90deg);
}

span {
    color: green;
    width: 1px;
    background: green;
    transform: rotate(90deg);
    padding: 0;
    margin: 0;

}

.menuitem {
    width: 100%;
    height: 20%;
    margin-bottom: 5%;
    display: flex;
    justify-content: space-between;
    padding: 0 20% 0 20%;
    align-items: end;
    text-align: left;
}

.menuitem p {
    width: 75%;
    /* border:1px red solid; */

}

.menuitem i img {

    width: 70%;
}

section {
    flex-grow: 1.5;
    background-color: #F5F5F5;
    padding: 0 0 0 2.5%;
    height: 100vh;
    overflow: scroll;
    z-index: 1;
}

.dashboard-header {
    text-align: left;
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
}

.dashboard-header p {
    font-weight: bold;
    color: #04514C;
    font-size: 20px;
    margin-bottom: 5px;
}

.dashboard-header img {
    width: 45px;
    margin-left: 22px;
}

.dashboard-body {
    width: 100%;
    height: 100%;
    overflow: auto;
    overflow: scroll;
    gap: 20px;
    padding: 5% 5% 0 0;
    display: grid;
    grid-template-columns: 1.75fr 1fr;
    grid-template-rows: 0.75fr 0.75fr 2.5fr;
}

.dates hr {
    background: #04514C;
    color: #04514c;
    height: 98%;
    padding: 1% 0;

}

.dates {
    grid-column: 0;
    grid-row: 0;
    background: #fff;
    height: 100%;
    width: 100%;
    border-radius: 25px;
    box-shadow: 0px 4px 4px 0px #00000040;
    display: flex;
    align-items: center;

}

.date-box {
    width: 20%;
    ;

}

.date-box p {
    display: inline;
    margin: 0 2px;
}

.date-box small {
    display: block;
    font-size: 0.65rem;
    align-self: end;
    margin-top: 10px;
}

.vitals {
    grid-column: 1;
    grid-row: 2;
    display: flex;
    gap: 7.5%;
    height: 100%;
    width: 100%;

}

.vital-signs {
    height: 100%;
    width: 25%;
    background: #fff;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 20px;
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

}

.vital-signs p {
    font-size: 0.65rem;
}

.vital-signs sub {
    font-size: 00.5rem;
    display: inline;
}

.vital-signs span {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: #FF6DC64D;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.vital-signs:nth-of-type(2) span {
    background-color: #FE0C0C4D;
}

.vital-signs:nth-of-type(3) span {
    background-color: #2602FF4D;
}

.vital-signs:nth-of-type(4) span {
    background: #FFCEB3;

}

.vital-signs small {
    font-size: 10px;
    font-weight: bold;
}

.vital-signs img {
    width: 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.vital-signs:nth-of-type(2) img {
    width: 20px;
}

.appointments {
    grid-column: 2;
    grid-row: 1/3;
    background: #fff;
    height: 100%;
    width: 100%;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    position: relative;
}

.appointment-items {
    width: 52%;
    display: flex;
    height: 100%;
    flex-direction: column;
    text-align: left;
    gap: 5%;
    padding: 0 0 0 5%;

}

.appointment-items p {
    max-height: 70px;

    font-size: 0.7rem;
    margin: 10% 0 10% 0;
}

.reminder-item {
    margin-top: 10%;
    font-weight: 700;
    font-size: 0.8rem;

}

.appointment-items button {
    width: 100%;
}

.appointments img {
    position: absolute;
    width: 55%;
    top: -8%;
}

.report {
    height: 100%;
}

.report ul {
    height: 90%;
    margin: 1rem 0 0.5rem 0;
    display: flex;
    flex-direction: column;
    font-weight: 500;

}

.report ul li {
    height: 20%;
    display: grid;
    grid-template-columns: 0.75fr 0.25fr 0.5fr;
    justify-items: start;
    padding: 0 0 0 1rem;
    font-size: 0.6rem;

    /* border: solid; */

}

.report ul li .parameter {
    grid-column: 1;
}

.report ul>p {
    text-align: left;
    padding: 0 0 0 1rem;
}

.appointment-history {
    grid-column: 2;
    grid-row: 3;
    background: #fff;
    border-radius: 25px;
    height: 100%;
    width: 100%;
    display: grid;
    padding: 1rem 0 0 1rem;
    grid-template: repeat(4, 1fr)/repeat(2, 1fr);
    box-shadow: 0px 4px 4px 0px #00000040;
    font-size: 0.9rem;
    font-weight: 500;
}

.appointment-history header {
    grid-column: 1/span 2;
    text-align: left;

}

.appointment-history p {
    grid-column: 1;
    align-self: start;
    text-align: left;

}

.appointment-history p small {
    display: block;
    font-size: 0.65rem;
    font-weight: 300;
}

.appointment-history h5 {
    grid-column: 2;
    font-size: .65rem;
    font-weight: 300;
    align-self: center;
    text-align: left;
    width: 100%;
    height: 68%;

}

.appointment-history a {
    color: #041542;
    font-size: 0.65rem;
    grid-column: 2;
}

@media screen and (max-width:600px) {
    .screen-size-error {
        display: block;
        font-size: 2.5rem;
        color: #041542;
        height: 50vh;
        margin: 25vh 0;
        padding: 15vh 0;

    }

    .container {
        display: none;
    }
}
</style>
