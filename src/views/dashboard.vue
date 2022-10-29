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
                    </div>
                    <hr>
                    <div class="date-box">
                        <p>{{Month}}</p>

                        <p>{{day-1}}</p>
                    </div>
                    <hr>
                    <div class="date-box">
                       Today
                    </div>
                    <hr>
                    <div class="date-box">
                        <p>{{Month}}</p>

                        <p>{{day+1}}</p>
                    </div>
                    <hr>
                      <div class="date-box">
                        <p>{{Month}}</p>

                        <p>{{day+2}}</p>
                    </div>
                    
                    
                </div>
                <div class="vitals">
                    <div class="vital-signs">
                        heart rate
                        70bpm
                    </div>
                    <div class="vital-signs">
                        heart rate
                        70bpm
                    </div>
                    <div class="vital-signs">
                        heart rate
                        70bpm
                    </div>
                    <div class="vital-signs">
                        heart rate
                        70bpm
                    </div>

                </div>
                 

                <div class="appointments">
                    <img src="../assets/clinicplus/nurse.png" alt="">
                       

                </div>
                <div class="medical-report">

                </div>
                <div class="appointment-history">

                </div>
            </div>

        </section>
    </div>
</div>
</template>

<script>
import {ref  } from "vue";
export default {
    setup(){
        let months = ['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        const m = new Date()
        let Month = ref(0)
        let day = ref(0)
           Month= months[m.getMonth()]
           day=m.getDate()
       
        return{
            Month, day
        }

    },
    data(){
        return{
            // Month:'',
            // day: null
        }
    },
    Mounted(){
        
        
    }
}
</script>

<style scoped>
.screen-size-error{
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
.dates hr{
    background: #04514C;
    color: #04514c ;
    height: 98%;
    padding: 1% 0;

}

.dates {
    grid-column: 0;
    grid-row: 0;
    background: #fff;
    height: 90%;
    width: 100%;
    border-radius: 25px;
    box-shadow: 0px 4px 4px 0px #00000040;
    display: flex;
    align-items: center;

}
.date-box{
     width: 20%;
    
}

.vitals {
    grid-column: 1;
    grid-row: 2;
    display: flex;
    gap: 7.5%;
    height: 100%;
    width: 100%;

}

.vitals img {
    width: 30px;
}

.vitals .vital-signs {
    height: 100%;
    width: 20%;
    background: #fff;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 20px;

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
.appointments img {
    position: absolute;
     width: 55%;
     top: -12%;
     right: 5%;
   /* transform: translate(0,50%); */
    z-index: 5;
}

.medical-report {
    grid-column: 1;
    grid-row: 3;
    background: #fff;
    border-radius: 25px;
    height: 90%;
    width: 100%;
    box-shadow: 0px 4px 4px 0px #00000040;
}

.appointment-history {
    grid-column: 2;
    grid-row: 3;
    background: #fff;
    border-radius: 25px;
    height: 90%;
    width: 100%;
    box-shadow: 0px 4px 4px 0px #00000040;
}
@media screen and (max-width:600px) {
    .screen-size-error{
        display: block;
        font-size: 2.5rem;
        color: #041542;
        height: 50vh;
        margin: 25vh 0;
        padding: 15vh 0;
       
    }
    .container{
        display: none;
    }
}
</style>
