<script setup lang="ts">

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
    <section>
        <div class="h-[90vh] text-center flex flex-col items-center justify-center font-trebuchet text-dark gap-y-5">
            <h1 class="text-8xl">
                I'm <span class="text-primary">Ayush Jaiswal</span>
            </h1>
            <span ref="view" class="text-xl"></span>
        </div>
    </section>
</template>

<style scoped>

.animate-start {
    animation: top-down 2s ease-in-out infinite;
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
</style>