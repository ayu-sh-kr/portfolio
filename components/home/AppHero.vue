<script setup lang="ts">

import MeteoriteAnimation from "~/components/animation/meteorite/MeteoriteAnimation.vue";

const items: string[] = [
    "Software Developer",
    "Web Developer",
    "Data Scrapper",
    "Android Developer"
];

const view = ref<HTMLElement>();

onMounted(() => {
    if (view) {
        let element = view.value;
        let i = 0;

        if (element) {
            setInterval(() => {
                element.innerText = items[i++];
                element?.classList.remove('animate-start');
                void element?.offsetWidth;
                element?.classList.add('animate-start');
                if (i === items.length) {
                    i = 0;
                }
            }, 2000)
        }
    }
})
</script>

<template>
    <section class="relative">
        <div class="absolute inset-1 bg-transparent min-h-screen text-center flex flex-col items-center justify-center font-trebuchet text-dark gap-y-5 z-10">
            <h1 class="text-8xl font-semibold">
                I'm <span class="text-primary text-glow">Ayush Jaiswal</span>
            </h1>
            <span ref="view" class="text-xl"></span>
        </div>
        <MeteoriteAnimation class="absolute z-0"/>
    </section>
</template>

<style scoped>
@import "tailwindcss/utilities";
.animate-start {
    animation: top-down 2s ease-in-out;
}

@keyframes top-down {
    0% {
        @apply opacity-0;
        transform: translateY(-50%);
    }

    50% {
        @apply opacity-100;
        transform: translateY(0%);
    }

    75% {
        @apply opacity-100;
        transform: translateY(0%);
    }

    100% {
        @apply opacity-0;
        transform: translateY(50%);
    }

}

.text-glow {
    text-shadow: 0 0 25px theme('colors.purple.500');
}
</style>