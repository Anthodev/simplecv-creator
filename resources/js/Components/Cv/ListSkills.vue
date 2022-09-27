<script setup>
import 'tw-elements';
import SkillSection from "@/Components/Cv/SkillSection.vue";

let props = defineProps({
    skills: Object,
    skillTypes: Object,
})

const getSkillsByType = (type) => {
    let res = {};

    Object.keys(props.skills).forEach((key) => {
        if (props.skills[key].skill_type_id === props.skillTypes[type]) {
            res[key] = props.skills[key];
        }
    });

    return res;
}
</script>

<template>
    <div>
        <div v-show="getSkillsByType('programming_language')" class="px-2">
            <SkillSection :title="'Compétences en programmation'" :skills="getSkillsByType('programming_language')" />
        </div>

        <div v-if="getSkillsByType('hard')" class="mt-8 px-2">
            <SkillSection :title="'Compétences outil & méthodo'" :skills="getSkillsByType('hard')" />
        </div>

        <div v-if="getSkillsByType('soft')" class="mt-8 px-2">
            <SkillSection :title="'Compétences comportementales'" :skills="getSkillsByType('soft')" />
        </div>

        <div v-if="getSkillsByType('language')" class="mt-8 px-2">
            <SkillSection :title="'Langues'" :skills="getSkillsByType('language')" />
        </div>

        <div v-if="getSkillsByType('interest')" class="mt-8 px-2">
            <SkillSection :title="'Centres d\'intérêt'" :skills="getSkillsByType('interest')" />
        </div>

        <div v-if="getSkillsByType('extra')" class="mt-8 px-2">
            <SkillSection :title="'Autres'" :skills="getSkillsByType('extra')" />
        </div>
    </div>
</template>
