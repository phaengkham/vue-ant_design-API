<template>
    <a-layout style="min-height: 100vh">
        <!-- Sidebar -->
        <a-layout-sider v-model:collapsed="collapsed" collapsible style="background: #fff; min-height: 100vh;">
            <Sidebar />
        </a-layout-sider>

        <a-layout>
            <!-- Navbar -->
            <Navbar @toggle-sidebar="() => (collapsed = !collapsed)" />

            <!-- Page Content -->
            <a-layout-content :style="{ margin: '10px 10px', padding: '24px', background: '#fff', minHeight: '280px' }">
                <router-view />
            </a-layout-content>

            <!-- Footer -->
            <a-layout-footer style="text-align: center; background: #fff; padding: 10px;">
                <Footer />
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Sidebar from '@/components/layouts/Sidebar.vue';
import Navbar from '@/components/layouts/Navbar.vue';
import Footer from '@/components/layouts/Footer.vue';

const collapsed = ref<boolean>(false);
</script>

<style>
#components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
}

.site-layout .site-layout-background {
    background: #fff;
}
</style>
