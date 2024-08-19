<script setup lang="ts">

const props = defineProps({
    class: {
        type: String,
        required: false
    }
})
</script>

<template>
    <section class="py-10 font-trebuchet max-w-7xl mx-auto"
             :class="props.class"
    >
        <slot/>
    </section>
</template>

<style scoped>

</style>