<script setup>
import 'tw-elements';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import FormAddExperience from '@/Components/Experience/Forms/FormAddExperience.vue';
import ListExperiences from '@/Components/Experience/ListExperiences.vue';
import { Head } from '@inertiajs/inertia-vue3';

defineProps({
    experiences: {
        type: Object,
        required: true,
    },
    experienceTypes: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <Head title="Expériences" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Expériences
            </h2>
        </template>

        <div v-if="$page.props.flash.message" class="alert">
            {{ $page.props.flash.message }}
        </div>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="flex p-2 bg-white dark:bg-gray-500 border-b border-gray-200 dark:border-gray-600">
                        <div class="grow"></div>
                        <div class="flex-none">
                            <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"  data-bs-toggle="collapse" href="#addExperienceForm" role="button" aria-expanded="false" aria-controls="addExperienceForm">
                                Ajouter une expérience
                            </button>
                        </div>
                    </div>
                    <div class="collapse" id="addExperienceForm">
                        <div class="block p-6 rounded-lg shadow-lg bg-white dark:bg-gray-400">
                            <FormAddExperience :experienceTypes="$props.experienceTypes" />
                        </div>
                    </div>
                    <ListExperiences :experiences="experiences" :experienceTypes="experienceTypes" />
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
