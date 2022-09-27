<script setup>
import 'flowbite';
import MarkdownViewer from '@/Components/Common/Form/MarkdownViewer.vue';
import { ChartBarIcon } from '@heroicons/vue/20/solid';
import { FolderArrowDownIcon } from '@heroicons/vue/20/solid';
import {onMounted} from "vue";

let props = defineProps({
    projects: Object,
    projectStatuses: Array,
})

onMounted(() => {
    const tabElements = () => {
        let elements = [];

        props.projects.forEach((project, index) => {
            elements.push({
                id: 'project-' + project.id,
                triggerEl: document.querySelector('#project-' + project.id + '-tab'),
                targetEl: document.querySelector('#project-' + project.id),
            })
        });

        return elements;
    }

    // options with default values
    const options = {
        defaultTabId: 'project-' + props.projects[0].id,
        activeClasses: 'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
        inactiveClasses: 'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
    };

    const tabs = new Tabs(tabElements(), options);

    // get the current active tab object
    tabs.getActiveTab()
})

</script>

<template>
    <div class="mt-8">
        <h1 class="font-sans font-medium leading-tight text-5xl mt-0 mb-2 border-l-8 pl-4 pb-1 dark:bg-gray-900 dark:text-white">PROJETS</h1>

        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="projectsTabBar" data-tabs-toggle="#projectsTabContent" role="tablist">
                <li v-for="project in props.projects" :key="project.id" class="mr-2" role="presentation">
                    <button class="inline-block p-4 rounded-t-lg border-b-2 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500" :id="'project-' + project.id + '-tab'" :data-tabs-target="'#project-' + project.id" type="button" role="tab" :aria-controls="'project-' + project.id" aria-selected="true">{{ project.title }}</button>
                </li>
            </ul>
        </div>
        <div id="projectsTabContent">
            <div v-for="project in props.projects" :key="project.id" class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800" :id="'project-' + project.id" role="tabpanel" :aria-labelledby="'project-' + project.id + '-tab'">
                <div class="block px-6 py-4 rounded-lg shadow-lg bg-white dark:bg-slate-700">
                    <div v-if="project.image" class="text-center image-custom rounded-lg max-w-sm mx-auto">
                        <img class="rounded-t-lg" :src="'../storage/' + project.image" :alt="project.title"/>
                    </div>
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

<style scoped>
.image-custom {
    max-width: 30em;
}
</style>
