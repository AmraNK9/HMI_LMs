<template>
    <div>
        <footer class="text-white-50" style="background-color: #0D0B30;">
            <div class="container">
                <div class="footer row">
                    <div class="col-md-4 p-4">
                        <img :src="hostmmPic" class="img-fluid w-75 mb-4" alt="hostmyanmar">

                        <p class="text-white">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                            lorem et sit, sed stet lorem sit clita</p>
                        <div class="social">
                            <a class="social-btn btn btn-outline-light me-2 rounded-1"><i class="fab fa-twitter"></i></a>
                            <a class="social-btn btn btn-outline-light me-2 rounded-1"><i
                                    class="fab fa-facebook"></i></a>
                            <a class="social-btn btn btn-outline-light me-2 rounded-1"><i
                                    class="fab fa-youtube"></i></a>
                            <a class="social-btn btn btn-outline-light me-2 rounded-1"><i
                                    class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-md-4 p-4  text-white">
                        <h5 class="text-center border-bottom border-secondary pb-2" style="color: #4A81C3;">
                            <b>Address</b>
                        </h5>
                        <div class="pt-1">
                            <p><i class="fa fa-map-marker-alt me-3"></i>6743 Street, New York, USA</p>
                            <p><i class="fa fa-phone-alt me-3"></i>+012-3434-43443</p>
                            <p><i class="fa fa-envelope me-3"></i>+012-3434-43443</p>
                        </div>
                    </div>
                    <div class="col-md-4 p-4">
                        <h5 class="text-center border-bottom border-secondary pb-2" style="color: #4A81C3;"><b>Quick
                                Links</b></h5>
                        <div class="d-flex flex-column justify-start align-items-start text-white pt-1">
                            <a class="btn btn-link"><i class="fa-solid fa-chevron-right pe-2"></i><span>About USA
                                </span></a>
                            <a class="btn btn-link"><i class="fa-solid fa-chevron-right pe-2"></i><span>Contact Us
                                </span></a>
                            <a class="btn btn-link"><i class="fa-solid fa-chevron-right pe-2"></i><span>Our Services
                                </span></a>
                            <a class="btn btn-link"><i class="fa-solid fa-chevron-right pe-2"></i><span>Term &amp;
                                    Condition </span></a>
                            <a class="btn btn-link"><i class="fa-solid fa-chevron-right pe-2"></i><span>Support
                                </span></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                hostmmPic: require('@/assets/image/hostmm.png')
            };
        }
    }
</script>

<style scoped>
    .footer a {
        white-space: pre-wrap;
        font-size: normal;
    }

    .btn-link {
        text-decoration: none;
        color: rgb(255, 255, 255);
    }

    .btn-link i {
        font-size: 12px;
    }

    .btn-link:hover {
        color: #4A81C3;
        font-size: 17px;
        transition: all ease 0.1s;
        font-weight: 500;
    }
</style>
