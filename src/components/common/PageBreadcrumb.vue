<template>
    <div class="page-header">
        <div class="header-title">
            <a-typography-title :level="4" class="!mb-0">{{ pageTitle }}</a-typography-title>
        </div>
        <a-breadcrumb separator=">">
            <a-breadcrumb-item>
                <router-link to="/">Home</router-link>
            </a-breadcrumb-item>
            <a-breadcrumb-item>{{ pageTitle }}</a-breadcrumb-item>
        </a-breadcrumb>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    pageTitle: string
}>()
</script>

<style scoped>
.page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 24px;
    gap: 12px;
}

.header-title {
    color: #1f1f1f;
}
</style>