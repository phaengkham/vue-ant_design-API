<template>
    <a-form layout="vertical">
        <!-- Email -->
        <a-form-item label="Email">
            <a-input v-model:value="email" size="large" placeholder="info@gmail.com" :prefix="mailIcon" />
        </a-form-item>

        <!-- Phone (Prefix Country Code) -->
        <a-form-item label="Phone">
            <a-input-group compact>
                <a-select v-model:value="selectedCountry" size="large" style="width: 100px" @change="updatePhoneNumber">
                    <a-select-option v-for="(country) in countryCode" :key="country" :value="country">
                        {{ country }}
                    </a-select-option>
                </a-select>
                <a-input v-model:value="phoneNumber" size="large" style="width: calc(100% - 100px)" placeholder="Phone number" />
            </a-input-group>
        </a-form-item>

        <!-- Phone (Suffix Country Code) -->
        <a-form-item label="Phone (Suffix)">
            <a-input-group compact>
                <a-input v-model:value="phoneNumber2" size="large" style="width: calc(100% - 100px)"
                    placeholder="Phone number" />
                <a-select v-model:value="selectedCountry2" size="large" style="width: 100px" @change="updatePhoneNumber2">
                    <a-select-option v-for="(country) in countryCode" :key="country" :value="country">
                        {{ country }}
                    </a-select-option>
                </a-select>
            </a-input-group>
        </a-form-item>

        <!-- URL with Prefix -->
        <a-form-item label="URL">
            <a-input v-model:value="url" size="large" addon-before="http://" placeholder="www.ant-design.com" />
        </a-form-item>

        <!-- Website with Copy Button -->
        <a-form-item label="Website">
            <a-input v-model:value="website" size="large" :addon-after="copyBtn" />
            <span v-if="coppyText && coppyText !== 'Copy'" style="color: #52c41a; font-size: 12px">
                Copied: {{ coppyText }}
            </span>
        </a-form-item>
    </a-form>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { MailOutlined, CopyOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'

const email = ref('')
const selectedCountry = ref('USA')
const selectedCountry2 = ref('USA')
const phoneNumber = ref('')
const phoneNumber2 = ref('')
const url = ref('')
const website = ref('www.ant-design.com')
const coppyText = ref('Copy')

const countryCode = {
    USA: '+1',
    UK: '+44',
    CA: '+1',
    AU: '+61',
    IN: '+91',
}

const updatePhoneNumber = () => {
    phoneNumber.value = countryCode[selectedCountry.value as keyof typeof countryCode]
}

const updatePhoneNumber2 = () => {
    phoneNumber2.value = countryCode[selectedCountry2.value as keyof typeof countryCode]
}

const coppyWebsite = () => {
    navigator.clipboard.writeText(website.value)
    coppyText.value = website.value
    message.success('Copied to clipboard!')
    setTimeout(() => {
        coppyText.value = 'Copy'
    }, 2000)
}

const mailIcon = h(MailOutlined)

const copyBtn = h(
    'span',
    {
        style: { cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' },
        onClick: coppyWebsite,
    },
    [h(CopyOutlined), 'Copy']
)
</script>

<style scoped></style>