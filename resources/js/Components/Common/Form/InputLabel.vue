<script setup>
defineProps(['value']);
</script>

<template>
    <label class="block font-medium text-sm dark:bg-slate-700 text-gray-700 dark:text-gray-100">
        <span v-if="value">{{ value }}</span>
        <span v-else><slot /></span>
    </label>
</template>
