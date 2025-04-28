<template>
    <a-card :class="className" :title="title" :bordered="true">
        <template #extra v-if="desc">
            <a-typography-text type="secondary">{{ desc }}</a-typography-text>
        </template>

        <div class="space-y-5">
            <slot></slot>
        </div>
    </a-card>
</template>

<script setup lang="ts">
defineProps<{
    title: string
    className?: string
    desc?: string
}>()
</script>

<style scoped>
:deep(.ant-card-head-title) {
    font-size: 16px;
    font-weight: 500;
    color: #1f1f1f;
}

:deep(.ant-typography) {
    font-size: 13px;
}
</style>