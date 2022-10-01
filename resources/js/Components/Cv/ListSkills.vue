<script setup>
import 'tw-elements';
import flow from 'lodash/flow';
import SkillSection from "@/Components/Cv/SkillSection.vue";

let props = defineProps({
    skills: Object,
    skillTypes: Object,
})

const filterObject = (obj, callback) => {
    return Object.fromEntries(Object.entries(obj).
    filter(([key, val]) => callback(val, key)));
}

const getSkillsByType = (type) => {
    let res;

    let skillsObjects = JSON.stringify(props.skills);
    let skills = JSON.parse(skillsObjects);

    res = flow([
        Object.entries,
        arr => arr.filter(([key, val]) => {
            return val.skill_type_id === props.skillTypes[type];
        }),
        Object.fromEntries,
    ])(skills);

    return res;
    // return JSON.stringify(Object.values(props.skills)).filter(skill => skill.skill_type_id === props.skillTypes[type]);
}
</script>

<template>
    <div>
        <div v-if="Object.keys(getSkillsByType('programming_language')).length > 0" class="px-2">
            <SkillSection :title="'Compétences en programmation'" :skills="getSkillsByType('programming_language')" />
        </div>

        <div v-if="Object.keys(getSkillsByType('hard')).length > 0" :key="getSkillsByType('hard')" class="mt-8 px-2">
            <SkillSection :title="'Compétences outil & méthodo'" :skills="getSkillsByType('hard')" />
        </div>

        <div v-if="Object.keys(getSkillsByType('soft')).length > 0" class="mt-8 px-2">
            <SkillSection :title="'Compétences comportementales'" :skills="getSkillsByType('soft')" />
        </div>

        <div v-if="Object.keys(getSkillsByType('language')).length > 0" class="mt-8 px-2">
            <SkillSection :title="'Langues'" :skills="getSkillsByType('language')" />
        </div>

        <div v-if="Object.keys(getSkillsByType('interest')).length > 0" class="mt-8 px-2">
            <SkillSection :title="'Centres d\'intérêt'" :skills="getSkillsByType('interest')" />
        </div>

        <div v-if="Object.keys(getSkillsByType('extra')).length > 0" class="mt-8 px-2">
            <SkillSection :title="'Autres'" :skills="getSkillsByType('extra')" />
        </div>
    </div>
</template>
