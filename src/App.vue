<template>
  <div class="w-full h-screen flex items-center justify-center">
    <TodoList />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import TodoList from "./components/TodoList.vue";
</script>
