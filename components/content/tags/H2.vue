<script setup lang="ts">

import STYLE from "~/app.style";

const {tag} = STYLE;
</script>

<template>
    <h2 :class="`${tag?.base} ${tag?.h2}`">
        <slot/>
    </h2>
</template>

<style scoped>

</style>