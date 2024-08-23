<script setup lang="ts">
import STYLE from "~/app.style";

const props = defineProps({
    class: {
        type: String,
        required: false
    }
})

const {tag} = STYLE;

</script>

<template>
    <h4 :class="`${tag?.base} ${tag?.h4} ${props.class}` ?? ''"
    >
        <slot/>
    </h4>
</template>

<style scoped>

</style>