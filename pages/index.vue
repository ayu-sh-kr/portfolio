<script setup lang="ts">

import AppHero from "~/components/home/AppHero.vue";
import AppAbstract from "~/components/home/AppAbstract.vue";
import AboutMe from "~/components/home/AboutMe.vue";
import AppServices from "~/components/home/AppServices.vue";
</script>

<template>
    <NuxtLayout>
        <AppHero/>
        <AboutMe/>
        <AppServices/>
        <AppAbstract/>
    </NuxtLayout>
</template>

<style scoped>

</style>