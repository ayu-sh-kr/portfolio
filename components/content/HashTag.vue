<script setup lang="ts">

defineProps({
    tag: {
        type: String,
        required: true
    }
})
</script>

<template>
<span class="text-primary font-light">#{{tag}}</span>
</template>

<style scoped>

</style>