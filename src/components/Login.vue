<template>
  <div class="login">

    <InputField
      v-model="email"
      name="email"
      label="Email"
      :validation="emailValidation"
      :do-validate="isOnceSubmitted"
    />

    <InputField
      type="password"
      v-model="password"
      name="password"
      label="Password"
      :validation="passwordValidation"
      :do-validate="isOnceSubmitted"
    />

    <button
      :disabled="!isSubmitEnabled"
      @click="submit"
    >
      Log In
    </button>

  </div>
</template>

<script>
import InputField from './InputField.vue';

export default {
  name: 'Login',

  components: {
    InputField,
  },

  data() {
    return {
      isOnceSubmitted: false,

      email: '',
      emailValidation: {
        check: (value) => {
          // Email validation from Vue Cookbook
          // https://vuejs.org/v2/cookbook/form-validation.html#Using-Custom-Validation
          // eslint-disable-next-line
          const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(value);
        },
        errorMessage: 'Invalid email address',
      },

      password: '',
      passwordValidation: {
        check: value => value.length >= 6,
        errorMessage: 'Password must be at least 6 characters',
      },
    };
  },

  computed: {
    isSubmitEnabled() { return !this.isOnceSubmitted || (this.email && this.password); },
  },

  methods: {
    submit() {
      this.isOnceSubmitted = true;

      // TODO: Actions on submit
    },
  },
};
</script>
