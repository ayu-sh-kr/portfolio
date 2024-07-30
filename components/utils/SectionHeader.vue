<script setup lang="ts">

const props = defineProps({
    primary: {
        type: String,
        required: true
    },

    secondary: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="flex flex-col justify-center items-center gap-y-3">
        <p class="md:text-lg text-sm font-extralight text-purple-400 dark:text-primary">{{secondary}}</p>
        <h1 class="text-gray-900 dark:text-gray-100 text-center md:text-5xl sm:text-4xl text-3xl">{{primary}}</h1>
    </div>
</template>

<style scoped>

</style>