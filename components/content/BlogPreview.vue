<script setup lang="ts">

import type {BlogPreview} from "~/app";
import HashTag from "~/components/content/HashTag.vue";
import PreviewHeader from "~/components/content/PreviewHeader.vue";

const props = defineProps({
    blog: {
        type: Object as PropType<BlogPreview>,
        required: true
    }
});

const dateTime = computed(() => {
    const date = new Date(props.blog.publishedOn);
    return date.toDateString() +  ' ' + date.toLocaleTimeString();
})

</script>

<template>
    <NuxtLink :to="blog._path" v-if="blog.published">
        <div class="p-4 rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-800/40 bg-white dark:bg-gray-900 shadow-lg transition-all space-y-2 my-10">
            <UBadge color="emerald" variant="soft">{{dateTime}}</UBadge>
            <PreviewHeader :text="blog.title" />
            <Paragraph class="group-hover:text-gray-200">{{ blog.description }}</Paragraph>
            <div class="flex gap-x-5">
                <HashTag v-for="(topic, index) in blog.topics" :key="index" :tag="topic"/>
            </div>
        </div>
    </NuxtLink>
</template>

<style scoped>

</style>