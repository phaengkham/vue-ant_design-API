<template>
    <a-form layout="vertical">
        <a-form-item label="Upload File">
            <a-upload :before-upload="handleBeforeUpload" v-model:file-list="fileList" :max-count="1"
                show-upload-list="false">
                <a-button>
                    <UploadOutlined /> Click to Upload
                </a-button>
            </a-upload>
            <div v-if="fileList.length" class="mt-2 text-gray-700 dark:text-gray-300">
                Selected File: {{ fileList[0].name }}
            </div>
        </a-form-item>
    </a-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UploadOutlined } from '@ant-design/icons-vue'

const fileList = ref<any[]>([])

const handleBeforeUpload = (file: any) => {
    fileList.value = [file]
    return false
}
</script>

<style scoped></style>