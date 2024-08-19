<script setup lang="ts">

import Scaffold from "~/components/utils/Scaffold.vue";
import ServiceScaffold from "~/components/home/services/ServiceScaffold.vue";
import ServiceHeader from "~/components/home/services/ServiceHeader.vue";
import ServiceDescription from "~/components/home/services/ServiceDescription.vue";
import ServiceIcon from "~/components/home/services/ServiceIcon.vue";
</script>

<template>
    <Scaffold class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
        <ServiceScaffold>
            <ServiceIcon icon="tabler:bulb"/>
            <ServiceHeader text="Consulting"/>
            <ServiceDescription description="Companies or businesses can reach out to me for tech support on the their project and I can guide you and prepare you a plan on how to get your software solution up and running online"/>
        </ServiceScaffold>

        <ServiceScaffold>
            <ServiceIcon icon="ic:round-construction"/>
            <ServiceHeader text="Development"/>
            <ServiceDescription description="Got a project to develop, I would love to do the job for you. From developing to deployment I will provide support all the way and ensure secure and trustable project delivery"/>
        </ServiceScaffold>

        <ServiceScaffold>
            <ServiceIcon icon="pajamas:issue-type-maintenance"/>
            <ServiceHeader text="Maintenance"/>
            <ServiceDescription description="Stuck with legacy app or the have an issue in your current project. I will solve it for you and will upgrade the old version to the latest available and ensure your service keeps running"/>
        </ServiceScaffold>
    </Scaffold>
</template>

<style scoped>

</style>