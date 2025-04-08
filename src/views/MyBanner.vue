<template>
    <div>
        <a-button type="primary" @click="create">Create Banner</a-button>
        <a-divider />
        <a-tabs v-model:activeKey="activekey" type="card" animated>
            <a-tab-pane key="1" tab="General Supplier">
                <a-table :columns="columns" :data-source="data.banners" :loading="data.isLoading" :pagination="{
                    current: pagination.current,
                    pageSize: pagination.pageSize,
                    total: pagination.total,
                    showSizeChanger: true,
                }" rowKey="id" @change="handleTableChange">
                    <template #bodyCell="{ record, column, index }">
                        <template v-if="column.key === 'id'">
                            <span>{{ index + 1 + (pagination.current - 1) * pagination.pageSize }}</span>
                        </template>
                        <template v-else-if="column.key === 'image_url'">
                            <a-image :src="record.image_url" :width="100" :height="50" />
                        </template>
                        <template v-else-if="column.key === 'action'">
                            <span>
                                <a @click="update(record.id)">Edit</a>
                                <a-divider type="vertical" />
                                <a-popconfirm title="Are you sure to delete?" ok-text="Yes" cancel-text="No"
                                    @confirm="deleteBannerHandler(record.id)">
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
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useMybannerStore } from '@/stores/myBanner.store';
import { message } from 'ant-design-vue';

const router = useRouter();
const { fetchAll, data, pagination, deleteBanner } = useMybannerStore();

const activekey = ref('1');

const handleTableChange = (paginationObj: any) => {
    pagination.current = paginationObj.current;
    pagination.pageSize = paginationObj.pageSize;
    console.log("Changing Page to:", pagination.current);
    fetchAll(pagination.current, pagination.pageSize);
};


onMounted(async () => {
    await fetchAll(pagination.current, pagination.pageSize);
    console.log("Initial Fetch Completed:", pagination.total);
});


const create = () => {
    router.push({ name: 'create.my.banner' });
};


const update = (id: number) => {
    router.push({ name: 'update.my.banner', params: { id } });
};


const deleteBannerHandler = async (id: number) => {
    try {
        await deleteBanner(id);
        message.success("Banner deleted successfully");
        await fetchAll(pagination.current, pagination.pageSize);
    } catch (error) {
        message.error("Failed to delete banner");
    }
};


const columns = [
    { title: 'No', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Image', dataIndex: 'image_url', key: 'image_url' },
    { title: 'Type', dataIndex: 'type', key: 'type' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    { title: 'Action', key: 'action' },
];
</script>
