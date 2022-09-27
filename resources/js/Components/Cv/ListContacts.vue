<script setup>
import 'tw-elements';

const props = defineProps({
    contacts: Object,
})
</script>

<template>
    <div class="flex flex-wrap mt-8 gap-2 px-4 justify-center">
        <div v-for="contact in props.contacts">
            <a v-if="contact.url" :href="contact.url" target="_blank" class="ring ring-inset ring-amber-400 rounded-xl text-gray-500 dark:text-gray-200 bg-gray-200 dark:bg-slate-500 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
                <span class="inline-block rounded-full max-w-none text-center p-1.5"><font-awesome-icon :icon="contact.icon" class="h-full align-middle" /></span>
                <span class="flex items-center px-3 py-2 ml-3">{{ contact.name }}</span>
            </a>
            <a v-else href="#" class="rounded-xl text-gray-500 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
                <span class="inline-block rounded-full max-w-none text-center p-1.5"><font-awesome-icon :icon="contact.icon" class="h-full align-middle" /></span>
                <span class="flex items-center px-3 py-2 ml-3">{{ contact.name }}</span>
            </a>
        </div>
    </div>
</template>
