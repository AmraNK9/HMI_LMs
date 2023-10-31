<template>
    <div>
        <section class="student_program bg-white">
            <div class="container">
                <div class="row g-0">
                    <div class="col-md-4 text-center py-5">
                        <i class="fa-solid fa-calendar-days "></i>
                        <h4 class="text-info title">2-YEAR PROGRAM</h4>
                        <p class="m-0">
                            <b>For your brighter feature and career!<br />100% Job
                                Guarantee</b>
                        </p>
                    </div>
                    <div class="col-md-4 text-center py-5">
                        <i class="fa-solid fa-laptop"></i>
                        <h4 class="text-info title">SOFTWARE ENGINEERING</h4>
                        <p class="m-0">
                            <b>For your brighter feature and career!<br />100% Job
                                Guarantee</b>
                        </p>
                    </div>
                    <div class="col-md-4 text-center py-5">
                        <i class="fa-solid fa-user-group"></i>
                        <h4 class="text-info title ">ON JOB TRAINING</h4>
                        <p class="m-0">
                            <b>For your brighter feature and career!<br />100% Job
                                Guarantee</b>
                        </p>
                    </div>

                    <div class="col-12 text-center pb-5">
                        <a href="#" class="btn vm-btn rounded-pill py-2 text-white shadow-none">View More</a>
                    </div>
                </div>

                <div class="container">
                    <div class="row mb-3">
                        <div class="col-md-6 text-center video-container m-0 g-0">
                            <iframe class="w-100 video rounded-1"
                                src="https://www.youtube.com/embed/_U95WG6XZog?si=5ky4JTei8PvYZ_hc"
                                allowfullscreen></iframe>
                        </div>
                        <div class="col-md-6 text-center video-container m-0 g-0">
                            <iframe class="w-100 video rounded-1"
                                src="https://www.youtube.com/embed/3lWiRuzX3cE?si=Ee2gXuekSMrW_6Y-"
                                allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script >
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
