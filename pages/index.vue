<template>
  <Test />
</template>

<script lang="ts">
import Vue from "vue";
import Test from "~/components/Test.vue";

export default Vue.extend({
  name: "IndexPage",
  components: { Test },
});
</script>
