<template>
    <div>
      
  <section class="core_team_section">
    <div class="container cam-font">
      <div class="text-center first-head header-color mt-3"><b>OUR CORE TEAM</b></div>
      <div class="text-center teacher-second-head">
        Professional Lectures And Industry Experts
      </div>
      <swiper-container class="mySwiper" autoplay-delay="2500" init="false" loop="true">
        <swiper-slide>
          <div class="teacher-card">
            <img class="teacher-img" src="image/teacher.jpg" alt="" />
            <div class="teacher-name header-color">THWIN HTOO NAUNG</div>
            <div class="teacher-job">PROJECT MANAGER</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="teacher-card">
            <img class="teacher-img" src="image/teacher.jpg" alt="" />
            <div class="teacher-name header-color">THWIN HTOO NAUNG</div>
            <div class="teacher-job">PROJECT MANAGER</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="teacher-card">
            <img class="teacher-img" src="image/teacher.jpg" alt="" />
            <div class="teacher-name header-color">THWIN HTOO NAUNG</div>
            <div class="teacher-job">PROJECT MANAGER</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="teacher-card">
            <img class="teacher-img" src="image/teacher.jpg" alt="" />
            <div class="teacher-name header-color">THWIN HTOO NAUNG</div>
            <div class="teacher-job">PROJECT MANAGER</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="teacher-card">
            <img class="teacher-img" src="image/teacher.jpg" alt="" />
            <div class="teacher-name header-color">THWIN HTOO NAUNG</div>
            <div class="teacher-job">PROJECT MANAGER</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="teacher-card">
            <img class="teacher-img" src="image/teacher.jpg" alt="" />
            <div class="teacher-name header-color">THWIN HTOO NAUNG</div>
            <div class="teacher-job">PROJECT MANAGER</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="teacher-card">
            <img class="teacher-img" src="image/teacher.jpg" alt="" />
            <div class="teacher-name header-color">THWIN HTOO NAUNG</div>
            <div class="teacher-job">PROJECT MANAGER</div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
    
  </section>

    </div>
</template>

<script >
// import { CoreTeam } from '@/assets/js/teacher';
    export default {
        name:"CoreTeam",
        created(){
          // CoreTeam()
        }
    }
</script>

<style scoped>
    .title {
        letter-spacing: 2px;
    }

    .text-center .fa-solid {
        color: #4781C7;
        font-size: 58px;
        margin-bottom: 20px;
    }

    .vm-btn {
        width: 250px;
        background-color: #20A7DF;

    }

    .btn.vm-btn:hover,
    .btn.vm-btn:active {
        background-color: #4781C7;
    }

    .video {
        height: 260px;
        max-width: 100%;
    }

    @media screen and (max-width: 1200px) {
        .video {
            height: 220px;
        }

        .video-container:first-child {
            padding-right: 15px;
        }

        .video-container:last-child {
            padding-left: 15px;
        }
    }

    @media (min-width: 1201px) {
        .video-container:first-child {
            padding-right: 15px;
        }

        .video-container:last-child {
            padding-left: 15px;
        }
    }


    @media screen and (max-width: 990px) {
        .video {
            height: 170px;
        }

        .video-container:first-child {
            padding-right: 15px;
        }

        .video-container:last-child {
            padding-left: 15px;
        }
    }

    @media screen and (max-width: 768px) {
        .video {
            height: 220px;
            padding-bottom: 20px;
        }

        .video-container:first-child {
            padding-right: 0px;
        }

        .video-container:last-child {
            padding-left: 0px;
        }
    }

    @media screen and (max-width: 576px) {
        .video {
            height: 240px;
        }

        .video-container:first-child {
            padding-right: 0px;
        }

        .video-container:last-child {
            padding-left: 0px;
        }
    }
</style>
style
