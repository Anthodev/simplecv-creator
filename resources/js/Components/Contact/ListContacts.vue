<script setup>
import 'tw-elements';
import FormUpdateContact from '@/Components/Contact/Forms/FormUpdateContact.vue';

defineProps({
    contacts: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <Head title="Contacts" />

    <div class="accordion" id="contactsList">
        <div v-for="contact in contacts" class="accordion-item bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" :id="'title-'+ contact.id">
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
                  " type="button" data-bs-toggle="collapse" :data-bs-target="'#data-' + contact.id" aria-expanded="true" :aria-controls="'data-' + contact.id">
                    {{contact.name}}
                </button>
            </h2>
            <div :id="'data-' + contact.id" class="accordion-collapse collapse show" :aria-labelledby="'title-' + contact.id"
                 data-bs-parent="#contactsList">
                <div class="accordion-body py-4 px-5">
                    <FormUpdateContact :contact="contact" />
                </div>
            </div>
        </div>
    </div>
</template>
