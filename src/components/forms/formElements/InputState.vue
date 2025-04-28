<template>
    <a-form layout="vertical">
        <!-- Error State Input -->
        <a-form-item label="Email" :validate-status="'error'" :help="'This is an error message.'">
            <a-input v-model:value="errorEmail" placeholder="Enter your email">
                <template #suffix>
                    <InfoCircleOutlined style="color: #F04438" />
                </template>
            </a-input>
        </a-form-item>

        <!-- Success State Input -->
        <a-form layout="vertical">
            <a-form-item label="Email" validate-status="success" :help="'This is a success message.'">
                <a-input v-model:value="successEmail" placeholder="Enter your email" class="success-border">
                    <template #suffix>
                        <CheckCircleOutlined style="color: #12B76A" />
                    </template>
                </a-input>  
            </a-form-item>
        </a-form>

        <!-- Disabled State Input -->
        <a-form-item label="Email">
            <a-input placeholder="info@gmail.com" disabled />
        </a-form-item>
    </a-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InfoCircleOutlined, CheckCircleOutlined } from '@ant-design/icons-vue'

const errorEmail = ref('example')
const successEmail = ref('example@gmail.com')
</script>