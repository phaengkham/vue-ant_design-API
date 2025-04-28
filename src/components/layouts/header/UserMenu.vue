<template>
    <a-dropdown placement="bottomRight" trigger="click">
        <a-avatar shape="circle" size="large" class="navbar-btn" :src="user.avatar" @click.prevent />
        <template #overlay>
            <div class="profile-card">
                <div class="profile-header">
                    <a-avatar size="large" :src="user.avatar" />
                    <div class="info">
                        <div class="name">{{ user.name }}</div>
                        <div class="email">{{ user.email }}</div>
                    </div>
                </div>
                <a-divider />
                <a-menu class="profile-menu">
                    <a-menu-item key="edit">
                        <EditOutlined class="menu-icon" />
                        Edit Profile
                    </a-menu-item>
                    <a-menu-item key="setting">
                        <SettingOutlined class="menu-icon" />
                        Setting
                    </a-menu-item>
                    <a-menu-item key="support">
                        <CustomerServiceOutlined class="menu-icon" />
                        Support
                    </a-menu-item>
                </a-menu>
                <a-divider />
                <a-button type="primary" block danger @click="logout">
                    <LogoutOutlined /> Logout
                </a-button>
            </div>
        </template>
    </a-dropdown>
</template>

<script setup lang="ts">
import {
    EditOutlined,
    SettingOutlined,
    CustomerServiceOutlined,
    LogoutOutlined
} from '@ant-design/icons-vue'
import { reactive } from 'vue'

const user = reactive({
    name: 'Phaengkham Happy',
    email: 'phaengkhamhappy@gmail.com',
    avatar: 'https://i.pravatar.cc/150?img=3'
})

const logout = () => {
    console.log('Logging out...')
}
</script>

<style scoped>
.navbar-btn {
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.menu-icon {
    font-size: 20px;
    margin-right: 8px;
}

.profile-card {
    width: 250px;
    background: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    padding: 16px;
    border-radius: 8px;
}

.profile-header {
    display: flex;
    align-items: center;
    gap: 12px;
}

.profile-header .info .name {
    font-weight: 600;
}

.profile-header .info .email {
    font-size: 12px;
    color: #888;
}

.profile-menu {
    border: none;
    box-shadow: none;
}
</style>