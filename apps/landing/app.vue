<template>
  <div>
    <MyButton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Button } from "ui";

export default defineComponent({
  components: {
    MyButton: Button,
  },
});
</script>
