<script setup lang="ts">
import { useSupplierStore } from '@/stores/supplier.store';
import { notification } from 'ant-design-vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useForm, useField } from 'vee-validate';
import { onMounted } from 'vue';


const { t } = useI18n();
const router = useRouter();


const openNotification = () => {
    notification.success({
        message: 'Supplier Created',
        description: 'The supplier has been successfully created.',
        duration: 3
    });
};


const { form, create, clearForm } = useSupplierStore();


const translateErrorMessage = {
    name: t('message.supplier_validation.supplier_name_required'),
    email: t('message.supplier_validation.supplier_email_required'),
    company: t('message.supplier_validation.supplier_company_required'),
    phone_number: t('message.supplier_validation.supplier_phone_required'),
    address: t('message.supplier_validation.supplier_address_required'),
}

const { value: name } = useField<string>('name');
const { value: email } = useField<string>('email');
const { value: company } = useField<string>('company');
const { value: phone_number } = useField<string>('phone_number');
const { value: address } = useField<string>('address');


const submit = async () => {
    await create();
    openNotification();
    router.push({ name: 'supplier' });
}


onMounted(() => {
    clearForm();
});
</script>

<template>
    <a-card :title="t('message.supplier.create_supplier_form')" :bordered="false" class="form-card">
        <a-form layout="vertical" @submit.prevent="submit">
            <a-row :gutter="[16, 16]">
                <a-col :span="12">
                    <a-form-item :label="t('message.supplier.supplier_name')" name="name"
                        :rules="[{ required: true, message: translateErrorMessage.name }]">
                        <a-input v-model:value="form.name" placeholder="Enter supplier name" />
                    </a-form-item>
                </a-col>
                <a-col :span="12">
                    <a-form-item :label="t('message.supplier.supplier_email')" name="email"
                        :rules="[{ required: true, message: translateErrorMessage.email }]">
                        <a-input v-model:value="form.email" placeholder="Enter supplier email" />
                    </a-form-item>
                </a-col>
                <a-col :span="12">

                    <a-form-item :label="t('message.supplier.supplier_company')" name="company"
                        :rules="[{ required: true, message: translateErrorMessage.company }]">
                        <a-input v-model:value="form.company" placeholder="Enter company name" />
                    </a-form-item>
                </a-col>
                <a-col :span="12">
                    <a-form-item :label="t('message.supplier.supplier_phone')" name="phone_number"
                        :rules="[{ required: true, message: translateErrorMessage.phone_number }]">
                        <a-input v-model:value="form.phone_number" placeholder="Enter phone number" />
                    </a-form-item>
                </a-col>
                <a-col :span="24">
                    <a-form-item :label="t('message.supplier.supplier_address')" name="address"
                        :rules="[{ required: true, message: translateErrorMessage.address }]">
                        <a-textarea v-model:value="form.address" placeholder="Enter address" :rows="3" />
                    </a-form-item>
                </a-col>
                <a-col :span="24" class="btn-container">
                    <a-button type="primary" size="large" @click="submit">{{ t('message.supplier.create_supplier')
                    }}</a-button>
                </a-col>
            </a-row>
        </a-form>
    </a-card>
</template>
