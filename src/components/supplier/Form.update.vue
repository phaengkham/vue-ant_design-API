<template>
    <a-card :title="t('message.supplier.edit_supplier_form')" :bordered="false" class="card-container">
        <a-form layout="vertical" @finish="handleUpdate">
            <a-row :gutter="[16, 16]">
                <a-col :span="12">
                    <a-form-item :label="t('message.supplier.supplier_name')" name="name"
                        :rules="[{ required: true, message: t('message.supplier_validation.supplier_name_required') }]">
                        <a-input v-model:value="form.name" :placeholder="t('message.supplier.supplier_name')" />
                    </a-form-item>
                </a-col>

                <a-col :span="12">
                    <a-form-item :label="t('message.supplier.supplier_email')" name="email"
                        :rules="[{ required: true, type: 'email', message: t('message.supplier_validation.supplier_email_required') }]">
                        <a-input v-model:value="form.email" :placeholder="t('message.supplier.supplier_email')" />
                    </a-form-item>
                </a-col>

                <a-col :span="12">
                    <a-form-item :label="t('message.supplier.supplier_company')" name="company"
                        :rules="[{ required: true, message: t('message.supplier_validation.supplier_company_required') }]">
                        <a-input v-model:value="form.company" :placeholder="t('message.supplier.supplier_company')" />
                    </a-form-item>
                </a-col>

                <a-col :span="12">
                    <a-form-item :label="t('message.supplier.supplier_phone')" name="phone_number"
                        :rules="[{ required: true, message: t('message.supplier_validation.supplier_phone_required') }]">
                        <a-input v-model:value="form.phone_number"
                            :placeholder="t('message.supplier.supplier_phone')" />
                    </a-form-item>
                </a-col>

                <a-col :span="24">
                    <a-form-item :label="t('message.supplier.supplier_address')" name="address"
                        :rules="[{ required: true, message: t('message.supplier_validation.supplier_address_required') }]">
                        <a-textarea v-model:value="form.address" :placeholder="t('message.supplier.supplier_address')"
                            rows="3" />
                    </a-form-item>
                </a-col>

                <a-col :span="24" class="btn-container">
                    <a-button type="primary" size="large" html-type="submit" @click="handleUpdate">{{
                        t('message.supplier.edit_supplier') }}</a-button>
                </a-col>
            </a-row>
        </a-form>
    </a-card>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useSupplierStore } from '@/stores/supplier.store';
import { useI18n } from 'vue-i18n';


const { t } = useI18n();
const { form, data, fetchAll, update } = useSupplierStore();
const route = useRoute();
const router = useRouter();


onMounted(async () => {
    const id = Number(route.params.id);
    console.log("Route ID:", id);

    if (!id) return;

    await fetchAll();
    const supplier = data.suppliers.find(item => item.id === id);

    console.log("Supplier found:", supplier);

    if (supplier) {
        form.id = supplier.id;
        form.name = supplier.name;
        form.email = supplier.email;
        form.company = supplier.company;
        form.phone_number = supplier.phone_number;
        form.address = supplier.address;
    } else {
        console.error('Supplier not found');
    }
});
const handleUpdate = async () => {
    console.log("Form data before update:", form);
    const success = await update(form);
    if (success) {
        router.push({ name: 'supplier' });
    } else {
        console.error('Error updating supplier');
    }
};
</script>
