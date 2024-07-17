<template>
    <div>
        <vertical v-if="layoutType === 'vertical'" :layout="layoutType">
            <slot/>
        </vertical>
        <horizontal v-if="layoutType === 'horizontal'" :layout="layoutType">
            <slot/>
        </horizontal>
    </div>
</template>
<script>
import { layoutComputed } from "@/state/helpers";
import Vertical from "./vertical.vue";
import Horizontal from "./horizontal.vue";

export default {
  components: { Vertical, Horizontal },
  computed: {
    ...layoutComputed,
  },
};
</script>
<style scoped>
/* Add styles if needed */
</style>
