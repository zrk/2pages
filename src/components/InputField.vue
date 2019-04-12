<template>
  <div
    class="field"
    :class="{ error }"
  >

    <label v-if="label" :for="name" class="field__label">
      {{ label }}
    </label>

    <div class="field__input-zone">
      <input
        v-model="inputValue"
        :type="type"
        :name="name"
        :id="name"
        :value="value"
        @input="input"
        @blur="isBlured = true"
        class="field__input"
      />

      <div v-show="error" class="field__error">
        {{ error }}
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'InputField',
  props: {
    value: String, // required for using <inputField v-model="...">
    type: { type: String, default: 'text' },
    name: { type: String, required: true },
    label: String,
    validation: Object,
    doValidate: Boolean,
  },

  data() {
    return {
      inputValue: this.value,
      isDirty: false,
      isBlured: false,
    };
  },

  computed: {
    isValidationPending() {
      return this.doValidate || (this.isDirty && this.isBlured);
    },

    isValid() {
      if (!this.validation) return true;
      return this.validation.check(this.inputValue);
    },

    error() {
      return this.isValidationPending && !this.isValid
        ? this.validation.errorMessage
        : null;
    },
  },

  methods: {
    input(event) {
      this.isDirty = true;
      const value = this.isValid ? event.target.value : '';
      this.$emit('input', value);
    },
  },
};
</script>


<style lang="scss">
.field {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
}

.field__label {
  flex: 0 0 120px;
}

.field__input-zone {
  flex: 1 1;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.field__input {
  border: 1px solid;
  padding: 5px;
}

.field__input,
.field__error {
  margin-left: 5px;
}

.error {
  .field__input {
    border-color: red;
  }
  .field__error {
    font-size: small;
    color: red;
  }
}
</style>
