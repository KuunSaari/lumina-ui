<script setup lang="ts">
import { ref } from 'vue';
const args = ref(['a'])
</script>

<template>
  <div class="test-app">
    <lu-button type="danger" plain>
      HelloWorld!
    </lu-button>
    <lu-collapse v-model="args" accordion>
      <lu-collapse-item name="a" title="How does billing work?">
        <div>You'll be charged once a year $499.00USD.</div>
      </lu-collapse-item>
      <lu-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </lu-collapse-item>
      <lu-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </lu-collapse-item>
    </lu-collapse>
  </div>
</template>

<style lang="scss" scoped>
.test-app {
  padding: 60px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
