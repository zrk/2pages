<template>
  <input type="search" v-model="value" />
</template>


<script>
export default {
  name: 'QueryParamInput',
  props: {
    param: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      value: this.$route.query[this.param],
    };
  },

  watch: {
    value() {
      this.$router.replace({ query: { ...this.$route.query, [this.param]: this.value } });
    },
  },
};
</script>
