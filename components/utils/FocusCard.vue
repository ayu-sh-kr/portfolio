<script setup lang="ts">
import Scaffold from "~/components/utils/Scaffold.vue";

defineProps({
    text1: String,
    text2: String
})

</script>

<template>
    <Scaffold class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        <div class="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
            <div
                class="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-violet-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
                style="background-image: conic-gradient(var(--conic-position), var(--tw-gradient-stops)); opacity: 1; width: 30rem;">
                <div
                    class="absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"></div>
                <div
                    class="absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]"></div>
            </div>
            <div class="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-violet-500 text-white [--conic-position:from_290deg_at_center_top]"
                style="background-image: conic-gradient(var(--conic-position), var(--tw-gradient-stops)); opacity: 1; width: 30rem;">
                <div class="absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]"></div>
                <div class="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"></div>
            </div>

            <div class="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>

            <div class="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>

            <div class="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-violet-500 opacity-50 blur-3xl"></div>
            <div class="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-violet-400 blur-2xl"
                 style="width: 16rem;"></div>
            <div class="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-violet-400 "
                 style="width: 30rem;"></div>
            <div class="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
        </div>
        <div class="relative z-50 flex -translate-y-80 flex-col items-center px-5">
            <h1 class="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            style="opacity: 1; transform: none;">{{ text1 }} <br> {{ text2 }}</h1></div>
    </Scaffold>
</template>

<style scoped>
@import "tailwindcss/utilities";

</style>