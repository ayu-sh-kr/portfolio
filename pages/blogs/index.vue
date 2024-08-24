<script setup lang="ts">

import Scaffold from "~/components/utils/Scaffold.vue";
import ParagraphDecoration from "~/components/utils/ParagraphDecoration.vue";
import AppParagraph from "~/components/utils/AppParagraph.vue";
import BlogPreview from "~/components/content/BlogPreview.vue";
import type {QueryBuilderParams} from "@nuxt/content";
import type {Blog} from "~/app";

const query: QueryBuilderParams = { path: '/blogs', sort: [{ publishedOn: -1, updatedOn: -1 }], limit: 10 };

const page = ref();
</script>

<template>
    <NuxtLayout>
        <Scaffold class="mx-auto max-w-[95rem]">
            <ParagraphDecoration/>
            <AppParagraph look="heading" tag="h1" class="mt-4">
                Blogs
            </AppParagraph>
            <Paragraph class="mt-8">
                Below you can find a list of my blogs that I have written on tech, trend and programming.
                Feel free to read them and if you have any suggestions for me please fill the feedback form so that I can improve my content and
                provide you with better insights.
            </Paragraph>
            <div class="space-y-8 md:space-y-0 mt-8">
                <ContentList :query="query" v-slot="{ list }">
                    <BlogPreview v-for="entry in list" :key="entry._path" :blog="(entry as Blog)"/>
                    <UPagination v-model="page" :page-count="5" :total="list.length"  class="py-10"/>
                </ContentList>
            </div>
        </Scaffold>
    </NuxtLayout>
</template>

<style scoped>

</style>