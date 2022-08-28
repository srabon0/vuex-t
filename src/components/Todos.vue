<template>
  <div>
    <h1>Hello todos</h1>
    <div  class="todos">
      <div @dblclick="completedTodo(todo.id)" :key="todo.id" v-for="todo in allTodos" :class="['todo', { 'completed' : todo.completed }]">
        {{ todo.title }}
        <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt" ></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "VuexCrashTodos",

  data() {
    return {};
  },

  computed: {
    ...mapGetters(["allTodos"]),
  },
  mounted() {},

  methods: {
    ...mapActions(["fetchTodos","deleteTodo","completedTodo"]),
  },
  created() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.completed{
  background-color: rgb(31, 90, 60);
}
</style>
