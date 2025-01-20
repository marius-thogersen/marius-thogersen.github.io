<template>
    STREAKVIEW
    <!-- {{ data }} -->
</template>

<script setup>
import { ref } from 'vue';
import { streakData } from '../data/activities';

const data = ref('Who am i?')


const loadStreak = async function (){
    data.value = await streakData();
    console.log(data.value)
}

</script>