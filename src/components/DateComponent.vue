<template>
    <div class="grid grid-cols-2">
        <p class="text-4xl max-sm:text-2xl row-span-2 justify-self-end">
            {{ dateRef.getDate() }}
        </p>
        <p class="text-xl max-sm:text-sm text-center w-12">
            {{ getShortMonth(dateRef.getMonth()) }}
        </p>
        <p class="text-xs text-center w-12">
            {{ dateRef.getFullYear() }}
        </p>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
    date: Date
})


const dateRef = ref(new Date(props.date))

function getShortMonth(month) {
    if(month || month === 0)
        return months[month].substring(0, 3);
    else
        console.error("WTF", month, months[month])
}

const months = {
    0: "Januar",
    1: "Februar",
    2: "Marts",
    3: "April",
    4: "Maj",
    5: "Juni",
    6: "Juli",
    7: "August",
    8: "September",
    9: "Oktober",
    10: "November",
    11: "December"
}
</script>