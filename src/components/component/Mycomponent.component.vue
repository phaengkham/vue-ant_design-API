<template>
    <div class="p-4 border rounded-md shadow-md">
        <p>Message from parent:{{ message }}</p>
        <a-button type="primary" @click="sendMessage" class="custom-button">Click me</a-button>
        <a-input v-model:value="inputValue" class="custom-input" placeholder="Type Something..."></a-input>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    message: string;
    modelValue: string;
}>();

const emit = defineEmits<{
    (e: 'clicked', message: string): void;
    (e: 'update:modelValue', value: string): void;
}>();

const inputValue = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
})

const sendMessage = () => {
    emit('clicked', 'Hello Phaengkham');
}
</script>

<style scoped>
.custom-button {
    margin-bottom: 16 px;
    width: 100%;
}

.custom-input {
    margin-top: 8px;
    width: 100%;
}
</style>