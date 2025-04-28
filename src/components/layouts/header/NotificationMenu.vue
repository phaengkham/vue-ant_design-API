<template>
    <a-dropdown placement="bottomRight" trigger="click">
        <a-badge :count="unreadCount" dot>
            <a-avatar shape="square" size="large" class="navbar-btn" @click.prevent>
                <BellOutlined class="menu-icon" />
            </a-avatar>
        </a-badge>
        <template #overlay>
            <div class="notification-list">
                <div v-for="item in notifications" :key="item.id" class="notification-card">
                    <a-avatar :src="item.userImage" size="large" />
                    <div class="notification-info">
                        <div class="notification-title">
                            <span class="user-name">{{ item.userName }}</span>
                            {{ item.action }}
                        </div>
                        <div class="notification-project">{{ item.project }}</div>
                        <div class="notification-meta">
                            <span class="status-dot" :class="item.status === 'online' ? 'online' : 'offline'"></span>
                            {{ item.time }}
                        </div>
                    </div>
                </div>
                <a-divider />
                <a-button type="link" block @click="markAllAsRead">Mark all as read</a-button>
            </div>
        </template>
    </a-dropdown>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BellOutlined } from '@ant-design/icons-vue'

const notifications = ref([
    {
        id: 1,
        userName: 'Terry Franci',
        userImage: 'https://i.pravatar.cc/150?img=3',
        action: 'requests permission to change',
        project: 'Project - Nganter App',
        type: 'Project',
        time: '5 min ago',
        status: 'online'
    },
    {
        id: 2,
        userName: 'Terry Franci',
        userImage: 'https://i.pravatar.cc/150?img=3',
        action: 'requests permission to change',
        project: 'Project - Nganter App',
        type: 'Project',
        time: '5 min ago',
        status: 'offline'
    },
    {
        id: 3,
        userName: 'Terry Franci',
        userImage: 'https://i.pravatar.cc/150?img=3',
        action: 'requests permission to change',
        project: 'Project - Nganter App',
        type: 'Project',
        time: '5 min ago',
        status: 'online'
    },
    // ...more items
])

const unreadCount = ref(notifications.value.length)

const markAllAsRead = () => {
    unreadCount.value = 0
}
</script>

<style scoped>

.navbar-btn {
    background-color: #5999f3;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    cursor: pointer;
    transition: background-color 0.3s;
}

.navbar-btn:hover {
    background-color: #5378ff;
}

.notification-list {
  width: 340px;
  max-height: 400px;
  overflow-y: auto;
  padding: 12px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}


.notification-card {
    display: flex;
    gap: 12px;
    padding: 8px 0;
    border-bottom: 1px solid #f0f0f0;
}

.notification-info {
    flex: 1;
}

.notification-title {
    font-weight: 500;
    margin-bottom: 4px;
}

.user-name {
    font-weight: 600;
    margin-right: 4px;
}

.notification-project {
    font-size: 13px;
    color: #888;
}

.notification-meta {
    font-size: 12px;
    color: #aaa;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 4px;
}

.status-dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
}

.status-dot.online {
    background-color: #52c41a;
}

.status-dot.offline {
    background-color: #d9d9d9;
}
</style>