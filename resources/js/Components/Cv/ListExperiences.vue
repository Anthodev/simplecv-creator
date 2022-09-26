<script setup>
import 'tw-elements';
import dayjs from 'dayjs';
import MarkdownViewer from '@/Components/Common/Form/MarkdownViewer.vue';
import { MapPinIcon, CalendarIcon, BuildingOfficeIcon } from '@heroicons/vue/20/solid';

let props = defineProps({
    experiences: Object,
    title: String,
})

const formatDate = (date) => {
    return dayjs(date.toString()).format('MM/YYYY');
}
</script>

<template>
    <div class="mt-8">
        <h1 class="font-sans font-medium leading-tight text-5xl mt-0 mb-2 border-l-8 pl-4 pb-1 dark:bg-gray-900 dark:text-white uppercase">{{ props.title }}</h1>

        <div v-for="experience in props.experiences">
            <div class="justify-center">
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
                        <MarkdownViewer :id="'viewExperienceDescription' + experience.id" :data="experience.description" />
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
