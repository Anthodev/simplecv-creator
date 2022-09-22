<script setup>
import 'tw-elements';
import FormUpdateSkill from '@/Components/Skill/Forms/FormUpdateSkill.vue';

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
    <div class="accordion" id="skillsList">
        <div v-for="skill in skills" class="accordion-item bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" :id="'title-'+ skill.id">
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
                  " type="button" data-bs-toggle="collapse" :data-bs-target="'#data-' + skill.id" aria-expanded="true" :aria-controls="'data-' + skill.id">
                    {{skill.name}}
                </button>
            </h2>
            <div :id="'data-' + skill.id" class="accordion-collapse collapse show" :aria-labelledby="'title-' + skill.id"
                 data-bs-parent="#skillsList">
                <div class="accordion-body py-4 px-5">
                    <FormUpdateSkill :skill="skill" :skillTypes="skillTypes" />
                </div>
            </div>
        </div>
    </div>
</template>
