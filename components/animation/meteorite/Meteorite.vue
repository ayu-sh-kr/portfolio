<script setup lang="ts">

</script>

<template>
<span class="meteorite">
    <span class="burning-tail"></span>
</span>
</template>

<style scoped>

:root {
    --meteorite-speed: 2s;
    --top-position: 0;
    --left-position: 50%;
    --translate-X: -50%;
}

.meteorite {
    position: absolute;
    top: var(--top-position);
    left: var(--left-position);
    transform: translateX(var(--translate-X)) rotate(180deg);
    background-color: #ff5722; /* Meteorite color */
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: fall var(--meteorite-speed) linear infinite;
    box-shadow: 0 0 10px rgba(255, 87, 34, 0.8), 0 0 20px rgba(255, 87, 34, 0.6), 0 0 30px rgba(255, 87, 34, 0.4);
    z-index: 1; /* Ensure meteorite is in front */
}

@keyframes fall {
    0% {
        top: -20px;
        opacity: 1;
    }
    100% {
        top: 100vh;
        opacity: 0;
    }
}

.burning-tail {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    width: 5px;
    height: 100px;
    background: linear-gradient(to bottom, rgba(255, 87, 34, 0.8), rgba(255, 87, 34, 0));
    border-radius: 50%;
    animation: burn 2s linear infinite;
    z-index: 0; /* Ensure tail is behind */
}

@keyframes burn {
    0% {
        height: 50px;
        opacity: 1;
    }
    100% {
        height: 0;
        opacity: 0;
    }
}
</style>