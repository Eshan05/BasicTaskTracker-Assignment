<!--
* Fast Secure Task Tracker Assignment
! Frontend (Vue)
  - Login.vue, Signup.vue, Tasklist.vue, TaskForm.vue all included
  - Vue router used for routing and require authentication
  - Used Axios for API calls
  - Implemented TaskFormt to allow users to add new tasks to mongodb
! Backend (Nest/MongoDB)
  - nest new project
  - validate with JWT
  - Used Axios for API calls
  - Implemented TaskService, TaskController to allow users to add new tasks to mongodb
  - Implemented TaskUpdate to allow users to update tasks in mongodb
  - as sir said we don't have to deploy to heroku I haven't. 

? NOTE:
  In update task button you have to click precisely in order to go to TaskUpdate.vue, try clicking in middle of Update and icon on desktop, on mobile there are no issues.
-->

<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light sticky-top ">
      <div class="container">
        <router-link to="/" class="navbar-brand"><strong>Task Tracker</strong></router-link>
        <button style="border: none;"
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto">
            <li v-if="!isAuthenticated" class="nav-item">
              <router-link to="/login" class="nav-link text-uppercase">Login</router-link>
            </li>
            <li v-if="!isAuthenticated" class="nav-item">
              <router-link to="/signup" class="nav-link text-uppercase">Signup</router-link>
            </li>
            <li v-if="isAuthenticated " class="nav-item">
              <button @click="logout" class="nav-link text-uppercase">Logout</button>
            </li>
          </ul>
        </div> 
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters( ['isAuthenticated']),
  },
  created() {
    this.$store.dispatch('initAuth')
  },
  methods: {
    async logout() {   
      await this.$store.dispatch('logout');
    },
    ...mapActions( ['logout']),
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playwrite+FR+Moderne&display=swap');
@media screen and (min-width: 991px) {
  nav {
    background: #aaa4;
    margin: 1vw 25%;
    border-radius: 2vw;
    padding: .5vw 2vw !important;
    border: #4a4a4a4a solid;
    backdrop-filter: filter(1vw);
  } 
}

@media screen and (max-width: 990px) {
  nav {
    background: #aaa4;
    margin: 2vw;
    border-radius: 3vw;
    padding: 2vw !important;
    border: #4a4a4a4a solid;
    backdrop-filter: filter(1vw);
  } 
}

.navbar-brand {
    font-size: 1.33rem;
    font-family: 'Playwrite FR Moderne';
    font-variant: small-caps;
    letter-spacing: 1pt;
  }

  .orb1,
  .orb2 {
    
  }
</style>
