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
