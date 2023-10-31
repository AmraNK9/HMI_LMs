<template>
    <div>
        <section class="navbar_section">
            <div class="row g-0">
                <div class="noti-container " id="noti-container-id">
                    <div class="noti">
                        <i class="fa-solid fa-bell" style="color: #dc4044"></i>
                        <span class="text-white">
                            Registration for October Intake(Batch 3) is opening now!
                        </span>
                    </div>
                </div>
                <div class="ph-container text-white">
                    <div class="phone-1">09 785 806 735 ,</div>
                    <div class="phone-2">09 785 806 735 </div>
                </div>
            </div>

            <nav class="navbar navbar-expand-lg bg-white shadow-sm">

                <div class="container">
                    <a class="navbar-brand " href="#">
                        <img :src="logo" alt="" class="navimg">
                    </a>
                    <button class="navbar-toggler shadow-none" style="color: #4781C7; font-size: 35px;" type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa-solid fa-bars"></i>
                    </button>

                    <div class="collapse navbar-collapse bg-white" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-lg-auto align-items-lg-center mb-2 mb-lg-0 ">
                            <li class="nav-item">
                                <a class="nav-link  me-xl-2" href="#"> <span class="hoverborder pb-2 "><b>Academic
                                            Program</b></span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link me-xl-2" href="#"><span
                                        class="hoverborder pb-2"><b>About</b></span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link me-xl-2" href="#"><span class="hoverborder pb-2"><b>Program
                                            Fee</b></span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link me-xl-2" href="#"><span class="hoverborder pb-2"><b>Student
                                            Experience</b></span></a>
                            </li>
                            <li class="nav-item">
                                <button
                                    class="nav-link btn text-white rounded-3 px-4 d-flex align-items-center my-sm-2 apply_btn shadow">
                                    <b>Apply Now</b>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </section>
    </div>
</template>

<script>
    import {
        navbar
    } from '@/assets/js/nav.js';
    export default {
        data() {
            return {
                logo: require('@/assets/logo.png')
            };
        },
        mounted() {
            navbar();
        }
    }
</script>

<style scoped>
    .nav-link {
        font-family: Cambria;
        color: #457cc0;
    }

    .fixed-top {
        z-index: 99999;
    }

    .apply_btn {
        background-color: #21A7E0;
    }


    .topbtn {
        display: none;
        position: fixed;
        bottom: 20px;
        right: 30px;
        z-index: 99;
        font-size: 18px;
        border: none;
        outline: none;
        color: white;
        cursor: pointer;
    }

    @media screen and (max-width: 576px) {
        .navbar-brand img {
            height: 65px !important;
        }
    }

    @media screen and (max-width: 990px) {
        .navbar .container-fluid {
            background-color: #ffffff;
        }
    }

    @media screen and (max-width: 768px) {
        .nav-link {
            font-size: 18px;
        }
    }

    @media screen and (max-width: 1800px) {
        .nav-link {
            font-size: 20px;
        }
    }

    @media screen and (max-width: 1400px) {
        .nav-link {
            font-size: 18px;
        }
    }

    @media screen and (max-width: 1200px) {
        .nav-link {
            font-size: 14px;
        }

        .navbar-brand img {
            height: 65px;
        }
    }

    .navbar {
        transition: all 0.2s ease;
        z-index: 999999;
    }

    .navbar-brand img {
        height: 80px;
    }

    .hoverborder {
        position: relative;
    }

    .hoverborder::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        display: block;
        background: #4C81C5;
        transition: width 0.3s;
        bottom: 0;
        left: 0;
    }

    .hoverborder:hover::after {
        width: 100%;
    }


    .apply_btn {
        background-image: linear-gradient(to right, #4C81C5 50%, transparent 50%);
        background-size: 200% 100%;
        transition: background-position 0.4s;
    }

    .apply_btn:hover {
        background-position: -100% 0;
    }

    .fixed-top {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1000;
    }

    .fixed-top .navbar {
        transition: top 0.3s;
    }

    .fixed-top.show .navbar {
        top: 0;
    }

    .fixed-top .navbar-brand img {
        height: 60px;
        transition: all ease-out 0.2s;
    }

    /* for noti  */

    @keyframes moveNoti {
        0% {
            left: 100%;
        }

        100% {
            left: -100%;
        }
    }

    .noti {
        white-space: nowrap;
        position: relative;
        animation: moveNoti 10s linear infinite;
    }

    .noti-container {
        padding: 0;
        margin: 0;
        width: 65%;
        height: 50px;
        display: flex;
        align-items: center;
        overflow: hidden;
        position: relative;
        background-color: #0D0B30;
    }

    .ph-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 0;
        margin: 0;
        width: 35%;
        height: 50px;
        background-color: #0D0B30;
    }

    .phone-1,
    .phone-2 {
        margin-left: 5px;
    }
</style>
