<script setup>
import 'tw-elements';
import Profile from '@/Components/Cv/Profile.vue';
import ListExperiences from '@/Components/Cv/ListExperiences.vue';
import ListProjects from '@/Components/Cv/ListProjects.vue';
import {Head, Link, usePage} from '@inertiajs/inertia-vue3';

const user = usePage().props.value.auth.user;

let props = defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
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

    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 pb-32">
        <div v-if="canLogin" class="hidden fixed top-0 right-0 px-4 sm:block">
            <Link v-if="$page.props.auth.user" :href="route('dashboard')" class="text-sm text-gray-700 dark:text-gray-500 underline">Dashboard</Link>

            <template v-else>
                <Link :href="route('login')" class="text-sm text-gray-700 dark:text-gray-500 underline">Log in</Link>

                <Link v-if="canRegister" :href="route('register')" class="ml-4 text-sm text-gray-700 dark:text-gray-500 underline">Register</Link>
            </template>
        </div>

        <div class="px-4 container mx-auto flex flex-row dark:bg-gray-900 drop-shadow-lg mt-8">
            <div class="basis-2/3">
                <Profile :display_name="user.display_name" :description="user.description" />
                <ListExperiences :experiences="jobs" :title="'Experiences'" />
                <ListProjects :projects="projects" :projectStatuses="projectStatuses" />
                <ListExperiences :experiences="educations" :title="'Education'" />
            </div>
            <div class="basis-1/3">

            </div>
        </div>
    </div>
</template>
