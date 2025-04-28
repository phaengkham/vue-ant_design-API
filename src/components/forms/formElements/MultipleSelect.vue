<template>
    <a-select v-model:value="selectedItems" mode="multiple" allowClear style="width: 100%" placeholder="Select items..."
        :options="options" @change="handleChange">
        <template #tagRender="{ label, onClose }">
            <a-tag color="blue" closable @close="onClose" style="margin-right: 4px">
                {{ label }}
            </a-tag>
        </template>
    </a-select>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
    options: {
        type: Array as () => { label: string; value: string }[],
        required: true,
    },
    modelValue: {
        type: Array as () => string[],
        default: () => [],
    },
})

const emit = defineEmits(['update:modelValue'])

const selectedItems = ref<string[]>(props.modelValue)

const handleChange = (val: string[]) => {
    emit('update:modelValue', val)
}

watch(() => props.modelValue, (newVal) => {
    selectedItems.value = newVal
})
</script>