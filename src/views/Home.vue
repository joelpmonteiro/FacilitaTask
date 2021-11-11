<template>
  <div class="container row">
    <rectangle msg="Welcome to Your Vue.js App" />
    <layer class="item" />
  </div>
</template>

<script>
import rectangle from "@/components/RectangleFacilita.vue";
import layer from "@/components/layerTemplateLogin.vue";
export default {
  name: "Home",
  components: {
    rectangle,
    layer,
  },
};
</script>
<style lang="stylus" scoped>
.row
  flex-direction: row

.container
	margin: 0 auto
	display: flex

.item
	flex: 1
</style>
