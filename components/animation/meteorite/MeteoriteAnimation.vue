<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Meteorite from '~/components/animation/meteorite/Meteorite.vue';

const meteorites = ref<MeteoriteData[]>([]);

function generateMeteoriteProperties(startTopOffset: number): MeteoriteData {
    const duration = (Math.random() * 3 + 1).toFixed(2); // Constant duration for all meteorites
    const startLeft = '0vw'; // Fixed start position
    const endLeft = '100vw'; // Fixed end position
    const startTop = startTopOffset + 'px'; // Start height with offset
    const endTop = `calc(100vh + ${startTopOffset}px)`; // End height with offset

    return { duration, startLeft, endLeft, startTop, endTop };
}

function createMeteorites() {
    const centerStartTop = -20; // Center meteorite start height above the viewport
    const offsetIncrement = 50; // Increment for each meteorite's start height

    // Center meteorite
    meteorites.value.push(generateMeteoriteProperties(centerStartTop));

    // 5 meteorites above the center
    for (let i = 1; i <= 10; i++) {
        meteorites.value.push(generateMeteoriteProperties(centerStartTop - i * offsetIncrement));
    }

    // 5 meteorites below the center
    for (let i = 1; i <= 8; i++) {
        meteorites.value.push(generateMeteoriteProperties(centerStartTop + i * offsetIncrement));
    }
}

export interface MeteoriteData {
    startTop: string,
    startLeft: string,
    endTop: string,
    endLeft: string,
    duration: string
}

onMounted(() => {
    createMeteorites(); // Create meteorites
});
</script>

<template>
    <section class="h-screen overflow-hidden flex justify-center items-center relative">
        <Meteorite v-for="(meteorite, index) in meteorites" :key="index"
                   :startTop="meteorite.startTop"
                   :startLeft="meteorite.startLeft"
                   :endTop="meteorite.endTop"
                   :endLeft="meteorite.endLeft"
                   :duration="meteorite.duration" />
    </section>
</template>

<style scoped>

</style>