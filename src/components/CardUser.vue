<template>
  <div id="CardUser">
    <div class="ImgProfile"></div>
    <div class="UserDetails">
      <div class="Name">{{ usuario.user }}</div>
      <div class="Office">Front-end Developer</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardUser",
  data() {
    return {
      usuario: "",
    };
  },
  mounted() {
    this.usuario = JSON.parse(localStorage.getItem("login-facilita"));
  },
};
</script>

<style scoped lang="stylus">
@import "~@/assets/font.styl"

blue=#2693FF
white=#FFFFFF
gray=#cccccc
txtDark=#283848
txtLight=#2693FF

#CardUser
  display: flex
  justify-content: center
  align-items: center
  position: relative
  box-sizing: border-box
  width: 280px
  height: 55px
  line-height: 55px
  padding: 5px
  margin-right: 50px
  .ImgProfile
    width: 43px
    height: 43px
    background: url('../assets/users/FernandoPereiraDaCosta.png') center center
    background-size: cover
    border-radius: 100%
  .UserDetails
    width: calc(100% - 50px)
    height: 55px
    line-height: 55px
    padding: 5px 0 0 5px
    .Name
      position: relative
      width: 100%
      height: 25px
      line-height: 33px
      color: txtDark
      font-size: 1em
    .Office
      position: relative
      width: 100%
      height: 25px
      line-height: 15px
      color: txtLight
      font-size: .9em
</style>
