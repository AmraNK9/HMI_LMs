<template>
    <div>
        <section class="years_program">
            <div class="ms-3">
                <div class="row g-0 justify-content-center">
                    <div class="first-second-year mt-5 btn-group col-lg-4 col-md-6 col-sm-8 col-10" role="group">
                        <button type="button" class="btn me-0 btn-lg d-block border-0 rounded-end rounded-pill shadow-none first-year border blue">First Year</button>
                        <button type="button" class="btn me-0 btn-lg d-block border-0 rounded-start rounded-pill shadow-none second-year border blue_dark">Second Year</button>
                    </div>
                </div>
                  <div class="row g-0 it">
                    <div class="text-center first-head header-color curriculum cam-font">
                      OUR CURRICULUM
                    </div>
                    <div class="col-2 list">
                      <div class="circle first-circle">1</div>
                      <div class="doted"></div>
                      <div class="circle">2</div>
                      <div class="doted"></div>
                      <div class="circle">3</div>
                    </div>
                    <div class="col-10 it-card-container cam-font">
                      <div class="it-card  revel-right">
                        <img :src="require('@/assets/image/teacher.jpg')" alt="" />
                        <div class="it-card-content">
                          <div class="it-card-header  first-head">IT Passport</div>
                          <div class="it-card-about">
                            Fundamental Strategy, Management, Technology.
                          </div>
                        </div>
                      </div>
                      <div class="it-card  revel-right">
                        <img :src="require('@/assets/image/teacher.jpg')" alt="" />
                        <div class="it-card-content">
                          <div class="it-card-header first-head">IT Passport</div>
                          <div class="it-card-about">
                            Fundamental Strategy, Management, Technology.
                          </div>
                        </div>
                      </div>
                      <div class="it-card revel-right mb-5">
                        <img :src="require('@/assets/image/teacher.jpg')" alt="" />
                        <div class="it-card-content">
                          <div class="it-card-header first-head">IT Passport</div>
                          <div class="it-card-about">
                            Fundamental Strategy, Management, Technology.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
          </section>
    </div>
</template>

<script >
import {YearProgram} from '@/assets/js/Curriculum'
export default {
  name: "YearProgram",
  mounted(){
    YearProgram()
  }

};
</script>

<style scoped>
   
/*  */
.blue {
    background-color: #20A7DF;
  }

  .blue_dark {
    background-color: #4C81C5;
  }
.title {
    letter-spacing: 2px;
  }
  .first-second-year .btn{
    color: #fff;
    line-height: 40px;
  }
  .first-second-year .btn:hover{
    color: #e6ec71;
  }
  .text-center .fa-solid {
    color: #4781C7;
    font-size: 58px;
    margin-bottom: 20px;
  }
.header-color{
    color: #09A2F0;
}
section {
    background-color: #d3dfef;
}

.first-head{
    font-size: 25px;
    font-weight: 500;
}

.teacher-second-head{
    font-size: 22px;
    font-weight: 400;
}

.teacher-card{
    border: 1px solid rgb(210, 207, 207);
    border-radius: 15px;
    width: 180px;
    height: 230px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.teacher-img{
    border-radius: 15px;
    width: 130px;
    height: 150px;
    border-radius: 15px;
    margin-top: 13px;
    object-fit: cover;
}

.teacher-name{
    margin-top: 8px;
    font-size: 14px;
    font-weight: 500;
}

.teacher-job{
    font-size: 14px;
    font-weight: 500;
    margin: 0px 8px;
}
.teacher-card-container{
    display: flex;
    justify-content: center;
}

.circle{
    margin-top: 3px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #024561;
    color: #DC413C;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 38px;
    box-shadow: 0 0 128px 0 #024561,
    0 32px 64px -48px #024561;
}


.doted{
    background-image: repeating-linear-gradient(to bottom, #6F717D, #6F717D 7px, transparent 3px, transparent 15px);
  
    height: 150px;
    width: 2px;
    margin-top: 3px;
}
.list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.curriculum{
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 33px;
    letter-spacing: 1px;
    font-weight: bold;
}

.it{
    background-color: #D3DFEF;
    padding-right: 150px;
    overflow-x: hidden;
}

.it-card{
    background-color: white;
    border: 1px solid rgb(210, 207, 207);
    box-shadow: 0 0 128px 0 #73c1e356,
    0 32px 64px -48px #73b4d050;
    border-radius: 15px;
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 30px;
    
}

.it-card img{
    border-radius: 15px;
    width: 130px;
    height: 150px;
    margin-left: 20px;
    border-radius: 15px;
    object-fit: cover;
}

.it-card-content{
    margin-left: 50px;
    flex-direction: column;
}

.it-card-header{
    color: #0E0F48;
    margin-bottom: 15px;
}

.it-card-about{
    margin-bottom: 50px;
    margin-left: 8px;
    color: #002060;
    display: flex;
    flex-wrap: wrap;
}

.first-second-year{
    display: flex;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 30px;
}

</style>
