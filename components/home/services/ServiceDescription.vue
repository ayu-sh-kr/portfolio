<script setup lang="ts">
const props = defineProps({
    description: {
        type: String,
        required: true
    }
})
</script>

<template>
<p class="text-gray-600 dark:text-gray-400">
    {{description}}
</p>
</template>

<style scoped>

</style>