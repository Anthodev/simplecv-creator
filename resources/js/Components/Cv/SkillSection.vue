<script setup>
import 'tw-elements';

let props = defineProps({
    title: String,
    skills: Object,
})

console.log(Object.values(props.skills));
</script>

<template>
    <div v-if="Object.keys(props.skills).length > 0">
        <h5 v-if="title" class="block font-sans font-medium leading-tight text-xl mt-0 mb-2 border-r-8 border-b pl-4 pb-1 dark:text-white">{{ title }}</h5>
        <div class="flex flex-wrap mt-3 gap-2 px-4 justify-center">
            <div v-for="(skill, index) in skills" :key="index">
                <a v-if="skill.url" :href="skill.url" target="_blank" class="ring ring-inset ring-amber-400 rounded-xl text-gray-500 dark:text-gray-200 bg-gray-200 dark:bg-slate-500 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
                    <span class="inline-block rounded-full max-w-none text-center p-1.5"><font-awesome-icon :icon="skill.icon" class="h-full align-middle" /></span>
                    <span class="flex items-center px-3 py-2 ml-3">{{ skill.name }}</span>
                </a>
                <a v-else href="#" class="rounded-xl text-gray-500 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
                    <span class="inline-block rounded-full max-w-none text-center p-1.5"><font-awesome-icon :icon="skill.icon" class="h-full align-middle" /></span>
                    <span class="flex items-center px-3 py-2 ml-3">{{ skill.name }}</span>
                </a>
            </div>
        </div>
    </div>
</template>
