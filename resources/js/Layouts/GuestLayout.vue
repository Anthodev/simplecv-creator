<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/inertia-vue3';
</script>

<template>
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-slate-600">
        <div>
            <Link href="/">
                <ApplicationLogo class="w-20 h-20 fill-current text-gray-300" />
            </Link>
        </div>

        <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg dark:bg-slate-700">
            <slot />
        </div>
    </div>
</template>
