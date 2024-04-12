<template>
  <main class="container text-center">
    <div class="space-y-5">
      <h1 class="text-center text-3xl font-medium">Todo App (By Hanna)</h1>

   
    
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";

const date = ref("");
interface User {
  name: string;
  family: string;
  age: number;
  role?: string;
}

const user: User = {
  name: "hanna",
  family: "barbod",
  age: 30,
  role: "",
};
</script>
