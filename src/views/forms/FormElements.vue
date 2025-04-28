<template>
    <div>
        <PageBreadcrumb pageTitle="Form Elements" />

        <div>
            <a-row :gutter="[24, 24]">
                <!-- First Column with Form Inputs -->
                <a-col :xs="24" :sm="12">
                    <div class="space-y-6">
                        <ComponentCard title="Default Inputs">
                            <DefaultInputs />
                        </ComponentCard>
                        <ComponentCard title="Select Inputs">
                            <SelectInput />
                        </ComponentCard>
                        <ComponentCard title="Inputs States">
                            <TextArea />
                        </ComponentCard>
                        <ComponentCard title="Inputs States">
                            <InputState />
                        </ComponentCard>
                    </div>
                </a-col>

                <!-- Second Column with Other Inputs -->
                <a-col :xs="24" :sm="12">
                    <div class="space-y-6">
                        <ComponentCard title="Inputs Group">
                            <InputGroup />
                        </ComponentCard>
                        <ComponentCard title="File Input">
                            <FileInput />
                        </ComponentCard>
                        <ComponentCard title="Checkboxes">
                            <CheckboxInput />
                        </ComponentCard>
                        <ComponentCard title="Dropzone">
                            <Dropzone />
                        </ComponentCard>
                    </div>
                </a-col>
            </a-row>
        </div>
    </div>
</template>

<script setup lang="ts">
import ComponentCard from '@/components/common/ComponentCard.vue';
import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue';
import CheckboxInput from '@/components/forms/formElements/CheckboxInput.vue';
import DefaultInputs from '@/components/forms/formElements/DefaultInputs.vue';
import Dropzone from '@/components/forms/formElements/Dropzone.vue';
import FileInput from '@/components/forms/formElements/FileInput.vue';
import InputGroup from '@/components/forms/formElements/InputGroup.vue';
import InputState from '@/components/forms/formElements/InputState.vue';
import SelectInput from '@/components/forms/formElements/SelectInput.vue';
import TextArea from '@/components/forms/formElements/TextArea.vue';
</script>

<style scoped></style>