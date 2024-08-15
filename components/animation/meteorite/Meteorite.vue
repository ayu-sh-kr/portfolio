<script setup lang="ts">
const props = defineProps({
    startTop: {
        type: String,
        required: true
    },
    startLeft: {
        type: String,
        required: true
    },
    endTop: {
        type: String,
        required: true
    },
    endLeft: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    }
});

const meteorite = ref<HTMLSpanElement>();

onMounted(() => {
    if(meteorite.value) {
        meteorite.value.style.setProperty('--start-top', props.startTop);
        meteorite.value.style.setProperty('--start-left', props.startLeft);
        meteorite.value.style.setProperty('--end-top', props.endTop);
        meteorite.value.style.setProperty('--end-left', props.endLeft)
        meteorite.value.style.setProperty('--animation-duration', props.duration + 's');
    }

})

</script>

<template>
<span ref="meteorite" class="meteorite" :style="{
    top: startTop,
    left: startLeft,
    animationDuration: duration + 's',
    '--start-top': startTop,
    '--start-left': startLeft,
    '--end-top': endTop,
    '--end-left': endLeft
}">
<!--    <span class="burning-tail"></span>-->
</span>
</template>

<style scoped>
.meteorite {
    @apply dark:bg-slate-300 bg-slate-700 shadow-xl dark:shadow-white shadow-black;
    position: absolute;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    animation: fall linear infinite;
    z-index: 1; /* Ensure meteorite is in front */
}

@keyframes fall {
    0% {
        top: var(--start-top);
        left: var(--start-left);
        opacity: 1;
    }
    100% {
        top: var(--end-top);
        left: var(--end-left);
        opacity: 1;
    }
}

.burning-tail {
    @apply dark:bg-white bg-black shadow-xl dark:shadow-white shadow-black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: rotate(45deg); /* Align tail with fall direction */
    width: 5px;
    border-radius: 50%;
    animation: burn 2s linear infinite;
    z-index: 0; /* Ensure tail is behind */
}

@keyframes burn {
    0% {
        height: 100px;
        opacity: 1;
    }
    100% {
        height: 35px;
        opacity: 0.5;
    }
}
</style>