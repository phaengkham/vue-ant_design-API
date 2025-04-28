<template>
    <a-layout style="min-height: 100vh">
        <!-- Sidebar -->
        <a-layout-sider v-model:collapsed="collapsed" collapsible
            style="background: #fff; min-height: 100vh; position: fixed; left: 0; top: 0; bottom: 0; z-index: 1001;"
            :width="200" :collapsedWidth="80">
            <Sidebar />
        </a-layout-sider>

        <!-- Right Side Layout -->
        <a-layout :style="{ marginLeft: collapsed ? '80px' : '200px' }">
            <!-- Fixed Navbar -->
            <div :style="{
                position: 'fixed',
                top: '0',
                left: collapsed ? '80px' : '200px',
                right: '0',
                zIndex: 1000,
                background: '#fff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                height: '64px',
            }">
                <Navbar @toggle-sidebar="() => (collapsed = !collapsed)" />
            </div>

            <!-- Page Content -->
            <a-layout-content :style="{
                margin: '10px 10px',
                padding: '24px',
                background: '#fff',
                minHeight: '280px',
                paddingTop: '74px',
            }">
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

<style scoped></style>