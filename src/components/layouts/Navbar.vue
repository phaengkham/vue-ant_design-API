<template>
    <a-layout-header style="background: #fff">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="onCollapsed"
            style="font-size: 20px; margin-left: -35px" />
        <menu-fold-outlined v-else class="trigger" @click="onCollapsed" style="margin-left: -35px; font-size: 20px" />

        <div class="header-action-container">
            <a-badge count="2">
                <a-avatar shape="square" size="large" class="navbar-btn">
                    <shopping-cart-outlined class="menu-icon" />
                </a-avatar>
            </a-badge>
            <a-badge count="3">
                <a-avatar shape="square" size="large" class="navbar-btn">
                    <comment-outlined class="menu-icon" />
                </a-avatar>
            </a-badge>
            <NotificationMenu />
            <UserMenu />
        </div>
    </a-layout-header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
    ShoppingCartOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    CommentOutlined
} from '@ant-design/icons-vue'
import UserMenu from './header/UserMenu.vue'
import NotificationMenu from './header/NotificationMenu.vue'

const collapsed = ref(false)
const emit = defineEmits<{ (e: 'toggleSidebar'): void }>()

const onCollapsed = () => {
    collapsed.value = !collapsed.value
    emit('toggleSidebar')
}
</script>

<style scoped lang="scss">
.header-action-container {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    margin-right: -25px;

    .navbar-btn {
        background-color: rgb(191, 219, 254);
        color: rgb(59, 130, 246);
        width: 32px;
        height: 32px;
        line-height: 32px;
        border-radius: 50% !important;
        padding: 0;
        text-align: center !important;

        :hover {
            cursor: pointer;
        }
    }
}

.ant-layout-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    overflow: visible;
    position: relative;
    z-index: 10;
}
</style>