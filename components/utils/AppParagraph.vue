<script setup lang="ts">
const STYLES = {
    superHeading: 'font-extrabold text-transparent text-6xl sm:text-8xl md:text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-purple-600 to-violet-700',
    heading: 'font-bold text-5xl text-gray-900 dark:text-gray-100',
    subParagraph: 'text-gray-600 text-lg font-semibold',
    paragraph: 'text-lg text-gray-600',
    DEFAULT: ''
} as const

type Style = keyof typeof STYLES

withDefaults(defineProps<{
    look?: Style,
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div'
}>(), {
    look: 'DEFAULT',
    tag: 'p'
})

</script>

<template>
    <component :is="tag" :class="STYLES[look]">
        <slot />
    </component>
</template>