<template>
 {{ distanceRef }} 
</template>

<script setup>
import { onMounted, ref } from 'vue';


const props = defineProps({distance: String})
const distanceRef = ref()

onMounted(()=>{
    if(props.distance)
    distanceRef.value = props.distance.replace(".",",").slice(0,-2)
})
</script>
