<template>
    <div>
        <a-table :dataSource="data.banners" :columns="columns" :loading="data.isLoading">
            <template #bodyCell="{ record, column, index }">
                <template v-if="column.key === 'id'">
                    <span>{{ index + 1 }}</span>
                </template>
                <template v-else-if="column.key === 'image'">
                    <a-image :src="record.image" :width="100" :height="50"></a-image>
                </template>
                <template v-else-if="column.key === 'name'">
                    <span style="color: red;">{{ record.name }}</span>
                </template>
                <template v-else-if="column.key === 'link'">
                    <span style="color: blue;">{{ record.link }}</span>
                </template>
                <template v-else-if="column.key === 'setting'">
                    <span>
                        <a>Edit</a>
                        <a-divider type="vertical"></a-divider>
                        <a-popconfirm title="Sure to delete?" @confirm="onDeleteItem(record.id)">
                            <a>Delete</a>
                        </a-popconfirm>
                    </span>
                </template>
            </template>
        </a-table>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useBannerStore } from '@/stores/banner.store';

const { fetchAll, deleteItem, data } = useBannerStore();

const onDeleteItem = async (id: number) => {
    await deleteItem(id);
    data.banners = data.banners.filter(item => item.id !== id);
};

onMounted(async () => {
    await fetchAll();
});

const columns = [
    {
        title: 'No',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Link',
        dataIndex: 'link',
        key: 'link',
    },
    {
        title: 'Setting',
        dataIndex: 'setting',
        key: 'setting',
    },
];
</script>

<style scoped></style>
