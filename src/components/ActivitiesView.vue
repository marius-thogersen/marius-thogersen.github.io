<template>
    <div class="p-4">
        <h1 class="fixed left-1/2 translate-x-[-50%] bg-[var(--base-bg)] px-6 rounded-full w-full top-0 py-2 z-10">Activities</h1>

        <div class="mt-14">
            <ActivityOverview v-for="file in files" :activityPath="file" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { activities } from '../data/activities';
import ActivityOverview from './ActivityOverview.vue';


const files = ref(activities.reverse())


</script>