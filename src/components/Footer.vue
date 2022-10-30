<template>
<footer>
    <div class="footer-box">
        <div class="box-1">
            <img src="../assets/clinicplus/clinicPlusBottom.png" alt="">
            <div class="text">
                Clinic Plus is the most trusted
                 and efficient way of getting proper
                and fast healthcare anywhere you are in Africa.
            </div>

        </div>
            <div class="box-2">
                <header>Products</header>
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
            <div class="box-3">
                <header>Services</header>
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
.footer-box {
    height: 100%;

    padding: 1rem 137px;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr ;
   
    color: #fff;
}

.footer-box img {
    width: 100px;

}

.box-1 {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: left;
}
 .box-2, .box-3{
    display: flex;
    flex-direction: column;
    gap: 3rem;
    text-align: left;
 }

.box-2 ul , .box-3 ul{
    height: 160px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    

}
.text{
line-height: 25px;
width: 70%;
word-spacing: 5px;
/* justify-self: center; */
}
header{
  color:#121212 ;
  font-weight: 600;
  justify-self: end;
  font-size: 20px;
  margin-top: 3rem;
}
.box-2 ul>*, .box-3 ul>*{
  margin-bottom: 5px;
}
@media screen and (max-width:486px) {
    .text ,ul li{
    font-size:1rem}
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
