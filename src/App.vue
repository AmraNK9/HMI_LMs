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

    export default {
        name: 'App',
        components: {
            NavComponent,
            HomeComponent,
            FooterComponent
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
