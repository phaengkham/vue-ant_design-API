<template>
    <div class="p-6">
        <h2 class="mb-4">Parent Component</h2>
        <div class="mt-6">
            <MyComponent message="Hello Baby" @clicked="handleClick" v-model="userInput" />
            <p class="mt-4">User Input: {{ userInput }}</p>
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import MyComponent from '@/components/component/Mycomponent.component.vue'; // Ensure correct import

const userInput = ref<string>('');

const handleClick = (msg: string) => {
    console.log('Received from child:', msg);
};
</script>
