<script setup lang="ts">

const props = defineProps({
    class: {
        type: String,
        required: false
    }
})
</script>

<template>
    <section class="py-10 font-trebuchet w-full px-3 sm:px-5 md:px-10"
             :class="props.class"
    >
        <slot/>
    </section>
</template>

<style scoped>

</style>