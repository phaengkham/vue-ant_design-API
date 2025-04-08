<template>
    <div class="logo">
        <img src="/Ant-Logo-Design-Team.jpg" alt="">
    </div>
    <a-menu v-model:selectedKeys="selectedKeys" class="sidebar-menu" mode="inline">
        <a-menu-item key="1" @click="gotoRoute('mycomponent')">
            <UsergroupAddOutlined />
            <span>Membership</span>
        </a-menu-item>
        <a-menu-item key="2" @click="gotoRoute('showbanner')">
            <CopyOutlined />
            <span>Banners</span>
        </a-menu-item>
        <a-menu-item key="3" @click="gotoRoute('supplier')">
            <FileImageOutlined />
            <span>Supplier</span>
        </a-menu-item>
        <a-menu-item key="4" @click="gotoRoute('mybanner')">
            <ProjectOutlined />
            <span>My-Banner</span>
        </a-menu-item>
        <a-menu-item key="5" @click="gotoRoute('myrole')">
            <LoadingOutlined />
            <span>Role-Guard</span>
        </a-menu-item>
        <a-sub-menu key="sub2">
            <template #title>
                <span>
                    <TeamOutlined />
                    <span>Team</span>
                </span>
            </template>
            <a-menu-item key="6">Team 1</a-menu-item>
            <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu>
    </a-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
    CopyOutlined,
    TeamOutlined,
    UsergroupAddOutlined,
    FileImageOutlined,
    LoadingOutlined,
    ProjectOutlined,
} from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';


const selectedKeys = ref<string[]>([]);
const router = useRouter();
const gotoRoute = (routeName: string) => {
    router.push({ name: routeName });
};
</script>

<style lang="scss" scoped>
.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8125rem 0.5rem 0.8125rem 1rem;
    width: 100%;
    height: 100px;
    background: rgba(255, 255, 255, 0.2);

    img {
        width: 6rem;
        height: 6rem;
        margin-right: 0.8rem;
        margin-left: 0.25rem;
        object-fit: contain;
        border-radius: 5px;
    }
}
</style>
