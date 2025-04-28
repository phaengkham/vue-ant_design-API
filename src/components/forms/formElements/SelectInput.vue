<template>
    <a-space direction="vertical" size="large" style="width: 100%">
        <!-- Single Select Input -->
        <div>
            <label class="ant-form-item-label">
                <span>Select Input</span>
            </label>
            <a-select v-model:value="singleSelect" placeholder="Select Option" style="width: 100%"
                :options="singleOptions" allowClear />
        </div>

        <!-- Multiple Select Input -->
        <div>
           <MultipleSelect v-model:value="selectedItems" :options="optionss" />
        </div>
    </a-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MultipleSelect from './MultipleSelect.vue'

const singleSelect = ref<string | undefined>()

const selectedItems = ref<string[]>([])

const singleOptions = [
    { value: 'marketing', label: 'Marketing' },
    { value: 'accounting', label: 'Accounting' },
    { value: 'development', label: 'Development' },
    { value: 'design', label: 'Design' },
    { value: 'hr', label: 'HR' },
    { value: 'sales', label: 'Sales' },
    { value: 'support', label: 'Support' },
    { value: 'it', label: 'IT' },
    { value: 'finance', label: 'Finance' },
    { value: 'legal', label: 'Legal' },
]

const optionss = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
    { value: 'date', label: 'Date' },
    { value: 'elderberry', label: 'Elderberry' },
    { value: 'graphs', label: 'Graphs' },
]
</script>