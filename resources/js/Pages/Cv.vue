<script setup>
import 'tw-elements';
import {Head, Link, usePage} from '@inertiajs/inertia-vue3';

let user = usePage().props.value.auth.user;

let props = defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    experiences: Object,
    experienceTypes: Object,
    projects: Object,
    projectStatuses: Object,
    skills: Object,
    skillTypes: Object,
})
</script>

<template>
    <Head title="CV" />

    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
        <div v-if="canLogin" class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
            <Link v-if="$page.props.auth.user" :href="route('dashboard')" class="text-sm text-gray-700 dark:text-gray-500 underline">Dashboard</Link>

            <template v-else>
                <Link :href="route('login')" class="text-sm text-gray-700 dark:text-gray-500 underline">Log in</Link>

                <Link v-if="canRegister" :href="route('register')" class="ml-4 text-sm text-gray-700 dark:text-gray-500 underline">Register</Link>
            </template>
        </div>

        <div class="container mx-auto dark:bg-gray-900 drop-shadow-lg">
            <h1 class="font-mono font-medium leading-tight text-5xl mt-0 mb-2 border-l-8 pl-4 pb-1 dark:bg-gray-900 dark:text-white">PROFIL</h1>

            <div class="mt-4 p-4 font-sans dark:text-white">
                {{ user.description }}
            </div>
        </div>
    </div>
</template>
