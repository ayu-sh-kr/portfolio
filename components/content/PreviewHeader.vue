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
        <H4 class="relative inline-flex items-center before:content-[''] before:h-10 before:bg-gray-900/60  before:w-1 before:mr-4">{{ text }}</H4>
    </div>
</template>

<style scoped>

</style>