<script setup lang="ts">

import AppHeader from "~/components/utils/AppHeader.vue";
import AppFooter from "~/components/utils/AppFooter.vue";
</script>

<template>
    <AppHeader/>
    <slot/>
    <AppFooter/>
</template>

<style scoped>

</style>