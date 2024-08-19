<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        required: true
    }
});
</script>

<template>
    <h3 class="text-2xl font-semibold text-dark">{{ text }}</h3>
</template>

<style scoped>

</style>