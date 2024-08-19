<script setup lang="ts">

import Scaffold from "~/components/utils/Scaffold.vue";
import ServiceScaffold from "~/components/home/services/ServiceScaffold.vue";
import ServiceHeader from "~/components/home/services/ServiceHeader.vue";
import ServiceDescription from "~/components/home/services/ServiceDescription.vue";
</script>

<template>
    <Scaffold class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ServiceScaffold>
            <ServiceHeader text="Consulting"/>
            <ServiceDescription description="Companies reach out to help them build better Vue and Nuxt applications - from solving problems to discussing the right abstractions and architecture."/>
        </ServiceScaffold>
    </Scaffold>
</template>

<style scoped>

</style>