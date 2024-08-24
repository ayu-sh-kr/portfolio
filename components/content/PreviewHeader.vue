<script setup lang="ts">

defineProps({
    text: {
        type: String,
        required: true
    }
})

</script>

<template>
    <div>
        <H4 class="preview-header">{{ text }}</H4>
    </div>
</template>

<style scoped>

.preview-header {
    @apply relative inline-flex items-center
}

.preview-header::before {
    @apply h-10 bg-gray-900/60 dark:bg-gray-100/60 w-1 mr-4;
    content: '';
}

</style>