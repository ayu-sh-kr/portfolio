<script setup lang="ts">

import Scaffold from "~/components/utils/Scaffold.vue";
import ServiceScaffold from "~/components/home/services/ServiceScaffold.vue";
import ServiceHeader from "~/components/home/services/ServiceHeader.vue";
import ServiceDescription from "~/components/home/services/ServiceDescription.vue";
import ServiceIcon from "~/components/home/services/ServiceIcon.vue";

const items: ServiceCard[] = [
    {
        icon: 'tabler:bulb',
        title: 'Consulting',
        description: 'Companies or businesses can reach out to me for tech support on the their project and I can guide you and prepare you a plan on how to get your software solution up and running online'
    },

    {
        icon: 'ic:round-construction',
        title: 'Development',
        description: 'Got a project to develop, I would love to do the job for you. From developing to deployment I will provide support all the way and ensure secure and trustable project delivery'
    },

    {
        icon: 'pajamas:issue-type-maintenance',
        title: 'Maintenance',
        description: 'Stuck with legacy app or the have an issue in your current project. I will solve it for you and will upgrade the old version to the latest available and ensure your service keeps running'
    }
]

export interface ServiceCard {
    icon: string,
    title: string,
    description: string
}
</script>

<template>
    <Scaffold class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
        <ServiceScaffold v-for="(item, key) in items" :key="key">
            <ServiceIcon :icon="item.icon"/>
            <ServiceHeader :text="item.title"/>
            <ServiceDescription :description="item.description"/>
        </ServiceScaffold>
    </Scaffold>
</template>

<style scoped>

</style>