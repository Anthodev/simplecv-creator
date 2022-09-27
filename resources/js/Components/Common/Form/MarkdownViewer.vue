<script setup>
import 'tw-elements';
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import {onMounted} from "vue";

const props = defineProps({
    id: String,
    data: String,
})

onMounted(() => {
    const viewer = new Viewer({
        el: document.getElementById(props.id),
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
        height: 'auto',
        language: 'fr-FR',
        initialValue: props.data ?? '',
    });
});
</script>

<template>
    <div :id="id" class="toastui-editor-contents mt-4 p-4 font-sans text-white dark:text-white"/>
</template>

<style>
    .toastui-editor-contents p {
        font-family: 'Nunito', 'ui-sans-serif', monospace, 'Segoe UI';
        color: white;
        font-size: 1.0em;
    }

    .toastui-editor-contents iframe {
        margin-left: auto;
        margin-right: auto;
    }
</style>
