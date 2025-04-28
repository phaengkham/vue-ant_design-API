<template>
    <a-form layout="vertical">
        <a-form-item label="Checkbox" class="space-y-6">
            <a-checkbox v-model:checked="checkboxOne">default</a-checkbox>
            <a-checkbox v-model:checked="checkboxTwo">Checked</a-checkbox>
            <a-checkbox v-model:checked="checkboxThree" disabled>Disable</a-checkbox>
        </a-form-item>
    </a-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checkboxOne = ref(false)
const checkboxTwo = ref(true)
const checkboxThree = ref(false)
</script>