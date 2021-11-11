<template>
  <div id="layCont">
    <Header />
    <div class="gridCont">
      <LeftBar />
      <Content />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import LeftBar from "@/components/LeftBar.vue";
import Content from "@/components/Content.vue";

export default {
  name: "LayoutContent",
  components: {
    Header,
    LeftBar,
    Content,
  },
};
</script>

<style scoped lang="stylus">
@import "~@/assets/font.styl"

blue=#2693FF
white=#FFFFFF
Gray=#cccccc
backblue=#E9F4FB

#layCont
  display: block
  position: relative
  box-sizing: border-box
  background: backblue
  width: 100vw
  height: 100vh
  .gridCont
    display: flex
    position: relative
    box-sizing: border-box
    width: 100%
    height: calc(100vh - 90px)
</style>
