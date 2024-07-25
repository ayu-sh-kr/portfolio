<script setup lang="ts">

</script>

<template>
    <section class="px-5 py-10 font-trebuchet">
        <h1 class="text-primary text-center md:text-4xl sm:text-3xl text-2xl">About Me</h1>

        <div class="py-20 grid sm:grid-cols-2 grid-cols-1 h-[80vh] place-items-center">
            <div class="text-center">
                <h1 class="text-4xl text-center tracking-wide leading-normal">Software Engineer and Life Long Learner</h1>
                <div class="flex gap-x-5 justify-center gap-y-3">
                    <UBadge label="Backend Developer" color="fuchsia" variant="soft"/>
                    <UBadge label="Frontend Developer" color="amber" variant="soft"/>
                    <UBadge label="Data Scrapper" color="emerald" variant="soft"/>
                    <UBadge label="Android Developer" color="blue" variant="soft"/>
                </div>
                <p class="text-lg font-light text-gray-800 dark:text-gray-200 py-5">
                    Hello there, I'm <strong class="text-primary font-semibold">Ayush Jaiswal</strong>, Software Engineer, Developing Web Apps, Android Apps and Data Scrapper based in <strong class="text-primary font-semibold">Varanasi, India</strong>.
                    I specialize in Java and Spring Boot. I use Kotlin Multiplatform using Compose for <span class="text-primary font-semibold">Cross Platform</span> mobile app development.
                    <br>
                    I help companies in building well designed, easy to maintain and fast backend applications.
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>