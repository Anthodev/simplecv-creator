<script setup>
import 'tw-elements';
import MarkdownViewer from '@/Components/Common/Form/MarkdownViewer.vue';

let props = defineProps({
    description: String,
})
</script>

<template>
    <div>
        <h1 class="font-sans font-medium leading-tight text-5xl mt-0 mb-2 border-l-8 pl-4 pb-1 dark:bg-gray-900 dark:text-white">
            PROFIL
        </h1>

        <MarkdownViewer :id="'viewProfileDescription'" :data="description" />
    </div>
</template>
