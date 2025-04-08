<script setup lang="ts">
import { reactive, onMounted, computed } from 'vue';
import { useBannerStore } from '@/stores/banner.store';
import { useI18n } from 'vue-i18n';
import { useForm, useField } from 'vee-validate';
import { bannerSchema } from './schemas/Banner.shcema';

const { updatBanner, fetchAll, data } = useBannerStore();
const { t } = useI18n();

const mydata = reactive({
    name: 'Phaengkham',
    age: 20
});


const translateErrorMessage = computed(() => ({
    name: t('message.validate.name'),
    surname: t('message.validate.surname')
}));


const { handleSubmit: submit, errors } = useForm({
    validationSchema: bannerSchema(translateErrorMessage.value) // Use `.value` inside setup
});


const { value: Name } = useField<string>('name');
const { value: surname } = useField<string>('surname');


const update = submit(async (values) => {
    console.log('Submitted values:', values);
});


onMounted(async () => {
    await fetchAll();
});
</script>

<template>
    <div class="banner-form-container">
        <a-card class="banner-form-card">
            <h2 class="form-title">{{ t("message.banner_form") }}</h2>

            <a-form layout="vertical" @submit.prevent="update">
                <!-- Name Input -->
                <a-form-item :label="t('message.name')" :validate-status="errors.name ? 'error' : ''"
                    :help="errors.name">
                    <a-input v-model:value="Name" size="large" placeholder="Enter your name" />
                </a-form-item>

                <!-- Surname Input -->
                <a-form-item :label="t('message.surname')" :validate-status="errors.surname ? 'error' : ''"
                    :help="errors.surname">
                    <a-input v-model:value="surname" size="large" placeholder="Enter your surname" />
                </a-form-item>

                <!-- Submit Button -->
                <a-form-item>
                    <a-button type="primary" html-type="submit" block>
                        {{ t("message.submit") }}
                    </a-button>
                </a-form-item>
            </a-form>
        </a-card>
    </div>
</template>

<style scoped>
.banner-form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
}

.banner-form-card {
    width: 100%;
    max-width: 400px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    background: #fff;
}

.form-title {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #333;
}
</style>
