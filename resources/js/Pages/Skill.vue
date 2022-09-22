<script setup>
import 'tw-elements';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import FormAddSkill from '@/Components/Skill/Forms/FormAddSkill.vue';
import ListSkills from '@/Components/Skill/ListSkills.vue';
import { Head } from '@inertiajs/inertia-vue3';

defineProps({
    skills: {
        type: Object,
        required: true,
    },
    skillTypes: {
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
                Compétences
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
                            <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"  data-bs-toggle="collapse" href="#addSkillForm" role="button" aria-expanded="false" aria-controls="addSkillForm">
                                Ajouter une compétence
                            </button>
                        </div>
                    </div>
                    <div class="collapse" id="addSkillForm">
                        <div class="block p-6 rounded-lg shadow-lg bg-white dark:bg-gray-400">
                            <FormAddSkill :skillTypes="$props.skillTypes" />
                        </div>
                    </div>
                    <ListSkills :skills="skills" :skillTypes="skillTypes" />
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
