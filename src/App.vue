<script setup>
import { ref } from 'vue';
import StreakView from './components/StreakView.vue';
import ActivitiesView from './components/ActivitiesView.vue';


const currentTab = ref('StreakView')

const tabs = {
  StreakView, 
  ActivitiesView
}


</script>

<template>
<div class="tabs">
<component :is="tabs[currentTab]" class="tab"></component>
</div>
  <div class="buttons flex justify-center items-center ">
<button
 v-for="(_,tab) in tabs"
 :key="tab"
 :class="['tab-button', { active: currentTab === tab}]"
 @click="currentTab = tab"
 > {{ tab }}</button>
</div>
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

.tabs {
  height: 90dvh;
  overflow-y: scroll;
}

.buttons {
  height:10dvh;
}

</style>
