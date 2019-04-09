<template>
    <table class="table">
      <thead class="table__header">
      <tr>
        <th class="table__cell">Name</th>
        <th class="table__cell">Phone</th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="{ id, name, phone } in filteredContacts" :key="id">
        <td class="table__cell name">{{ name }}</td>
        <td class="table__cell phone">{{ phone }}</td>
      </tr>
      </tbody>
    </table>
</template>


<script>
import db from '@/db';

export default {
  name: 'TheTable',
  props: {
    filter: String,
  },

  data() {
    return {
      contacts: db,
    };
  },

  computed: {
    filteredContacts() {
      if (!this.$route.query.name) return this.contacts;

      const stringToMatch = string => string.trim().toLocaleLowerCase();

      const queryName = stringToMatch(this.$route.query.name);
      return this.contacts.filter(({ name }) => stringToMatch(name).includes(queryName));
    },
  },
};
</script>


<style scoped>
.table {
  border-collapse: collapse;
}

.table,
.table__cell {
  border: 1px solid black;
}

.table__cell {
  padding: 5px;
}

.table__header {
  background-color: lightblue;
}

.name {
  text-align: left;
}

.phone {
  text-align: right;
}

</style>
