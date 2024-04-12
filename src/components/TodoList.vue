<template>
  <div class="w-10/12 flex justify-around items-start gap-x-10">
    <TodoGroup :status="TodoStatus.Pending" />
    <TodoGroup :status="TodoStatus.InProgress" />
    <TodoGroup :status="TodoStatus.Completed" />
  </div>
</template>

<script setup lang="ts">
import { TodoStatus, type Todo } from "@/types";
import TodoGroup from "./TodoGroup.vue";
</script>
