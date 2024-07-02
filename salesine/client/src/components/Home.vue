<template>
  <div class="container ">
    <h1 class="mt-5 mb-5" style="font-size: 4rem;">Welcome!</h1>
    <div>
    <main>
      <router-link to="/login" class="btn">Login</router-link>
      <router-link to="/signup" class="btn">Signup</router-link>
    </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
.container {
  display: flex ;
  flex-direction: column;
  justify-content: center;
  text-align: center;
} 

h1 {
  font-family: 'Oswald';
  font-size: 4rem
}

main {
  margin: auto;
}

.btn {
  margin: 1vw;
  font-family: Oswald;
  text-transform: uppercase;
  letter-spacing: 3pt;
  font-size: 2rem;
  padding: 1rem 2rem;
  border: .1rem solid #555;
  transition: .4s all;
}

.btn:hover {
  box-shadow: 0 0.25em 0.25em -0.1em #5555;
  transform: translateY(-0.25em); 
}

@media screen and (max-width: 991px) {
  .btn {
    width: 50% !important;
    font-size: 1.5rem;
    margin-top: 2vh;
  }
}

</style>
