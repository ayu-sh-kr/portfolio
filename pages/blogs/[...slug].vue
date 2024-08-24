<script setup lang="ts">

import Scaffold from "~/components/utils/Scaffold.vue";
import ParagraphDecoration from "~/components/utils/ParagraphDecoration.vue";
import AppParagraph from "~/components/utils/AppParagraph.vue";
import BackButton from "~/components/content/BackButton.vue";

const {path} = useRoute();
const slug = resolveSlug(path);

const { data } = await useAsyncData(`content-${path}`, () => {
    return queryContent()
        .where({ slug: slug, published: true })
        .findOne();
})

function resolveSlug(path: string) {
    return path.replace("/blogs/", "");
}

</script>

<template>
    <NuxtLayout>
        <Scaffold class="mx-auto max-w-[95rem]">
            <BackButton/>
            <ParagraphDecoration class="mt-4"/>
            <H2 tag="h2" look="heading">{{data?.title}}</H2>
            <article class="mt-5">
                <ContentRenderer :value="data!"/>
            </article>
        </Scaffold>
    </NuxtLayout>
</template>

<style scoped>

</style>