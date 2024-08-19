<script setup lang="ts">
const props = defineProps({
    description: {
        type: String,
        required: true
    },

    size: {
        type: String,
        required: false
    }
})
</script>

<template>
<p :class="`${size ?? 'text-lg'} text-gray-600 dark:text-gray-400`">
    {{description}}
</p>
</template>

<style scoped>

</style>