<template>
  <div class="container mt-5">
    <h2>Login</h2>
    <form @submit.prevent="signin" class="mx-auto col-md-6">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          v-model="email"
          type="email"
          id="email"
          class="form-control"
          placeholder="example@gmail.com"
          required
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          v-model="password"
          type="password"
          id="password"
          class="form-control"
          placeholder="Password"
          required
        />
      </div>
      <button type="submit" class="text-white btn w-100" style="padding: 1rem; background: cornflowerblue; letter-spacing: 1pt;">LOGIN</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
    async signin() {
      try {
        // Call  backend API to handle login
        const response = await axios.post("/auth/signin", {
          email: this.email,
          password: this.password,
        });
        localStorage.setItem("token", response.data.token);
        // console.log("Login successful", response.data);
        this.login(response.data);
        // Redirect 
        Swal.fire({
          title: " Logged In Successfully!",
          timerProgressBar: true,
          icon: "success",
          timer: 2000,
        });
        this.$router.push("/tasks");
      } catch (error) {
        Swal.fire({
          title: error.response.data.message,
          timerProgressBar: true,
          icon: "error",
          timer: 3000,
        });
        console.error("Login failed", error.response.data.message);
        // Handle login error (show error message, etc.)
      }
    },
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
h2 {
  text-align: center;
  font-size: 4rem;
  font-family: Oswald
}

label {
  font-weight: 400;
  text-transform: uppercase;
}

input {
  padding: .4rem;
  outline-color: cornflowerblue;
}

*::placeholder {
  color: gray !important;
}

</style>
