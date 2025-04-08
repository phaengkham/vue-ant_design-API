<template>
    <div class="login-container">
        <a-card class="login-card">
            <h2 class="login-title">{{ $t("message.welcome") }}</h2>
            <a-form :model="formLogin" name="login-form" layout="vertical" autocomplete="off" @finish="callLogin">
                <a-form-item :label="$t('message.username')" name="email" :rules="emailRules">
                    <a-input v-model:value="formLogin.email" size="large" :placeholder="$t('message.validate.email')" />
                </a-form-item>

                <a-form-item :label="$t('message.userpassword')" name="password" :rules="passwordRules">
                    <a-input-password v-model:value="formLogin.password" size="large"
                        :placeholder="$t('message.validate.password')" />
                </a-form-item>

                <a-form-item name="remember">
                    <a-checkbox v-model:checked="formLogin.rememberme">
                        {{ $t("message.validate.rememberme") }}
                    </a-checkbox>
                    <a class="forgot-password">{{ $t("message.validate.forgotPassword") }}</a>
                </a-form-item>

                <a-form-item>
                    <a-button type="primary" html-type="submit" class="login-button" block>
                        {{ $t("message.login") }}
                    </a-button>
                </a-form-item>

                <div class="register-link">
                    {{ $t("message.validate.no_account") }}
                    <a href="#">{{ $t("message.validate.sign_up") }}</a>
                </div>
            </a-form>
        </a-card>
    </div>
</template>

<script lang="ts" setup>
import { reactive, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useLoginStore } from "@/stores/login.store";
import { message } from "ant-design-vue";
import { loginSchema } from "./schemas/login.shcema";
import { ValidationError } from "yup";
import "@/assets/styles/login.scss"

const { login } = useLoginStore();
const { t } = useI18n();
const errorMessage = computed(() => ({
    email: t("message.validate.email"),
    password: t("message.validate.password"),
}));


const schema = computed(() => loginSchema(errorMessage.value));

const formLogin = reactive({
    email: "",
    password: "",
    rememberme: true,
});


const emailRules = computed(() => [{ required: true, message: errorMessage.value.email }]);
const passwordRules = computed(() => [{ required: true, message: errorMessage.value.password }]);

const callLogin = async () => {
    try {
 
        await schema.value.validate(formLogin, { abortEarly: false });

   
        await login(formLogin.email, formLogin.password);
    } catch (error) {
        if (error instanceof ValidationError) {
      
            error.inner.forEach((err) => {
                message.error(err.message);
            });
        } else {
            message.error(t("message.validate.login_failed"));
        }
    }
};
</script>

<style scoped></style>
