<template>
  <div class="data">
    <QueryParamInput
      param="name"
      class="filter"
      placeholder="Filter by Name"/>
    <TheTable :filter="$route.query.name"/>
  </div>
</template>


<script>
import TheTable from '@/components/TheTable.vue';
import QueryParamInput from '@/components/QueryParamInput.vue';

export default {
  name: 'DataView',
  components: {
    QueryParamInput,
    TheTable,
  },
};
</script>


<style>
.filter {
  margin: 20px 0;
}
</style>
