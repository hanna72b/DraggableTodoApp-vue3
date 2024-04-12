<template>
  <div class="flex flex-col items-center">
    <h3
      class="cursor-pointer bg-gray-500 hover:bg-gray-400 text-white hover:text-black px-2 py-1 rounded w-2/5 text-center"
      v-if="!shouldDisplayForm"
      @click="shouldDisplayForm = !shouldDisplayForm"
    >
      Add New
    </h3>

    <template v-else>
      <form class="w-full flex flex-col items-center" @submit.prevent="handleOnSubmit">
        <div class="w-full">
          <input
            class="p-1 rounded w-full"
            type="text"
            placeholder="Title"
            v-model="newTodo.title"
          />
        </div>
        <div class="my-3 w-full">
          <textarea
            type="text"
            placeholder="Title"
            v-model="newTodo.description"
            class="w-full rounded p-1"
          />
        </div>

        <div class="w-full flex items-center justify-between">
          <button
            class="bg-gray-500 hover:bg-gray-400 text-white hover:text-black px-2 py-1 rounded"
            type="submit"
          >
            Submit
          </button>
          <button
            class="ms-2 bg-gray-500 hover:bg-gray-400 text-white hover:text-black px-2 py-1 rounded"
            type="submit"
            @click="resetForm"
          >
            Cancel
          </button>
        </div>
      </form>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import type { Todo, TodoStatus } from "@/types";
import useTodos from "@/stores/useTodos";

interface Props {
  status: TodoStatus;
}

const props = defineProps<Props>();

const shouldDisplayForm = ref(false);
const { addNewTodo } = useTodos();

const newTodo = reactive<Omit<Todo, "id">>({
  title: "",
  description: "",
  status: props.status,
});

const resetForm = () => {
  shouldDisplayForm.value = false;
  newTodo.title = "";
  newTodo.description = "";
};

const handleOnSubmit = () => {
  addNewTodo({
    id: Math.random() * 10000000000000000,
    ...newTodo,
  });

  resetForm();
};
</script>
