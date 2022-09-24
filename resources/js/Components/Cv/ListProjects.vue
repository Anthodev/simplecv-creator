<script setup>
import 'tw-elements';
import MarkdownViewer from '@/Components/MarkdownViewer.vue';
import { ChartBarIcon } from '@heroicons/vue/20/solid';
import { FolderArrowDownIcon } from '@heroicons/vue/20/solid';

let props = defineProps({
    projects: Object,
    projectStatuses: Array,
})
</script>

<template>
    <div class="mt-8">
        <h1 class="font-sans font-medium leading-tight text-5xl mt-0 mb-2 border-l-8 pl-4 pb-1 dark:bg-gray-900 dark:text-white">PROJETS</h1>

        <div v-for="project in props.projects">
            <div class="justify-center">
                <div class="block px-6 py-4 rounded-lg shadow-lg bg-white dark:bg-gray-800">
                    <h2 class="text-gray-900 dark:text-gray-200 text-2xl leading-tight font-medium mb-2 uppercase pb-2 border-b">
                        <span v-if="project.url" class="underline hover:no-underline"><a :href="project.url" target="_blank">{{ project.title }}</a></span>
                        <span v-else>{{ project.title }}</span>
                    </h2>

                    <div class="flex justify-items-stretch">
                        <div class="grow font-medium leading-tight text-lg mt-0 mb-2 text-blue-600 dark:text-gray-200">
                            <FolderArrowDownIcon class="inline h-5 w-5 text-white" /> <span v-if="project.repo_url" class="text-yellow-500 underline hover:no-underline"><a :href="project.repo_url" target="_blank">Lien vers le repo</a></span>
                            <span v-else>{{ project.repo_url }}</span>
                        </div>
                        <div class="grow text-right font-medium leading-tight text-base mt-0 mb-2 text-gray-600 dark:text-gray-200 uppercase">
                            <ChartBarIcon class="inline h-5 w-5 text-white" /> {{ projectStatuses[project.status] }}
                        </div>
                    </div>

                    <p class="font-sans text-gray-700 text-base my-4">
                        <MarkdownViewer :id="'viewProjectDescription' + project.id" :data="project.description" />
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
