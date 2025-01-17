<script setup>
import ActivityOverview from './components/ActivityOverview.vue';
import { ref } from 'vue';
import {activities} from './data/activities';
import ActivityTable from './components/ActivityTable.vue';

const files = ref(activities.reverse())
</script>

<template>
  <!-- <ActivityOverview :activityPath="files[0]" />  -->
  <ActivityOverview v-for="file in files" :activityPath="file" />
    <!-- <ActivityTable v-for="file in files" :msg="file" /> -->

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
