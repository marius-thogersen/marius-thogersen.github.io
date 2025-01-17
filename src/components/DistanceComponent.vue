<template>
 {{ formattedDistance }} 
</template>

<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({distance: Number})

const formattedDistance = ref(0)

const formatDistance = () => {
    formattedDistance.value = new Intl.NumberFormat('da-Dk').format( props.distance).slice(0,-1)
} 
onMounted(formatDistance)



</script>
