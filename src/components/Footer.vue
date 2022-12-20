<template>
<footer>
    <div class="footer-box">
        <img src="../assets/clinicplus/clinicPlusBottom.png" alt="">
        <div class="box box-1">
            <div class="text">
                Clinic Plus is the most trusted
                 and efficient way of getting proper
                and fast healthcare anywhere you are in Africa.
            </div>

        </div>
        <header class="Products">Products</header>
            <div class="box box-2">
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Services
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </div>
            <header class="Services">Services</header>
            <div class="box box-3">
                <ul>
                    <li>
                        Appointment
                    </li>
                    <li>
                        NewsLetter
                    </li>
                    <li>
                        Healthcare
                    </li>
                    
                </ul>
            </div>
    </div>

</footer>
</template>

<script>
export default {
    data() {

    }
}
</script>

<style scoped>
footer {
    margin-top: 3rem;
    height: 324px;
    width: 100%;
    background: #fff;
    border-top: 1px solid #ddd;
    background: #04514C;
    bottom: 0;
    cursor: pointer;
    z-index: 3;
    font-size: 16px;

}
.footer-box{
    display: grid;
    grid-template-columns: 2fr 1fr 1fr ;
    grid-template-rows: 1fr 3fr ;
    text-align: left;
    
}
.footer-box > *{
    height: 80%;
    /* border: solid; */
}
img{
    grid-column: 1;
    grid-row: 1;
}
.Products{
    grid-column: 2;
    grid-row: 1;
    width: 100%;

    text-align: center;
}

.Services{
    grid-column: 3;
    grid-row: 1;
    width: 100%;
    text-align: center;
}
.box{
    display: flex;
    width: 100%;
    align-content: center;
    font-size: 1rem;
}
li{
    font-size: 1rem;
    
}
.box-1{
    grid-column: 1;
    grid-row: 2;
    width: 60%;

}
.box-2{
    grid-column: 2;
    grid-row: 2;
}
.box-3{
    grid-column: 3;
    grid-row: 2;
}

@media screen and (max-width:486px) {
    .text ,ul li{
    font-size:0.8rem}
}
.footer-box {
    height: 100%;

    padding: 1rem 1.25rem;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr ;
    color: #fff;
}
.box-2 ul , .box-3 ul{
    height: auto;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    
    

}
li{
    font-size: 10px;
}
.box-2, .box-3{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    text-align: left;
 }
.text{
line-height: 20px;
width: 100%;
}
header{
  color:#121212 ;
  font-weight: 500;
  justify-self: end;
  font-size: 1rem;
  margin-top: 2.5rem;
}
.box-2 ul>*, .box-3 ul>*{
  margin-bottom: 0;
}


</style>
