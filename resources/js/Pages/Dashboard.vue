<script setup>
import 'tw-elements';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, useForm, usePage } from '@inertiajs/inertia-vue3';

import TextInput from '@/Components/TextInput.vue';
import TextAreaInput from '@/Components/TextAreaInput.vue';
import InputLabel from '@/Components/InputLabel.vue';
import InputError from '@/Components/InputError.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';

const form = useForm({
    id: usePage().props.value.auth.user.id,
    display_name: '',
    description: '',
});

const submit = () => {
    form.patch(route('users.update', usePage().props.value.auth.user.id), {
        onFinish: () => form.reset('display_name', 'description'),
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
                            <div class="pt-3">
                                <InputLabel for="display_name" value="Nom affiché sur le CV" />
                                <TextInput id="display_name" type="text" class="mt-1 block w-full" v-model="form.display_name" required />
                                <InputError :errors="form.errors.display_name" />
                            </div>
                            <div class="pt-3">
                                <InputLabel for="description" value="Description" />
                                <TextAreaInput id="description" rows="10" type="text" class="mt-1 block w-full" v-model="form.description" required />
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
