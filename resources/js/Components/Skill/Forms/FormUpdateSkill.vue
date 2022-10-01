<script setup>
import 'tw-elements';

import TextInput from '@/Components/Common/Form/TextInput.vue';
import InputLabel from '@/Components/Common/Form/InputLabel.vue';
import InputError from '@/Components/Common/Form/InputError.vue';
import PrimaryButton from '@/Components/Common/Form/PrimaryButton.vue';
import { useForm } from '@inertiajs/inertia-vue3';
import { defineProps } from 'vue';

const props = defineProps({
    skill: {
        type: Object,
        required: true,
    },
    skillTypes: {
        type: Object,
        required: true,
    },
});

const form = useForm(
    {
        id: props.skill.id,
        name: props.skill.name,
        icon: props.skill.icon,
        url: props.skill.url,
        skill_type_id: props.skill.skill_type_id,
        display_order: props.skill.display_order,
    }
);

const deleteSkill = async () => {
    axios.delete(route('skills.delete', props.skill.id))
        .then((response) => {
            if (response.status === 200) {
                flasher.success('Compétence supprimée avec succès');
            }
        });
};

const submit = async () => {
    axios.patch(route('skills.update', props.skill.id), form)
        .then((response) => {
            if (response.status === 200) {
                flasher.success(
                    {
                        title: 'Compétence modifiée',
                        message: 'La compétence "' + form.name + '" a bien été modifiée.',
                    });
            }
        }).catch(() =>{
            flasher.error(
                {
                    title: 'Erreur lors de la modification de la compétence',
                    message: 'Une erreur est survenue lors de la modification de la compétence "' + form.name + '".',
                });
    });
};
</script>

<template>
    <form @submit.prevent="submit" class="dark:bg-slate-700">
        <div class="flex flex-row pt-3 dark:bg-slate-700">
            <div class="basis-1/6 mr-4">
                <InputLabel for="icon" value="Icône (FontAwesome)" />
                <TextInput id="icon" type="text" class="mt-1 block w-full" v-model="form.icon" required />
                <InputError :errors="form.errors.icon" />
            </div>
            <div class="basis-3/6 mr-4">
                <InputLabel for="name" value="Titre" />
                <TextInput id="name" type="text" class="mt-1 block w-full" v-model="form.name" required />
                <InputError :errors="form.errors.name" />
            </div>
            <div class="basis-2/6">
                <InputLabel for="url" value="Url concernant la compétence" />
                <TextInput id="url" type="text" class="mt-1 block w-full" v-model="form.url" />
                <InputError :errors="form.errors.url" />
            </div>
        </div>
        <div class="flex flex-row pt-3">
            <div class="basis-1/2 mr-4">
                <InputLabel for="type" value="Type de compétence" />
                <select id="type" class="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" v-model="form.skill_type_id" required ref="input">
                    <option v-for="(skillType, index) in skillTypes" :key="index" :value="skillType.id">{{ skillType.label }}</option>
                </select>
                <InputError :errors="form.errors.skill_type_id" />
            </div>
            <div class="basis-1/2">
                <InputLabel for="display_order" value="Ordre d'affichage" />
                <TextInput id="display_order" type="number" min="0" class="mt-1 block w-full" v-model="form.display_order" />
                <InputError :errors="form.errors.display_order" />
            </div>
        </div>

        <div class="flex flex-wrap items-center pt-4 rounded-b-md">
            <div class="justify-start">
                <PrimaryButton type="button" @click="deleteSkill" class="bg-red-700 hover:bg-red-900" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Supprimer
                </PrimaryButton>
            </div>
            <div class="flex flex-grow justify-end">
                <PrimaryButton class="ml-4 bg-blue-700 hover:bg-blue-900" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Envoyer
                </PrimaryButton>
            </div>
        </div>
    </form>
</template>
