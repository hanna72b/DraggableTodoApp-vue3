<template>
  <div class="w-4/5 flex-1 p-5 bg-[rgb(56,80,103)]">
    <h3 class="mb-5 text-center text-white">{{ groupLabel[props.status] }}</h3>

    <Draggable
      @change="onDraggableChange"
      class="draggable min-h-[200px]"
      :list="todoList"
      group="todos"
      itemKey="id"
    >
      <template #item="{ element: todo }">
        <li
          class="flex flex-col  bg-[aliceblue] text-[rgb(56,80,103)] py-[2px] px-[5px] cursor-grab mb-[10px] rounded"
        >
          <div class="flex items-center justify-between">
            {{ todo.title }}

            <div class="flex gap-x-2">
            
              {{ todo.status }}
              <span
                @click="deleteTodo(todo)"
                class="delete-icon float-right cursor-pointer"
                >X</span
              >
            </div>

          </div>

          <div>
            <span class="text-sm">{{ todo.description }}</span>
          </div>
        </li>
      </template>
    </Draggable>
    <CreateTodo :status="$props.status" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import CreateTodo from "./CreateTodo.vue";
import { TodoStatus, type Todo } from "@/types";
import useTodos from "@/stores/useTodos";
import Draggable from "vuedraggable";

interface Props {
  status: TodoStatus;
}

const props = defineProps<Props>();

const { getTodosByStatus, deleteTodo, updateTodo } = useTodos();
const todoList = getTodosByStatus(props.status);

const groupLabel = {
  [TodoStatus.Pending]: "Pending",
  [TodoStatus.InProgress]: "In Progress",
  [TodoStatus.Completed]: "Completed",
};

const onDraggableChange = (payload: any) => {
  console.log("payload", payload);

  if (payload?.added?.element) {
    // update totdo status
    updateTodo(payload?.added?.element, props.status);
  }
};
</script>
