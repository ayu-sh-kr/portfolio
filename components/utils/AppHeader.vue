<script setup lang="ts">

import {useDark, useToggle} from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const links: Link[] = [
    {
        label: 'Home',
        to: '/',
        icon: ''
    },

    {
        label: 'Blogs',
        to: '/blogs',
        icon: ''
    },

    {
        label: 'Services',
        to: '/services',
        icon: ''
    },

    {
        label: 'About',
        to: '/about',
        icon: ''
    }
]

const route = useRoute();

const activeHeader = computed(() => links.find(link => link.to === route.path) || {label: '', to: ''})

export interface Link {
    label: string,
    to: string,
    icon: string
}
</script>

<template>
<header class="font-trebuchet fixed top-0 w-full">
    <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 place-items-center place-content-center py-2">
        <div class="text-3xl font-semibold text-primary text-left w-full px-3">
            Logo
        </div>
        <ul class="md:flex justify-center gap-x-10 items-center text-lg text-gray-800 dark:text-gray-100 w-full lg:col-span-2 hidden py-2">
            <li class="hover:text-primary cursor-pointer px-3" v-for="link in links"
                :class="{'active-header': activeHeader.label === link.label}"
            >
                <NuxtLink :to="link.to">{{link.label}}</NuxtLink>
            </li>
        </ul>
        <div class="flex px-3 gap-x-5 justify-end items-center w-full">
            <UIcon
                class="text-primary w-8 h-8 hover:bg-gray-300 dark:hover:bg-gray-800 p-1 rounded-lg cursor-pointer"
                dynamic
                :name="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
                color="primary"
                @click="toggleDark()"
            />
            <div class="sm:hidden block">
                <UIcon
                    class="text-primary w-8 h-8 hover:bg-gray-300 dark:hover:bg-gray-800 p-1 rounded-lg cursor-pointer"
                    dynamic
                    name="i-heroicons-bars-3"
                />
            </div>
        </div>
    </div>
</header>
</template>

<style scoped>

.active-header {
    @apply text-purple-700 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-500 border-r-4 border-purple-700;
}
</style>