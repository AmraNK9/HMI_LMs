<template>
    <BannerSession></BannerSession>
    <StudentProgram></StudentProgram>
    <ActivityComponent></ActivityComponent>
    <StudentDiversityComponent></StudentDiversityComponent>
</template>

<script>
import ActivityComponent from '@/Content/ActivityComponent.vue';
import StudentDiversityComponent from '@/Content/StudentDiversityComponent.vue';
import StudentProgram from '@/Content/StudentProgram.vue';
import BannerSession from '@/Content/BannerSession.vue';


    // import axios from 'axios'
    export default {
        name: 'HomeComponent',
        components: {
BannerSession,
    StudentProgram,
    ActivityComponent,
    StudentDiversityComponent
},
        data() {
            return {

            }
        },

    }
</script>

<style scoped></style>
