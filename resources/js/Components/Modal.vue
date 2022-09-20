<script setup>
import { Link } from '@inertiajs/inertia-vue3';

defineProps({
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: 'submit',
    },
    action: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="addExperienceModal" tabindex="-1" aria-labelledby="addExperienceModalTitle" aria-modal="true" role="dialog">
        <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
            <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white dark:bg-gray-600 bg-clip-padding rounded-md outline-none text-current">
                <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 rounded-t-md">
                    <h5 class="text-xl font-medium leading-normal text-gray-800 dark:text-gray-200">
                        {{ title }}
                    </h5>
                    <button type="button"
                            class="btn-close box-content w-4 h-4 p-1 text-black dark:text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black dark:hover:text-white hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body relative p-4">
                    <Link>
                        <slot />
                    </Link>
                </div>
                <div
                    class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 dark:border-gray-800 rounded-b-md">
                    <button type="button"
                            class="inline-block px-6 py-2.5 bg-purple-600 dark:bg-red-400 text-white dark:text-gray-100 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 dark:hover:bg-red-700 hover:shadow-lg focus:bg-purple-700 dark:focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 dark:active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                            data-bs-dismiss="modal">
                        Close
                    </button>
                    <button type="button"
                            class="inline-block px-6 py-2.5 bg-blue-600 dark:bg-green-400 text-white dark:text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 dark:hover:bg-green-700 hover:shadow-lg focus:bg-green-700 dark:focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 dark:active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                        Envoyer
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
