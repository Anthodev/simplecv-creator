<script setup lang="ts">
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { usePage } from '@inertiajs/inertia-vue3';
import {onMounted, ref} from "vue";

defineProps(['modelValue',]);

const input = ref(null);
const emit = defineEmits(['update:modelValue']);

onMounted(() => {
    const e = new Editor({
        el: input.value,
        initialValue: usePage().props.value.auth.user.description,
        options: {
            usageStatistics: false,
        },
        height: '500px',
        initialEditType: 'markdown',
        previewStyle: 'vertical',
        events: {
            change: () => emit('update:modelValue', e.getMarkdown()),
        },
    });
});
</script>

<template>
    <div class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" ref="input" />
</template>
