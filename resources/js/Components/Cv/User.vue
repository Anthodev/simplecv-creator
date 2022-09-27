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
        <div class="mt-4 py-2 mx-3 text-center ring">
            <div v-if="user.display_name">
                {{ user.display_name }}
            </div>
            <div v-if="user.title" class="pt-4 uppercase">
                <span class="text-amber-300">{{ user.title }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .photo {
        max-width: 10em;
    }
</style>
