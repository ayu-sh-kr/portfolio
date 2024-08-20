<script setup lang="ts">

const props = defineProps({
    text: {
        type: String,
        required: true
    }
});

</script>

<template>
    <h1 class="text-left text-wrap w-full md:w-2/3 h-fit font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-purple-400 to-purple-300">
        {{ text }}
    </h1>
</template>

<style scoped>

</style>