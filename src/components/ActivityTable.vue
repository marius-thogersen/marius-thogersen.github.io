<template>
  <h1 class="text-red-600">{{ msg }}</h1>
  <div v-if="isLoading"> LOADING...</div>
  <table v-else id="laps-table" class="">
    <thead>
      <tr id="header" class="outline outline-1">
        <th class="outline outline-1 px-2 " v-for="(h, i) in headerOptions" :key="i">
          {{ i + ". " + h }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="" v-for="(lap, i) in laps" :key="i">

        <td class="outline outline-1" v-for="cell in lap.fields" :key="cell[0]">
          {{ cell }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchFile } from '../data/activities';


const props = defineProps({
  msg: String,
})

// Define a reactive variable to store the file content

const isLoading = ref(false)
const laps = ref({});
let headerOptions = ref([])


// Function to fetch the file
const loadData = async () => {
  isLoading.value = true;
  const activity = await fetchFile(props.msg)
  headerOptions.value = activity.header;
  laps.value = activity.laps;
  isLoading.value = false;
};

// Fetch the file when the component is mounted
onMounted(loadData);
</script>


<style scoped>
.read-the-docs {
  color: #888;
}

pre {
  background: #f4f4f4;
  padding: 10px;
  border: 1px solid #ddd;
  overflow: auto;
  color: black;
}
</style>