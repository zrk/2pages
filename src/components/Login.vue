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

    <div v-show="error" class="login__error">
      {{ error }}
    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
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
    ...mapState({
      stateError: 'error',
      isLoggedIn: 'loggedIn',
      isLoading: 'isLoggingIn',
    }),

    isFormValid() { return this.email && this.password; },
    isSubmitEnabled() { return (!this.isOnceSubmitted || this.isFormValid) && !this.isLoading; },

    error() {
      if (this.stateError) return this.stateError;
      if (this.isOnceSubmitted && !this.isFormValid) return 'Please fill in correct email and password';
      return '';
    },
  },

  methods: {
    ...mapActions(['login']),

    async submit() {
      this.isOnceSubmitted = true;

      if (!this.isFormValid) return;

      try { await this.login({ email: this.email, password: this.password }); }
      catch { return; }

      this.$router.push('data');
    },
  },
};
</script>
