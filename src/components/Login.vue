<template>
  <div class="login">

    <h1>WORK IN PROGRESS!</h1>

    <label for="email">Email</label>
    <input type="text" name="email" id="email" />

    <label for="password">Password</label>
    <input type="password" name="password" id="password" />

  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    msg: String,
  },
};
</script>
