<template>
    <a-anchor :affix="false" :get-current-anchor="getCurrentAnchor" :items="[
        {
            key: '1',
            href: '#components-anchor-demo-basic',
            title: 'Basic demo',
        },
        {
            key: '2',
            href: '#components-anchor-demo-static',
            title: 'Static demo',
        },
        {
            key: '3',
            href: '#api',
            title: 'API',
            children: [
                {
                    key: '4',
                    href: '#anchor-props',
                    title: 'Anchor Props',
                },
                {
                    key: '5',
                    href: '#link-props',
                    title: 'Link Props',
                },
            ],
        },
    ]"></a-anchor>
</template>
<script lang="ts" setup>
const getCurrentAnchor = () => {
    return '#components-anchor-demo-static';
};
</script>



<script setup lang="ts">

</script>

<style scoped></style>