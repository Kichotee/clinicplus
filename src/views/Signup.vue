<template>
<div class="signUpPage">
    <div class="logo">
        <img src="../assets/clinicplus/logo.png" alt="">
    </div>
    <div class="form-header">
        <p>
            Sign Up
        </p>
        <p>
            Fill this form to register
        </p>
    </div>
    <div class="left-column">

        <img src="../assets/clinicplus/unsplash_38Un6Oi5beE.png" alt="">
        <div class="description">
            <p>Clinic Plus is the most trusted and efficient way of getting proper and fast healthcare any where you are in Africa.</p>
        </div>
    </div>
    <div class="right-column">

        <div class="right-column-box">
            <form class="signUpForm" action="">
                <div class="input-1">
                    <label for="">First Name</label>
                    <br>
                    <input type="text" name="" id="">
                </div>
                <div class="input-2">
                    <label for="">Last Name</label>
                    <br>
                    <input type="text" name="" id="">
                </div>
                <div class="input-3">
                    <label for="">Email</label>
                    <br>
                    <input type="Email" name="" id="">
                </div>
                <div class="input-4">
                    <label for="">password</label>
                    <br>
                    <input type="password" name="" id="">
                </div>
                <router-link to="/dashboard">
                     <button type="submit"> Sign-up</button>
                </router-link>
               
                <small>Already have an account?</small>
            </form>
            
        </div>
        <!-- <span>
                <div class="ds-circle">

                </div>
                <div class="ds2-circle">

                </div>

            </span> -->
    </div>

</div>
<router-view></router-view>
</template>

<script>
export default {

}
</script>

<style scoped>
.signUpPage {
    padding: 24px 40px 0 74px;
    display: grid;
    grid-template-columns: 0.8fr 1fr;
    grid-template-rows: 0.4fr 1fr;
    text-align: left;
    height: 100vh;
    overflow: hidden;
}

.left-column {
    grid-row: 2;
    grid-column: 1/2;
}

.logo img {
    width: 25%;
    grid-row: 1;
}

.left-column img {
    width: 90%;

    border-radius: 25px;

}

.left-column .description {
    width: 70%;
    font-size: 15px;

}

.right-column {
    grid-row: 2;
    overflow: hidden;

}

.form-header {
    grid-row: 1;
    grid-column: 2;
    align-self: end;
    width: 61%;
    overflow: hidden;


}

.form-header p {
    text-align: center;
}

.form-header p:nth-of-type(2) {
    font-size: 0.8rem;
}

.right-column {
    width: 90%;
    height: 100%;
    justify-items: left;
    z-index: 79;

}

.right-column-box {
    width: 80%;
    padding: 2.5% 5%;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    height: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    z-index: 79;
    /* border: solid; */
    border-radius: 5px;
    overflow: hidden;
}

form {
    margin-top: 5%;
    width: 90%;
    height: 100%;
    display: flex;
    /* border: solid; */
    flex-direction: column;
    align-items: start;
    gap: 5%;
    z-index: 76;
}

form>div {
    width: 100%;

}

label {
    /* margin: 70px 0; */
    font-weight: bolder;

}

input {
    width: 95%;
    height: 70%;
    border-radius: 5px;
    outline: none;
    background: #fff;
    border: 1px solid #989393;

}

input:focus {
    outline: none;
    border: 1px solid #04514C;
}
a{
     width: 100%;
}
button {

    width: 95%;
    border-radius: 7.5px;
}

</style>
