import axios from "axios";

const state = {
  todos: [],
};
const getters = {
  allTodos: (state) => state.todos,
};
const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    commit("setTodos", response.data);
  },
  async addTodos({ commit }, title) {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      { title, completed: false }
    );
    commit("newTodo", response.data);
  },
  async deleteTodo({commit},id){
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit('removeTodo',id)
  },
  async filterTodos({commit},e){
    const limit = parseInt(e.target.value)
    const resp = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );
    commit("setTodos", resp.data);
  },
  async completedTodo({commit},id){
    await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`,{
      completed:true
    });
    commit("updateTodo",id)
  }
};
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) => state.todos=  state.todos.filter(todo=>todo.id!= id),
  updateTodo:(state,id)=>{
     state.todos = state.todos.map(obj => {
      if (obj.id === id) {
        return {...obj, completed: true};
      }
      return obj;
    });
  }
  
};

export default {
  state,
  getters,
  actions,
  mutations,
};
