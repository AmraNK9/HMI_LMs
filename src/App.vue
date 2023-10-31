<template>
    <NavComponent />
    <HomeComponent />
    <FooterComponent />
    <!-- footer -->
</template>

<script>
    import HomeComponent from './components/HomeComponent.vue'
    import 'bootstrap/dist/css/bootstrap.min.css'
    import NavComponent from './components/NavComponent.vue';
    import FooterComponent from './components/FooterComponent.vue';
    import { MyScrollReveal } from '@/assets/js/scroll_reveal';
    // import {textAnimate} from '@/assets/js/textAnimate';
    // import { lattring } from './assets/js/jquery.lettering';
    // import { fitt } from './assets/js/jquery.fittext';
    // import {textillate} from './assets/js/jquery.textillate'
    export default {
        name: 'App',
        components: {
            NavComponent,
            HomeComponent,
            FooterComponent
        },
    
        mounted(){
//             fitt()

// lattring()
// textillate()  
// textAnimate()
    MyScrollReveal()

  }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
