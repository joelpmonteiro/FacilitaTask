<template>
  <div id="header">
    <CardUser />
  </div>
</template>

<script>
import CardUser from "@/components/CardUser.vue";
export default {
  name: "Header",
  components: {
    CardUser,
  },
};
</script>

<style scoped lang="stylus">
@import "~@/assets/font.styl"

blue=#2693FF
white=#FFFFFF
gray=#cccccc

#header
  display: flex
  justify-content: right
  align-items: center
  position: relative
  box-sizing: border-box
  background: white
  min-width: 100%
  height: 83px
  line-height: 83px
  box-shadow: 0px 0px 10px 0px rgba(0 0 0 0.05)
  z-index: 2
</style>
