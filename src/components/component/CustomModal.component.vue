<template>
    <a-modal :title="modalTitle" :visible="visible" @ok="handleSubmit" @cancel="handleCancel"
        :confirm-loading="loading">
        <a-form @submit.prevent="handleSubmit">
            <a-form-item label="Name">
                <a-input v-model:value="formData.name" placeholder="Enter name" />
            </a-form-item>
            <a-form-item label="Age">
                <a-input type="number" v-model:value="formData.age" placeholder="Enter age" />
            </a-form-item>
            <a-form-item label="Address">
                <a-textarea v-model:value="formData.address" placeholder="Enter address" :rows="4" />
            </a-form-item>
        </a-form>
    </a-modal>
</template>

<script setup lang="ts">
import { ref, watch, type PropType } from 'vue';
import { message } from 'ant-design-vue';

interface FormData {
    name?: string;
    age?: number;
    address?: string;
}

const props = defineProps({
    visible: {
        type: Boolean,
        default: false,
    },
    modalTitle: {
        type: String,
        default: 'Add Item',
    },
    initialData: {
        type: Object as PropType<FormData>,
        default: () => ({
            name: '',
            age: undefined,
            address: ''
        }),
    }
});

const emit = defineEmits<{
    (e: 'submit', value: FormData): void;
    (e: 'close'): void;
}>();

const loading = ref(false);
const formData = ref<FormData>({ ...props.initialData });

watch(() => props.initialData, (newVal) => {
    formData.value = { ...newVal };
}, { deep: true });

const handleCancel = () => {
    formData.value = { ...props.initialData };
    emit('close');
};

const handleSubmit = () => {
    if (!formData.value.name || !formData.value.age || !formData.value.address) {
        message.error('Please fill in all fields!');
        return;
    }
    loading.value = true;

    setTimeout(() => {
        emit('submit', formData.value);  // Emit data to the parent
        loading.value = false;
        handleCancel();  // Close the modal after submission
    }, 1000);
};
</script>

<style scoped></style>
