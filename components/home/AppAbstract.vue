<script setup lang="ts">

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
<section class="px-5 py-2 pb-8 font-trebuchet bg-purple-100">
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-content-center place-items-center">
        <div v-for="item in items" class="text-center w-2/3">
            <h1 class="hollow-text text-8xl py-5">{{item.point}}</h1>
            <h1 class="text-2xl font-semibold text-gray-900 dark:text-gray-900">{{item.label}}</h1>
            <p class="font-light text-lg dark:text-gray-700">
                {{item.description}}
            </p>
        </div>
    </div>
</section>
</template>

<style scoped>

.hollow-text {
    @apply font-bold text-transparent bg-clip-text bg-blue-100;
    -webkit-text-stroke: 1px black;
}

</style>