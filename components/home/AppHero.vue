<script setup lang="ts">
const items: string[] = [
    "Software Developer",
    "Web Developer",
    "Data Scrapper",
    "Android Developer"
];

const view = ref<HTMLElement>();

onMounted(() => {
    if(view) {
        console.log(view.value)
    }
})
</script>

<template>
<section>
    <div class="h-[90vh] text-center flex flex-col items-center justify-center font-trebuchet text-center">
        <h1 class="text-8xl">
            I'm <span class="text-primary">Ayush Jaiswal</span>
        </h1>
        <span ref="view"></span>
    </div>
</section>
</template>

<style scoped>

</style>