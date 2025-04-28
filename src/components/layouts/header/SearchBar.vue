<template>
    <a-input-search
      v-model:value="value"
      placeholder="input search text"
      enter-button
      @search="onSearch"
    />
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref<string>("");
const onSearch = (value: string) => {
    console.log(value);
};
</script>

<style scoped>
</style>