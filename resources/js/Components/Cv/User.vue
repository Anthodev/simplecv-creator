<script setup>
import 'tw-elements';

defineProps({
    user: Object,
})
</script>

<template>
    <div class="text-center font-mono font-medium leading-tight text-xl pt-4 text-white">
        <div v-if="user.picture_path" class="text-center photo p-1 bg-white border rounded-lg max-w-sm mx-auto">
            <img :src="'../storage/' + user.picture_path" :alt="'photo de ' + user.display_name">
        </div>
        <div class="pt-4">
            {{ user.display_name }}
        </div>
    </div>
</template>

<style scoped>
    .photo {
        max-width: 10em;
    }
</style>
