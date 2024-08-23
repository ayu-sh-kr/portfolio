<script setup lang="ts">

const props = defineProps({
    class: {
        type: String,
        required: false
    }
})
</script>

<template>
    <section class="py-10 md:py-16 font-trebuchet px-3 sm:px-5 md:px-10 mt-10 md:mt-16"
             :class="props.class"
    >
        <slot/>
    </section>
</template>

<style scoped>

</style>