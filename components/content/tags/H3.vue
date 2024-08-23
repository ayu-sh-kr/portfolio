<script setup lang="ts">

import STYLE from "~/app.style";

const {tag} = STYLE;
</script>

<template>
    <h3 :class="`${tag?.base} ${tag?.h3}`">
        <slot/>
    </h3>
</template>

<style scoped>

</style>