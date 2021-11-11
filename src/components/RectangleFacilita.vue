<template>
  <div id="nav">
    <div class="Icon">
      <div class="IconVerify"></div>
      <!-- <div><strong class="">FACILITA</strong></div> -->
    </div>
    <div class="section column">
      <span class="item spanFacilita mr">FACILITA</span
      ><span class="item spanFacilita">TASKS</span>
    </div>
    <div class="section column">
      <span class="item people">Gestão de tarefas pessoais</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "rectangle",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '~@/assets/css/RectangleFacilita.styl'
@import "~@/assets/font.styl"
</style>
