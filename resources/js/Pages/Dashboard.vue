<script setup>
import 'tw-elements';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, useForm, usePage } from '@inertiajs/inertia-vue3';

import TextInput from '@/Components/Common/Form/TextInput.vue';
import InputLabel from '@/Components/Common/Form/InputLabel.vue';
import InputError from '@/Components/Common/Form/InputError.vue';
import PrimaryButton from '@/Components/Common/Form/PrimaryButton.vue';
import MarkdownEditor from '@/Components/Common/Form/MarkdownEditor.vue';

const user = usePage().props.value.auth.user;

const form = useForm({
    id: user.id,
    display_name: usePage().props.value.auth.user.display_name,
    description: usePage().props.value.auth.user.description,
    title: usePage().props.value.auth.user.title,
    picture_path: '',
});

const submit = async () => {
    let formData = new FormData();
    formData.append('id', form.id);
    formData.append('display_name', form.display_name);
    formData.append('description', form.description);
    formData.append('title', form.title);
    formData.append('picture_path', form.picture_path);

    if (form.picture_path) {
        let file = form.picture_path[0];
        formData.append('file', file);
    }

    axios.post(route('users.update', usePage().props.value.auth.user.id), formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
        .then((response) => {
            if (response.status === 200) {
                flasher.success(
                    {
                        title: 'Profil modifié',
                        message: 'Votre profil a bien été modifié.',
                    });
            }
        })
        .catch(() => {
            flasher.error(
                {
                    title: 'Erreur lors de la modification de votre profil',
                    message: 'Une erreur est survenue lors de la modification de votre profil.',
                });
        });
};
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="pt-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        Tu es bien authentifié et sur le dashboard !
                    </div>
                </div>
            </div>
        </div>

        <div class="py-4">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="px-6 pb-4 bg-white border-b border-gray-200">
                        <form @submit.prevent="submit">
                            <div class="flex flex-row pt-3">
                                <div class="basis-1/2 mr-4">
                                    <InputLabel for="display_name" value="Nom affiché sur le CV" />
                                    <TextInput id="display_name" type="text" class="mt-1 block w-full" v-model="form.display_name" required />
                                    <InputError :errors="form.errors.display_name" />
                                </div>
                                <div class="basis-1/2">
                                    <InputLabel for="title" value="Titre du CV" />
                                    <TextInput id="title" type="text" class="mt-1 block w-full" v-model="form.title" required />
                                    <InputError :errors="form.errors.title" />
                                </div>
                            </div>
                            <div class="flex flex-row pt-3">
                                <div class="basis-1/2">
                                    <InputLabel for="picture_path" value="Photo du CV" />
                                    <TextInput id="picture_path" type="file" @input="form.picture_path = $event.target.files[0]" class="mt-1 block w-full" v-model="form.picture_path" />
                                    <InputError :errors="form.errors.picture_path" />
                                </div>
                            </div>
                            <div class="pt-3">
                                <InputLabel for="description" value="Description" />
                                <MarkdownEditor id="description" class="mt-1 block w-full" v-model="form.description" />
                                <InputError :errors="form.errors.description" />
                            </div>

                            <div class="flex flex-shrink-0 flex-wrap items-center justify-end pt-4 rounded-b-md">
                                <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                    Envoyer
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
