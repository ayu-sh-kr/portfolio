<script setup lang="ts">

import SectionHeader from "~/components/utils/SectionHeader.vue";
import Scaffold from "~/components/utils/Scaffold.vue";
import BigHeader from "~/components/home/about/BigHeader.vue";
import ReactiveIcon from "~/components/home/about/ReactiveIcon.vue";
</script>

<template>
    <Scaffold>

        <SectionHeader secondary="Get To Know More" primary="About Me" />

        <div class="py-20 grid sm:grid-cols-2 grid-cols-1 place-items-center gap-8">
            <div class="text-left">
                <div class="w-full flex flex-col items-start lg:text-8xl md:text-6xl text-5xl">
                    <BigHeader text="Build //"/>
                    <BigHeader text="Deploy //"/>
                    <BigHeader text="Maintain //"/>
                </div>
                <p class="md:text-lg text-sm text-gray-800 dark:text-gray-200 py-5 font-extralight">
                    Hello there, I'm <strong class="text-primary font-semibold">Ayush</strong>, Software Engineer based in <strong class="text-primary font-semibold">Varanasi, India</strong>.
                    <br>
                    I help companies to build better web applications and to improve their knowledge, workflows, and culture.
                </p>

                <p>I specialize in Java and Spring Boot. I use Kotlin Multiplatform using Compose for <span class="text-primary font-semibold">Cross Platform</span> mobile app development.</p>

                <div class="grid grid-cols-2 pt-10 text-sm sm:text-lg md:text-xl place-content-center gap-x-8">
                    <button class="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 py-1 md:px-3 text-white">SCHEDULE MEETING</button>
                    <button class="py-1 md:px-3 dark:text-white border-2 border-purple-600 hover:bg-primary">ABOUT ME</button>
                </div>

                <div class="mt-6 space-x-5 flex items-center">
                    <ReactiveIcon icon2="logos:spring-icon" icon1="simple-icons:spring" title="Spring Framework"/>
                    <ReactiveIcon icon2="logos:java" icon1="cib:java" title="Java"/>
                    <ReactiveIcon icon2="devicon:typescript" icon1="devicon-plain:typescript" title="Typescript"/>
                    <ReactiveIcon icon2="catppuccin:nuxt" icon1="catppuccin:nuxt-ignore" title="Nuxt"/>
                    <ReactiveIcon icon2="devicon:tailwindcss" icon1="simple-icons:tailwindcss" title="Tailwindcss"/>
                </div>

            </div>
            <div class="flex justify-center items-center h-full">
                <div class="lg:h-96 lg:w-96 md:h-80 md:w-80 h-72 w-72 bg-emerald-800 rounded-full"></div>
            </div>
        </div>
    </Scaffold>
</template>

<style scoped>

</style>