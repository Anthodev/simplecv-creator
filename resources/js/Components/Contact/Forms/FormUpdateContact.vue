<script setup>
import 'tw-elements';

import TextInput from '@/Components/Common/Form/TextInput.vue';
import TextAreaInput from '@/Components/Common/Form/TextAreaInput.vue';
import InputLabel from '@/Components/Common/Form/InputLabel.vue';
import InputError from '@/Components/Common/Form/InputError.vue';
import PrimaryButton from '@/Components/Common/Form/PrimaryButton.vue';
import { useForm } from '@inertiajs/inertia-vue3';

const props = defineProps({
    contact: {
        type: Object,
        required: true,
    },
});

const form = useForm(props.contact);

const deleteContact = async () => {
    axios.delete(route('contacts.delete', props.contact.id))
        .then((response) => {
            if (response.status === 200) {
                flasher.success('Contact supprimé avec succès');
            }
        });
};

const submit = async () => {
    axios.patch(route('contacts.update', props.contact.id), form)
        .then((response) => {
            if (response.status === 200) {
                flasher.success(
                    {
                        title: 'Contact modifié',
                        message: 'Le contact "' + form.name + '" a bien été modifié.',
                    });
            }
        })
        .catch(function(error){
            flasher.error(
                {
                    title: 'Erreur lors de la modification du contact',
                    message: 'Une erreur est survenue lors de la modification du contact "' + form.name + '".',
                });
        });
};
</script>

<template>
    <form @submit.prevent="submit">
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

        <div class="flex flex-wrap items-center pt-4 rounded-b-md">
            <div class="justify-start">
                <PrimaryButton type="button" @click="deleteContact" class="bg-red-700 hover:bg-red-900" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
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
