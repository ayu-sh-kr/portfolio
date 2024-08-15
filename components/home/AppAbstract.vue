<script setup lang="ts">

import SectionHeader from "~/components/utils/SectionHeader.vue";

const items: AbstractData[] = [
    {
        label: 'Successful Projects',
        point: '7',
        description: 'I have had the opportunity to work on several projects that have allowed me to develop my skills showcase.'
    },

    {
        label: 'Satisfied Clients',
        point: '4',
        description: 'Worked with clients to resolve there issues and provided real time supports for the projects delivered.'
    }
];

export interface AbstractData {
    label: string;
    point: string;
    description: string;
}
</script>

<template>
<section class="font-trebuchet max-w-7xl mx-auto">
    <SectionHeader secondary="Know My" primary="Achievements" />
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 h-[90%] gap-y-5 py-10">
        <div v-for="item in items" class="text-center w-full md:w-2/3 rounded-xl py-10 bg-white dark:bg-slate-900 border-2 px-3 hover:border-primary duration-500">
            <h1 class="hollow-text text-8xl py-5">{{item.point}}</h1>
            <h1 class="text-2xl font-semibold text-gray-900 dark:text-gray-100">{{item.label}}</h1>
            <p class="font-light text-lg dark:text-gray-400">
                {{item.description}}
            </p>
        </div>
    </div>
</section>
</template>

<style scoped>

.hollow-text {
    @apply font-bold text-transparent bg-clip-text bg-primary;
    -webkit-text-stroke: 1px black;
}

</style>