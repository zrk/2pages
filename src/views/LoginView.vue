<template>
  <div class="login-view">

    <Login class="login-view__form" />

    <p class="login-view__comment">
      Try
      email: <b>{{ properEmail }}</b>,
      password: <b>{{ properPassword }}</b>
    </p>

  </div>
</template>


<script>
import Login from '@/components/Login.vue';
import { properEmail, properPassword } from '@/mockAPI';

export default {
  name: 'LoginView',
  components: {
    Login,
  },
  data() { return { properEmail, properPassword }; },
};
</script>


<style>
.login-view {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}

.login-view__comment{
  text-align: center;
}

.login-view__form {
  border: 2px solid;
  padding: 10px;
}
</style>
