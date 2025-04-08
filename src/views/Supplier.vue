<template>
    <div>
        <a-button type="primary" @click="create">Create Supplier</a-button>
        <a-divider />
        <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="1" tab="General Supplier">
                <a-table :columns="columns" :data-source="data.suppliers" rowKey="id">
                    <template #bodyCell="{ record, column, index }">
                        <template v-if="column.key === 'id'">
                            <span>{{ index + 1 }}</span>
                        </template>
                        <template v-else-if="column.key === 'action'">
                            <span>
                                <a @click="update(record.id)">Edit</a>
                                <a-divider type="vertical" />
                                <a-popconfirm title="Are you sure you want to delete this supplier?" ok-text="Yes"
                                    cancel-text="No" @confirm="deleteSupplier(record.id)">
                                    <a>Delete</a>
                                </a-popconfirm>
                            </span>
                        </template>
                    </template>
                </a-table>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';
import { useSupplierStore } from '@/stores/supplier.store';

const { fetchAll, data, deleteSupplier } = useSupplierStore();

onMounted(async () => {
    await fetchAll();
})

const router = useRouter();
const create = () => {
    router.push({ name: 'create.supplier' });
}

const update = (id: number) => {
    router.push({ name: 'update.supplier', params: { id: id } });
}

const activeKey = ref('1');

const columns = [
    {
        title: 'No',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Company',
        dataIndex: 'company',
        key: 'company',
    },
    {
        title: 'Email',
        key: 'email',
        dataIndex: 'email',
    },
    {
        title: 'Phone Number',
        key: 'phone_number',
        dataIndex: 'phone_number',
    },
    {
        title: 'Action',
        key: 'action',
    },
];
</script>

<style scoped></style>
