<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <span
      >test <span style="color: blue">{{ count }}</span></span
    >
    <button
      @click="increment"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      inc
    </button>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
};
</script>
