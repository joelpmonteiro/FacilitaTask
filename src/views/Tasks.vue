<template>
  <div class="container row">
    <Nav />
    <LayoutContent />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import LayoutContent from "@/components/LayoutContent.vue";
export default {
  name: "Tasks",
  components: {
    Nav,
    LayoutContent,
  },
};
</script>

<style lang="stylus" scoped>


.row
  flex-direction: row
  overflow: hidden

.container
	margin: 0 auto
	display: flex

.item
	flex: 1
</style>
