<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Meteorite from '~/components/animation/meteorite/Meteorite.vue';

const meteorites = ref<MeteoriteData[]>([]);

function generateMeteoriteProperties(): MeteoriteData {
    const duration = Math.random() * 3 + 1; // Random duration between 1s and 4s
    const startLeft = '0vw'; // Fixed start position
    const endLeft = '100vw'; // Fixed end position
    const startTop = (Math.random() * -100 - 20) + 'px'; // Random start height above the viewport
    const endTop = '100vh'; // End just below the viewport

    return { duration, startLeft, endLeft, startTop, endTop };
}

function createMeteorites(count: number) {
    for (let i = 0; i < count; i++) {
        meteorites.value.push(generateMeteoriteProperties());
    }
}

export interface MeteoriteData {
    startTop: string,
    startLeft: string,
    endTop: string,
    endLeft: string,
    duration: number
}

onMounted(() => {
    createMeteorites(20); // Create 20 meteorites
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