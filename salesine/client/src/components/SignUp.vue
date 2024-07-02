<template>
    <div class="container mt-5">
      <h2>Signup</h2>
      <form @submit.prevent="signup" class="mx-auto col-md-6">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input v-model="name" type="text" id="name" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input v-model="email" type="email" id="email" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input v-model="password" type="password" id="password" class="form-control" required />
        </div>
        <button type="submit" class="text-white btn w-100" style="padding: 1rem; background: cornflowerblue; letter-spacing: 1pt;">SIGNUP</button>
      </form>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
import axios from 'axios';
import Swal from 'sweetalert2';
  
  export default {
    name: "SignUpView",
    data() {
      return {
        name: "",
        email: "",
        password: "",
      };
    },
    methods: {
      ...mapActions(['login']),
      async signup() {
        
        try {
        const response = await axios.post('/auth/signup', {
          name: this.name,
          email: this.email,
          password: this.password,
        });
            console.log('Signup successful', response.data);
            this.login(response.data);
            Swal.fire({
          title: response.data.message || "User Registered Successfully !",
          timerProgressBar: top,
          icon: "success",
          timer: 200,
          
        });
        // Redirect 
        this.$router.push('/login');
        
          } catch (error) {
            Swal.fire({
          title: error.response.data.message || "Sign-Up Failed",
                timerProgressBar: toolbar,
          icon: "error",
          timer: 3000,
          
        });
        console.error('Signup failed', error.response.data);
        // Handle signup error (show error message, etc.)
      }

      },
    },
  };
  </script>
  
  