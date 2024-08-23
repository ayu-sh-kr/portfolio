<script setup lang="ts">

import STYLE from "~/app.style";
const { tag } = STYLE;

</script>

<template>
    <h1 :class="`${tag?.base} ${tag?.h1}`">
        <slot/>
    </h1>
</template>

<style scoped>

</style>