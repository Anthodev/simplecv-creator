<script setup>
import 'tw-elements';

import TextInput from '@/Components/TextInput.vue';
import TextAreaInput from '@/Components/TextAreaInput.vue';
import InputLabel from '@/Components/InputLabel.vue';
import InputError from '@/Components/InputError.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import { useForm } from '@inertiajs/inertia-vue3';

const props = defineProps({
    experience: {
        type: Object,
        required: true,
    },
    experienceTypes: {
        type: Object,
        required: true,
    },
});

const form = useForm(props.experience);

const submit = () => {
    form.patch(route('experiences.update', this.experience.id), {
        onFinish: () => {
            console.log(form);
            form.experience = props.experience;
        },
    });
};
</script>

<template>
    <form @submit.prevent="form.patch(route('experiences.update', this.experience.id))">
        <div class="flex flex-row pt-3">
            <div class="basis-1/2 mr-4">
                <InputLabel for="title" value="Titre" />
                <TextInput id="title" type="text" class="mt-1 block w-full" v-model="form.title" required />
                <InputError :errors="form.errors.title" />
            </div>
            <div class="basis-1/2">
                <InputLabel for="company" value="Établissement" />
                <TextInput id="company" type="text" class="mt-1 block w-full" v-model="form.company" required />
                <InputError :errors="form.errors.company" />
            </div>
        </div>
        <div class="flex flex-row pt-3">
            <div class="basis-1/2 mr-4">
                <InputLabel for="location" value="Lieu" />
                <TextInput id="location" type="text" class="mt-1 block w-full" v-model="form.location" required />
                <InputError :errors="form.errors.location" />
            </div>
            <div class="basis-1/2">
                <InputLabel for="company_url" value="Lien du site de l'établissement" />
                <TextInput id="company_url" type="text" class="mt-1 block w-full" v-model="form.company_url" required />
                <InputError :errors="form.errors.company_url" />
            </div>
        </div>
        <div class="flex flex-row pt-3">
            <div class="basis-1/2 mr-4">
                <InputLabel for="start_date" value="Date de début" />
                <TextInput id="start_date" type="date" class="mt-1 block w-full" v-model="form.start_date" required />
                <InputError :errors="form.errors.start_date" />
            </div>
            <div class="basis-1/2">
                <InputLabel for="end_date" value="Date de fin" />
                <TextInput id="end_date" type="date" class="mt-1 block w-full" v-model="form.end_date" />
                <InputError :errors="form.errors.end_date" />
            </div>
        </div>
        <div class="pt-3">
            <InputLabel for="description" value="Description" />
            <TextAreaInput id="description" type="textarea" rows="10" class="mt-1 block w-full" v-model="form.description" required />
            <InputError :errors="form.errors.description" />
        </div>
        <div class="flex flex-row pt-3">
            <div class="basis-1/2 mr-4">
                <InputLabel for="type" value="Type d'expérience" />
                <select id="type" class="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" v-model="form.experience_type_id" required ref="input">
                    <option v-for="(experienceType, index) in experienceTypes" :key="index" :value="experienceType.id">{{ experienceType.label }}</option>
                </select>
                <InputError :errors="form.errors.experience_type_id" />
            </div>
            <div class="basis-1/2">
                <InputLabel for="display_order" value="Ordre d'affichage" />
                <TextInput id="display_order" type="number" min="0" class="mt-1 block w-full" v-model="form.display_order" />
                <InputError :errors="form.errors.display_order" />
            </div>
        </div>

        <div class="flex flex-wrap items-center pt-4 rounded-b-md">
            <div class="justify-start">
                <PrimaryButton type="button" @click="form.delete(route('experiences.delete', this.experience.id))" class="bg-red-700 hover:bg-red-900" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
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