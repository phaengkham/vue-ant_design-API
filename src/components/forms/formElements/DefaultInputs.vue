<template>
    <a-form layout="vertical">
        <!-- Text Input -->
        <a-form-item label="Full Name">
            <a-input v-model:value="form.fullName" />
        </a-form-item>

        <!-- Input with Placeholder -->
        <a-form-item label="Email">
            <a-input v-model:value="form.email" placeholder="example@domain.com" />
        </a-form-item>

        <!-- Select Input -->
        <a-form-item label="Department">
            <a-select v-model:value="form.department" placeholder="Select Department">
                <a-select-option value="marketing">Marketing</a-select-option>
                <a-select-option value="developer">Developer</a-select-option>
                <a-select-option value="manager">Manager</a-select-option>
            </a-select>
        </a-form-item>

        <!-- Password Input -->
        <a-form-item label="Password">
            <a-input-password v-model:value="form.password" />
        </a-form-item>

        <!-- Date Picker -->
        <a-form-item label="Date of Birth">
            <a-date-picker v-model:value="form.dob" style="width: 100%" />
        </a-form-item>

        <!-- Time Picker -->
        <a-form-item label="Preferred Time">
            <a-time-picker v-model:value="form.time" style="width: 100%" />
        </a-form-item>

        <!-- Input with Payment Icon -->
        <a-form-item label="Card Number">
            <a-input v-model:value="form.card">
                <template #prefix>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="mc"
                        style="width: 20px" />
                </template>
            </a-input>
        </a-form-item>
    </a-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
    fullName: '',
    email: '',
    department: '',
    password: '',
    dob: null,
    time: null,
    card: '',
})
</script>

<style scoped></style>