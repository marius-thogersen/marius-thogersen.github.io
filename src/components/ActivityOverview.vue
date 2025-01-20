<template>
    <!-- This is a row that displays the overview data -->
    <div v-if="isLoading">loading..</div>
    <div v-else class="row grid 
    max-md:grid-cols-4 
    grid-cols-6 
    place-items-center 
    gap-8 max-md:gap-1 max-sm:border-b-2 my-3">
        <div class="place-self-end max-md:row-span-2 max-sm:place-self-center">
                <DateComponent :date="summary.date" />
        </div>
        <div class="flex gap-1">
            <i class="fa-solid fa-flag-checkered"></i>
            <p class="">
            <DistanceComponent :distance="summary.distance" />
            km
        </p>
        </div>
        <div class="flex gap-1">
            <i class="fa-regular fa-clock"></i>
            <p>{{ summary.elapsedTime }}</p>
        </div>
        <div class="grid grid-cols-2 gap-2 max-sm:row-span-2">
            <i class="fa-solid fa-person-running"></i>
            {{ summary.averagePace }} /km
        </div>
        <div class="flex gap-1">
             <i class="fas fa-arrow-up"></i> 
            <p>{{ summary.ascent }} m</p>
         </div>
        <div class="flex gap-1">
             <i class="fas fa-arrow-down mr-2"></i> 
            <p class="">{{ summary.descent }} m</p>
         </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchFile } from '../data/activities';
import DateComponent from './DateComponent.vue';
import { formatSeconds } from '../util/DataUtil';
import { getMinutesPerKmFormat } from '../util/DataUtil';
import DistanceComponent from './DistanceComponent.vue';


const props = defineProps({
    activityPath: String
})

const isLoading = ref(false)
const activity = ref(undefined)

const summary = ref({})

const loadActivity = async () => {
    isLoading.value = true;

    /**@type {Activity} */
    const data = await fetchFile(props.activityPath);
    activity.value = data;

    summary.value["date"] = new Date(data.laps[0].timestamp);
    const totalDistance = data.laps.reduce((acc, val) => acc += val.totalDistance, 0)
    const totalTimerTime = data.laps.reduce((acc, val) => acc += val.totalTimerTime, 0)
    summary.value["distance"] = (totalDistance / 1000).toFixed(3);
    summary.value["elapsedTime"] = formatSeconds(totalTimerTime);
    summary.value["averagePace"] = getMinutesPerKmFormat(totalTimerTime, totalDistance);
    summary.value["ascent"] = data.laps.reduce((acc, val) => acc += val.totalAscent, 0)
    summary.value["descent"] = data.laps.reduce((acc, val) => acc += val.totalDescent, 0)
    isLoading.value = false;
}

onMounted(loadActivity)

</script>

<style lang="css" scoped>

.row > * {
    justify-self: end;
}

i {
    justify-self: end;
    align-self: center;
}
i + * {
    justify-self: end;
    text-align: end;
}

@media (max-width: 640px) {

    i:not(.fa-person-running) {
        scale: 0.5;
    }
}

</style>