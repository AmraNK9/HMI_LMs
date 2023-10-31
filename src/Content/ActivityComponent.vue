<template>
 <div>
  
  <section class="activity_section">
    <div class="container-fluid activities">
      <div>
        <p class="text-center activities-text display-1 cam-font">Our Activities</p>
      </div>
      <div class="row g-0">
        <div class="col-12 p-0">
          <div class="row g-0 ativity-image-wrapper" id="activityWrapper">
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/Design1.jpg')" alt="" :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/design2.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/design7.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/design9.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/Design1.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/design8.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
          </div>
          <div class="row g-0 ativity-image-wrapper" id="activityWrapper">
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/Design1.jpg')" alt="" :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/design2.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/design7.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/design9.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/Design1.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/design8.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
          </div>
          <div class="row g-0 ativity-image-wrapper" id="activityWrapper">
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/Design1.jpg')" alt="" :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/design2.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/design7.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/design9.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/Design1.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/design8.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
          </div>
          <div class="row g-0 ativity-image-wrapper" id="activityWrapper">
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/Design1.jpg')" alt="" :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/design2.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/design7.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/design9.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/Design1.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/design8.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 </div>
</template>

<script>
// import Design1 from '../assets/image/Design1.jpg';
    export default {
        name:'ActivityComponent',
        data()
        {
            return{

            }
        }
        
    }
</script>

<style scoped>
/* activity_section */
.activities {
      position: relative;
      background-color: transparent;
    }

    .activities-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: rgb(232, 229, 229);
      padding-bottom: 10px;
      border-bottom: 8px solid #457cc0;
      z-index: 9999;
      
    }

    .activities-seemore {
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: rgb(232, 229, 229);
      font-size: 40px;

      z-index: 9999;
      cursor: pointer;
    }

    .activities-seemore:hover {
      color: #73c2e3;
    }

    .ativity-image-wrapper .col {
      position: relative;
    }

    .ativity-image-wrapper .col img {
      width: 100%;
    
       object-fit: cover;
    }

    .ativity-image-wrapper .col .over-lay {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #333;
      opacity: 0.5;
      transition: 0.2s ease-in-out;
    }

    .ativity-image-wrapper .col .over-lay:hover {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0.1;
      background-color: white;
    }

    @media screen and (max-width: 576px) {
      .activities-text{
        font-size: 25px !important;
      }
      .ativity-image-wrapper .col:nth-child(5) {
        display: none;
      }
      
      .ativity-image-wrapper:nth-child(2) {
        display: none;
      }
    }

    /* medium size */
    @media screen and (max-width: 770px) {
      .activities-text{
        font-size: 40px;
      }
      #student_diversity .col-md-4 {
        margin-top: 20px;
      }

      .ativity-image-wrapper:nth-child(2) {
        display: none;
      }


      .ativity-image-wrapper .col:nth-child(6) {
        display: none;
      }
/* 
      .dotted_container img {
        height: 380px;
      } */
    }

    @media screen and (max-width: 990px) {
      /* .navbar .container-fluid {
        background-color: #ffffff;
      } */

      .ativity-image-wrapper .col:nth-child(6) {
        display: none;
      }

    }
</style>