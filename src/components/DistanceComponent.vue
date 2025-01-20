<template>
 {{ formattedDistance }} 
</template>

<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({distance: Number})

const formattedDistance = ref(0)

const formatDistance = () => {
    const number = new Intl.NumberFormat('da-DK').format( props.distance).slice(0, -1)
    formattedDistance.value = parseFloat(number)
} 
onMounted(formatDistance)



</script>
