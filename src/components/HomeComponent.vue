<template>
    <BannerSession></BannerSession>
    <StudentProgram></StudentProgram>
    <ActivityComponent></ActivityComponent>
    <StudentDiversityComponent></StudentDiversityComponent>
    <YearProgram></YearProgram>
    <CoreTeam></CoreTeam>
</template>

<script>
import ActivityComponent from '@/Content/ActivityComponent.vue';
import StudentDiversityComponent from '@/Content/StudentDiversityComponent.vue';
import StudentProgram from '@/Content/StudentProgram.vue';
import BannerSession from '@/Content/BannerSession.vue';
import YearProgram from '@/Content/YearProgram.vue';
import CoreTeam from '@/Content/CoreTeam.vue';

    // import axios from 'axios'
    export default {
        name: 'HomeComponent',
        components: {
    BannerSession,
    StudentProgram,
    ActivityComponent,
    StudentDiversityComponent,
    YearProgram,
    CoreTeam
},
        data() {
            return {

            }
        },

    }
</script>

<style scoped></style>
