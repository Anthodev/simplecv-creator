<script setup>
import 'tw-elements';
import FormUpdateExperience from '@/Components/Forms/FormUpdateExperience.vue';

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
    <div class="accordion" id="experiencesList">
        <div v-for="experience in experiences" class="accordion-item bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" :id="'title-'+ experience.id">
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
                  " type="button" data-bs-toggle="collapse" :data-bs-target="'#data-' + experience.id" aria-expanded="true" :aria-controls="'data-' + experience.id">
                    {{experience.title}}
                </button>
            </h2>
            <div :id="'data-' + experience.id" class="accordion-collapse collapse show" :aria-labelledby="'title-' + experience.id"
                 data-bs-parent="#experiencesList">
                <div class="accordion-body py-4 px-5">
                    <FormUpdateExperience :experience="experience" :experienceTypes="experienceTypes" />
                </div>
            </div>
        </div>
    </div>
</template>
