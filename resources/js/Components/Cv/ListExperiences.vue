<script setup>
import 'flowbite';
import dayjs from 'dayjs';
import MarkdownViewer from '@/Components/Common/Form/MarkdownViewer.vue';
import { MapPinIcon, CalendarIcon, BuildingOfficeIcon } from '@heroicons/vue/20/solid';
import {onMounted} from "vue";

let props = defineProps({
    experiences: Object,
    title: String,
})

const formatDate = (date) => {
    return dayjs(date.toString()).format('MM/YYYY');
}

onMounted(() => {
    const tabElements = () => {
        let elements = [];

        props.experiences.forEach((experience, index) => {
            elements.push({
                id: 'experience-' + experience.id,
                triggerEl: document.querySelector('#experience-' + experience.id + '-tab'),
                targetEl: document.querySelector('#experience-' + experience.id),
            })
        });

        return elements;
    }

    // options with default values
    const options = {
        defaultTabId: 'experience-' + props.experiences[0].id,
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
        <h1 class="font-sans font-medium leading-tight text-5xl mt-0 mb-2 border-l-8 pl-4 pb-1 dark:bg-gray-900 dark:text-white uppercase">{{ props.title }}</h1>

        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="experiencesTabBar" data-tabs-toggle="#experiencesTabContent" role="tablist">
                <li v-for="experience in props.experiences" :key="experience.id" class="mr-2" role="presentation">
                    <button class="inline-block p-4 rounded-t-lg border-b-2 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500" :id="'experience-' + experience.id + '-tab'" :data-tabs-target="'#experience-' + experience.id" type="button" role="tab" :aria-controls="'experience-' + experience.id" aria-selected="true">{{ experience.title }}</button>
                </li>
            </ul>
        </div>

        <div id="experiencesTabContent">
            <div v-for="experience in props.experiences" :key="experience.id" class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800" :id="'experience-' + experience.id" role="tabpanel" :aria-labelledby="'experience-' + experience.id + '-tab'">
                <div class="block px-6 py-4 rounded-lg shadow-lg bg-white dark:bg-slate-700">
                    <h2 class="text-gray-900 dark:text-gray-200 text-2xl leading-tight font-medium mb-2 uppercase pb-2 border-b">{{ experience.title }}</h2>

                    <div class="flex justify-items-stretch">
                        <div class="grow font-medium leading-tight text-xl mt-0 mb-2 text-blue-600 dark:text-gray-200 uppercase">
                            <BuildingOfficeIcon class="inline h-5 w-5 text-white" /> <span v-if="experience.company_url" class="text-yellow-500 underline hover:no-underline"><a :href="experience.company_url" target="_blank">{{ experience.company }}</a></span>
                            <span v-else>{{ experience.company }}</span>
                        </div>
                        <div class="grow text-right font-medium leading-tight text-base mt-0 mb-2 text-gray-600 dark:text-gray-200 uppercase">
                            <CalendarIcon class="inline h-5 w-5 text-white" /> {{ formatDate(experience.start_date) }} <span v-if="experience.end_date">- {{ formatDate(experience.end_date) }}</span> <span v-else> - Maintenant</span> |
                            <MapPinIcon class="inline h-5 w-5 text-white" /> {{ experience.location }}
                        </div>
                    </div>

                    <p class="font-sans text-gray-700 text-base my-4">
                        <MarkdownViewer :id="'viewprops.dataDescription' + experience.id" :data="experience.description" />
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
