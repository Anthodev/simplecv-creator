<script setup>
import 'tw-elements';
import FormUpdateProject from '@/Components/Project/Forms/FormUpdateProject.vue';

defineProps({
    projects: {
        type: Object,
        required: true,
    },
    projectStatuses: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <div class="accordion" id="projectsList">
        <div v-for="project in projects" class="accordion-item bg-white border border-gray-200 dark:bg-slate-700">
            <h2 class="accordion-header mb-0" :id="'title-'+ project.id">
                <button class="
                    accordion-button
                    relative
                    flex
                    items-center
                    w-full
                    py-4
                    px-5
                    text-base text-gray-800 text-left
                    bg-white
                    border-0
                    rounded-none
                    transition
                    focus:outline-none
                  " type="button" data-bs-toggle="collapse" :data-bs-target="'#data-' + project.id" aria-expanded="true" :aria-controls="'data-' + project.id">
                    {{project.title}}
                </button>
            </h2>
            <div :id="'data-' + project.id" class="accordion-collapse collapse show" :aria-labelledby="'title-' + project.id"
                 data-bs-parent="#projectsList">
                <div class="accordion-body py-4 px-5 dark:bg-slate-700">
                    <FormUpdateProject :project="project" :projectStatuses="projectStatuses" />
                </div>
            </div>
        </div>
    </div>
</template>
