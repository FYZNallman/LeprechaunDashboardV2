<template>
    <div>
        <header>Header</header>
        <main>
            <slot></slot>
        </main>
        <footer>Footer</footer>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'Layout',
  computed: {
    ...mapState('layout', {
      layoutType: state => state.layoutType,
      layoutWidth: state => state.layoutWidth,
      leftSidebarType: state => state.leftSidebarType,
      topbar: state => state.topbar,
      mode: state => state.mode,
      loader: state => state.loader,
    }),
  },
};
</script>
<style scoped>
/* Add styles if needed */
</style>
