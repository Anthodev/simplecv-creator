<script setup>
import 'tw-elements';

import TextInput from '@/Components/Common/Form/TextInput.vue';
import InputLabel from '@/Components/Common/Form/InputLabel.vue';
import InputError from '@/Components/Common/Form/InputError.vue';
import PrimaryButton from '@/Components/Common/Form/PrimaryButton.vue';
import { useForm } from '@inertiajs/inertia-vue3';

const form = useForm({
    name: '',
    icon: '',
    url: '',
    display_order: 0,
});

const submit = () => {
    form.post(route('contacts.store'), {
        onFinish: () => form.reset('name', 'icon', 'url', 'display_order'),
    });
};
</script>

<template>
    <form @submit.prevent="submit">
        <div class="flex flex-shrink-0 items-center justify-between py-2 border-b border-gray-200 dark:border-gray-800 rounded-t-md">
            <h5 class="text-xl font-medium leading-normal text-gray-800 dark:text-gray-200">
                Ajouter un contact
            </h5>
        </div>

        <div class="flex flex-row pt-3">
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
            <div class="basis-1/2">
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
