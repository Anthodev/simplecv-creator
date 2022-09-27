<script setup>
import 'tw-elements';
import Profile from '@/Components/Cv/Profile.vue';
import ListExperiences from '@/Components/Cv/ListExperiences.vue';
import ListProjects from '@/Components/Cv/ListProjects.vue';
import UserInfo from '@/Components/Cv/User.vue';
import ListContacts from '@/Components/Cv/ListContacts.vue';
import ListSkills from '@/Components/Cv/ListSkills.vue';
import {Head, Link} from '@inertiajs/inertia-vue3';

const props = defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    user: Object,
    contacts: Object,
    jobs: Object,
    educations: Object,
    projects: Object,
    projectStatuses: Array,
    skills: Object,
    skillTypes: Object,
})
</script>

<template>
    <Head title="CV" />

    <div class="relative flex items-top justify-center min-h-screen pb-32">
        <div v-if="canLogin" class="hidden fixed top-0 right-0 px-4 sm:block">
            <Link v-if="$page.props.auth.user" :href="route('dashboard')" class="text-sm text-gray-700 dark:text-gray-500 underline">Dashboard</Link>

            <template v-else>
                <Link :href="route('login')" class="text-sm text-gray-700 dark:text-gray-500 underline">Log in</Link>

                <Link v-if="canRegister" :href="route('register')" class="ml-4 text-sm text-gray-700 dark:text-gray-500 underline">Register</Link>
            </template>
        </div>

        <div class="px-4 container mx-auto flex flex-row dark:bg-gray-900 drop-shadow-lg mt-8 py-4">
            <div class="basis-3/4 mr-4">
                <Profile v-if="user.description" :description="user.description" />
                <ListExperiences v-if="jobs.length > 0" :experiences="jobs" :title="'Experiences'" />
                <ListProjects v-if="projects.length > 0" :projects="projects" :projectStatuses="projectStatuses" />
                <ListExperiences v-if="educations.length > 0" :experiences="educations" :title="'Education'" />
            </div>
            <div class="basis-1/4 min-h-full">
                <div class="h-full p-4 rounded-lg dark:bg-gray-800">
                    <div class="h-full rounded-lg dark:bg-slate-700">
                        <UserInfo :user="user" />
                        <ListContacts v-if="contacts.length > 0" :contacts="props.contacts" />
                        <ListSkills v-if="skills.length > 0" :skills="props.skills" :skillTypes="skillTypes" class="mt-16" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    @media (prefers-color-scheme: dark) {
        body {
            background-color: rgb(17 24 39 / 1);
        }
    }

    @media (prefers-color-scheme: light) {
        body {
            background-color: rgb(255 255 255 / 1);
        }
    }
</style>
