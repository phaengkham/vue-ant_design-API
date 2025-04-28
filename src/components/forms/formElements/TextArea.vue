<template>
    <a-form layout="vertical">
        <!-- Normal Textarea -->
        <a-form-item label="Description">
            <a-textarea v-model:value="normalDescription" placeholder="Enter a description..." :rows="6" />
        </a-form-item>

        <!-- Disabled Textarea -->
        <a-form-item label="Description">
            <a-textarea v-model:value="disabledDescription" placeholder="Enter a description..." :rows="6" disabled />
        </a-form-item>

        <!-- Error State Textarea -->
        <a-form-item label="Description" :validate-status="'error'" :help="'Please enter a message in the textarea.'">
            <a-textarea v-model:value="errorDescription" placeholder="Enter a description..." :rows="6" />
        </a-form-item>
    </a-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const normalDescription = ref('')
const disabledDescription = ref('This textarea is disabled')
const errorDescription = ref('')
</script>