<script >
 /* eslint-disable */
//  import './assets/js/jquery-3.7.1.min.js'
// import fittext from './assets/js/jquery.fittext'
// import lattering from './assets/js/jquery.lettering'
// import textline from './assets/js/jquery.textillate'
import {network} from '../assets/js/network'
export default{
  name:"BannerSession",
  mounted() {
            network();
        }
}
</script>

<template><section class="landing-hmi mt-5 pt-4">
  <div class="landing-wrapper row  g-0 ">
    <div class="col-md-7">
      <div class="header-wrapper  offset-1 ps-4 mt-5 ">
        <h1 class="header-1 revel-fade mt-4">H
           <img :src="require('@/assets/image/world.png')" style="width: 75px; height:auto" width="75px" height="75px" class="mb-3" alt="logo"/> 
           S T</h1>
        <h2 class="header2 mt-3">MYANMAR INSTITUTE</h2>
        <span class="sub-header mt-4 d-block cam-font"><b>for your brighter future and career! 100% Job Guarantee!</b></span>

        <button class="apply-btn rounded-pill mt-4">Apply Now</button>
      </div>
    </div>
    <div class="col-md-5 d-none d-md-block">
      <div id="canvas"></div>
    </div>
  </div>
</section>
</template>
<style>
/* font */
.cam-font{
  font-family: Cambria;
  }
  
  
  /*Landing Css*/
  *{
      padding: 0;
      margin: 0;
  }
  
  
  .landing-wrapper{
      background-color:#d1dfef;
      overflow-x: hidden;
      overflow-y: hidden;
      padding-bottom: 20px;
  }
  #canvas{
      height: 420px;
  }
  .header-1{
      color: #4b80c2;
      font-weight: bolder;
      word-spacing:2cqb;
      font-size: 100px;
  }
  .header2{
      color: #21a7e0;
      font-weight: 700;
      font-size: 50px;
      letter-spacing: 5px;
  }
  
  .sub-header{
      font-weight: lighter;
      font-size: 20px;
  }
  
  @media screen and (max-width:768px) {
      .header1{
          text-align: center;
      }
      .offset-1{
          margin: 0;
      }
      .header2{
          text-align: center;
      }
      .sub-header{
          text-align: center;
      }
      .apply-btn{
          align-content: center;
      }
      .header-wrapper{
          align-content: center;
          text-align: center;
          padding: 0px !important;
      }
  }
  
  button.apply-btn{
      background-color: #21a7e0;
      color: white;
      outline: none;
      font-size: 18px;
      border: none;
      padding:10px 25px;
  }
  
</style>
