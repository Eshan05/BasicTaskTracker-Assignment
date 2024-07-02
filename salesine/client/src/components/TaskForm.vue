<template>
  <div>
    <h2 class="my-5">Your Tasks</h2>
    <form @submit.prevent="createTask" class="mx-auto col-md-6">
      <div class="mb-3">
        <label for="title" class="form-label">Task Title*</label>
        <input v-model="title" type="text" class="form-control" id="title" placeholder="Write your task heading" required />
        <label for="description" class="mt-2 form-label">Task Description</label>
        <textarea v-model="description" type="text" class="form-control " id="description" placeholder="Write your task description (Optional)"></textarea>
      </div>
      <button type="submit" class="text-white btn w-100" style="padding: 1rem; background: cornflowerblue; letter-spacing: 1pt;">ADD TASK</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: 'TaskFormView',
  data() {
    return {
      title: '',
      description: '',
    };
  },
  methods: {
    async createTask() {
      try {
        const isAuthenticated = this.$store.getters.isAuthenticated;
        if (!isAuthenticated) {
          console.error("User not authenticated");
          return;
        }

        const token = this.$store.getters.getUser.token;
        const headers = { Authorization: `Bearer ${token}` };
        // Call backend API to add a new task
        const response = await axios.post('/tasks', { title: this.title, description: this.description }, { headers });
        Swal.fire({
          title: "New Task Added",
          timerProgressBar: top,
          icon: "success",
          timer: 2000,
          
        });
        console.log('Task added successfully', response.data);

        // Emit event to notify parent (TaskManager) about the added task
        this.$emit('taskAdded', response.data);

        // Clear form fields
        this.title = '';
        this.description = '';
      } catch (error) {
        Swal.fire({
          title: "Error while Adding Task !",
          timerProgressBar: top,
          icon: "error",
          timer: 3000,
          
        });
        console.error('Error adding task:', error.response.data);
      }
    },
  },
};
</script>
<style>
h2 {
  font-size: 3rem !important;
}
</style>

