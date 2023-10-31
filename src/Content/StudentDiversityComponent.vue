<template>
  <section class="student_diversity_section">
    <div class="container" id="student_diversity">
      <div class="row d-flex justify-content-around align-items-center mb-5">
        <div
          class="col-md-5 d-flex flex-column justify-content-center align-items-center"
        >
          <h4
            class="mb-lg-5 d-flex align-items-start mt-4 student-diversity"
            style="{zIndex: 999}"
          >
            STUDENT DIVERSITY IN HMI
          </h4>
          <img
            :src="require('@/assets/image/chart.png')"
            :style="{zIndex: 9,width:'auto',
            height:'300px'}"
          />
        </div>
        <div
          class="col-md-4 mt-4 d-flex justify-content-center align-items-center"
        >
          <img
            :src="require('@/assets/image/387327088_869003841393408_8937628880334378896_n.jpg')"
            :style="{zIndex: 9,width:'330px',
            height:'auto'}"
            
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "StudentDiversity",
};
</script>

<style scoped>
/*------*/
.student_diversity_section{
    background-image:  url("@/assets/image/pngwing.com.png");
    background-repeat: repeat;
    background-position: contain;
    background-size: 200px;
    padding-bottom: 10px;
    margin-top: 50px;
}
.student-diversity{
    color: #20A7DF;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
</style>
