<script setup lang="ts">
import { ref } from 'vue';
import CustomModal from '@/components/component/CustomModal.component.vue';
import { Button as AButton } from 'ant-design-vue';

interface FormData {
  name?: string;
  age?: number;
  address?: string;
}

const modalVisible = ref(false); 

const formData = ref<FormData>({
  name: '',
  age: undefined,
  address: ''
});


const tableData = ref([
  { key: "1", name: "John Doe", age: 28, address: "New York" },
  { key: "2", name: "Jane Smith", age: 32, address: "Los Angeles" },
  { key: "3", name: "Sam Green", age: 24, address: "Chicago" }
]);


const showModal = () => {
  modalVisible.value = true;
};


const handleModalSubmit = (values: FormData) => {
  tableData.value.push({
    key: `${tableData.value.length + 1}`,
    name: values.name || '',
    age: values.age || 0, 
    address: values.address || ''
  });
  modalVisible.value = false; 
};


const handleModalClose = () => {
  modalVisible.value = false;
};
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl mb-4">Ant Design Membership</h1>
    <a-button type="primary" @click="showModal">Add new membership</a-button>
    <CustomModal :visible="modalVisible" modal-title="Create New Membership" :initial-data="formData"
      @submit="handleModalSubmit" @close="handleModalClose" />
    <a-table :dataSource="tableData" :columns="[
      { title: 'Name', dataIndex: 'name', key: 'name' },
      { title: 'Age', dataIndex: 'age', key: 'age' },
      { title: 'Address', dataIndex: 'address', key: 'address' }
    ]" class="mt-4" />
  </div>
</template>

<style scoped></style>
