<script setup>
import 'tw-elements';

import TextInput from '@/Components/Common/Form/TextInput.vue';
import MarkdownEditor from '@/Components/Common/Form/MarkdownEditor.vue';
import InputLabel from '@/Components/Common/Form/InputLabel.vue';
import InputError from '@/Components/Common/Form/InputError.vue';
import PrimaryButton from '@/Components/Common/Form/PrimaryButton.vue';
import { useForm } from '@inertiajs/inertia-vue3';

defineProps({
    projectStatuses: {
        type: Array,
        required: true,
    },
});

const form = useForm({
    title: '',
    description: '',
    url: '',
    repo_url: '',
    image: '',
    status: 0,
    display_order: 0,
    project_type_id: 1,
});

const submit = async () => {
    let formData = new FormData();
    formData.append('title', form.title);
    formData.append('description', form.description);
    formData.append('url', form.url);
    formData.append('repo_url', form.repo_url);
    formData.append('image', form.image);
    formData.append('status', form.status);
    formData.append('display_order', form.display_order);

    if (form.image) {
        let file = form.image[0];
        formData.append('file', file);
    }

    axios.post(route('projects.store'), formData)
        .then((response) => {
            if (response.status === 200) {
                flasher.success('Le projet "' + form.title + '" a bien été ajouté');

                location.reload();
            }
        })
        .catch(function(error){
            flasher.error(
                {
                    title: 'Erreur',
                    message: 'Une erreur est survenue lors de l\'ajout du projet.',
                });
        });
};
</script>

<template>
    <form @submit.prevent="submit">
        <div class="flex flex-shrink-0 items-center justify-between py-2 border-b border-gray-200 dark:border-gray-800 rounded-t-md">
            <h5 class="text-xl font-medium leading-normal text-gray-800 dark:text-gray-200">
                Ajouter un projet
            </h5>
        </div>

        <div class="flex flex-row pt-3">
            <div class="basis-1/2 mr-4">
                <InputLabel for="title" value="Titre" />
                <TextInput id="title" type="text" class="mt-1 block w-full" v-model="form.title" required />
                <InputError :errors="form.errors.title" />
            </div>
            <div class="basis-1/2">
                <InputLabel for="repo_url" value="Lien vers le repo du projet" />
                <TextInput id="repo_url" type="text" class="mt-1 block w-full" v-model="form.repo_url" />
                <InputError :errors="form.errors.repo_url" />
            </div>
        </div>
        <div class="flex flex-row pt-3">
            <div class="basis-1/2 mr-4">
                <InputLabel for="url" value="Lien vers la page du projet" />
                <TextInput id="url" type="text" class="mt-1 block w-full" v-model="form.url" />
                <InputError :errors="form.errors.url" />
            </div>
            <div class="basis-1/2">
                <InputLabel for="image" value="Ajouter une image illustrant le projet" />
                <TextInput id="image" type="file" @input="form.image = $event.target.files[0]" class="mt-1 block w-full" v-model="form.image" />
                <InputError :errors="form.errors.image" />
            </div>
        </div>
        <div class="flex flex-row pt-3">
            <div class="basis-1/2 mr-4">
                <InputLabel for="status" value="Status" />
                <select id="type" class="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" v-model="form.status" required ref="input">
                    <option v-for="(projectStatus, index) in projectStatuses" :key="index" :value="index">{{ projectStatus }}</option>
                </select>
                <InputError :errors="form.errors.status" />
            </div>
        </div>
        <div class="pt-3">
            <InputLabel for="description" value="Description" />
            <MarkdownEditor id="description" class="mt-1 block w-full" v-model="form.description" />
            <InputError :errors="form.errors.description" />
        </div>
        <div class="flex flex-row pt-3">
            <div class="basis-1/2 mr-4">
                <InputLabel for="display_order" value="Ordre d'affichage" />
                <TextInput id="display_order" type="number" min="0" class="mt-1 block w-full" v-model="form.display_order" />
                <InputError :errors="form.errors.display_order" />
            </div>
        </div>

        <div class="flex flex-shrink-0 flex-wrap items-center justify-end pt-4 rounded-b-md">
            <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Envoyer
            </PrimaryButton>
        </div>
    </form>
</template>
