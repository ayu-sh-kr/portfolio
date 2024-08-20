<script setup lang="ts">

const props = defineProps({
    icon1: {
        type: String,
        required: true
    },

    icon2: {
        type: String,
        required: true
    },

    class: {
        type: String,
        required: false
    }
});

const icon = ref<string>(props.icon1);

const resolveEnter = () => {
    icon.value = props.icon2;
}

const resolveLeave = () => {
    icon.value = props.icon1;
}

</script>

<template>
    <UIcon dynamic :name="`i-${icon}`" :class="`${props.class ?? 'text-4xl'}`"
           @mouseenter="resolveEnter" @mouseleave="resolveLeave"
    />
</template>

<style scoped>

</style>