<script setup lang="ts">

const props = defineProps({
    icon: {
        type: String,
        required: true
    }
})
</script>

<template>
    <Icon dynamic :name="`i-${icon}`" class="text-primary text-6xl text-center font-semibold transition-all group-hover:scale-125"/>
</template>

<style scoped>

</style>