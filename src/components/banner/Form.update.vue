<template>
    <a-card title="Edit Banner" class="form-card">
        <a-form layout="vertical">

            <a-form-item label="Upload Image">
                <a-upload name="avatar" list-type="picture-card" class="avatar-uploader" :before-upload="beforeUpload"
                    :show-upload-list="false">
                    <img v-if="form.imageURL" :src="form.imageURL" alt="banner" class="uploaded-image" />
                    <div v-else>
                        <loading-outlined v-if="loading" />
                        <plus-outlined v-else />
                        <div class="ant-upload-text">Upload</div>
                    </div>
                </a-upload>
            </a-form-item>

            <a-form-item label="Banner Name" :validate-status="errors.name ? 'error' : ''" :help="errors.name">
                <a-input v-model:value="form.name" placeholder="Enter banner name..." />
            </a-form-item>

            <a-form-item label="Banner Type" :validate-status="errors.type ? 'error' : ''" :help="errors.type">
                <a-select v-model:value="form.type" placeholder="Select banner type" :options="options" />
            </a-form-item>

            <a-form-item>
                <a-button type="primary" block :loading="loading" @click="submit">Update Banner</a-button>
            </a-form-item>
        </a-form>
    </a-card>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useMybannerStore } from "@/stores/myBanner.store";
import { notification } from "ant-design-vue";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons-vue";


const router = useRouter();
const { fetOne, update, form } = useMybannerStore();
const loading = ref(false);

const errors = reactive({
    name: "",
    type: ""
});

const options = ref([
    { value: "normal", label: "ທົ່ວໄປ" },
    { value: "promotion", label: "ໂປໂມຊັ່ນ" },
]);


onMounted(async () => {
    const id = Number(router.currentRoute.value.params.id);
    if (!id) {
        notification.error({ message: "Error", description: "Banner ID is required." });
        return;
    }
    await fetOne(id);
    if (!form.name || !form.type) {
        notification.error({ message: "Error", description: "Banner not found or incomplete data." });
    }
});


const openNotification = () => {
    notification.success({
        message: "Success",
        description: "Your banner has been updated successfully!",
        placement: "topRight",
        duration: 4,
    });
}
const beforeUpload = (file: File) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
        notification.error({ message: "Invalid Format", description: "Only JPEG/PNG images are allowed." });
        return false;
    }
    if (file.size > 5 * 1024 * 1024) {
        notification.error({ message: "File Too Large", description: "Image must be under 5MB." });
        return false;
    }
    if (form.imageURL) URL.revokeObjectURL(form.imageURL);
    form.imageFile = file;
    form.imageURL = URL.createObjectURL(file);
    return false;
};

const submit = async () => {
    await update();
    openNotification();
    router.push({ name: "mybanner" });
    loading.value = true;
};
</script>

<style scoped>
.form-card {
    max-width: 450px;
    margin: auto;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

.avatar-uploader {
    width: 100%;
    text-align: center;
}

.uploaded-image {
    width: 100%;
    max-height: 150px;
    object-fit: cover;
    border-radius: 8px;
}
</style>
