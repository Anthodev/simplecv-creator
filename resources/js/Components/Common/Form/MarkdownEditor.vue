<script setup lang="ts">
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import {onMounted, ref} from "vue";

let props = defineProps(['modelValue']);

const input = ref(null);
const emit = defineEmits(['update:modelValue']);

onMounted(() => {
    const e = new Editor({
        el: input.value,
        customHTMLRenderer: {
            htmlBlock: {
                iframe(node) {
                    return [
                        { type: 'openTag', tagName: 'iframe', outerNewLine: true, attributes: node.attrs },
                        { type: 'html', content: node.childrenHTML },
                        { type: 'closeTag', tagName: 'iframe', outerNewLine: true },
                    ];
                },
            },
            htmlInline: {
                big(node, { entering }) {
                    return entering
                        ? { type: 'openTag', tagName: 'big', attributes: node.attrs }
                        : { type: 'closeTag', tagName: 'big' };
                },
            },
        },
        initialValue: props.modelValue ?? '',
        options: {
            usageStatistics: false,
        },
        height: '500px',
        initialEditType: 'markdown',
        previewStyle: 'vertical',
        theme: 'dark',
        events: {
            change: () => emit('update:modelValue', e.getMarkdown()),
        },
    });
});
</script>

<template>
    <div class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" ref="input" />
</template>
