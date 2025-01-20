<template>
    <div class="p-4">
        <h1>Activities</h1>
        <ActivityOverview v-for="file in files" :activityPath="file" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { activities } from '../data/activities';
import ActivityOverview from './ActivityOverview.vue';


const files = ref(activities.reverse())


</script>