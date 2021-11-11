<template>
  <div id="leftBar">
    <div class="Category">
      <h1>Categorias</h1>
      <ul class="List">
        <a @click.prevent="goToRouter">
          <li class="ListItems Active">
            <font-awesome-icon icon="fa-solid fa-angle-right" /> Todas
          </li>
        </a>
        <router-link :to="{ path: '/Tasks/1/0' }">
          <li class="ListItems">
            <font-awesome-icon icon="fa-solid fa-angle-right" /> Urgentes
            <span class="Urgente">{{ getQuantifyJobs[0].length }}</span>
          </li>
        </router-link>
        <router-link :to="{ path: '/Tasks/0/0' }">
          <li class="ListItems">
            <font-awesome-icon icon="fa-solid fa-angle-right" /> Importantes
            <span class="Importante">{{ getQuantifyJobs[1].length }}</span>
          </li>
        </router-link>
        <router-link :to="{ path: '/Tasks/-1/0' }">
          <li class="ListItems">
            <font-awesome-icon icon="fa-solid fa-angle-right" /> Outras
          </li>
        </router-link>
        <router-link :to="{ path: '/Tasks/check/1' }">
          <li class="ListItems">
            <font-awesome-icon icon="fa-solid fa-angle-right" /> Finalizadas
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "leftBar",
  methods: {
    menuLeft(index) {
      this.$store.commit("menuLeft", index);
    },
    goToRouter() {
      this.$router.push({ name: `Tasks` });
    },
  },
  computed: {
    ...mapGetters(["getterJobsQuantify"]),
    getQuantifyJobs() {
      return [this.getterJobsQuantify(1), this.getterJobsQuantify(0)];
    },
  },
};
</script>

<style scoped lang="stylus">
@import "~@/assets/font.styl"

blue=#2693FF
white=#FFFFFF
gray=#cccccc
lightblue=#F4FBFF
h1Category=#4E5F70
Urgente=#FF2E79
Importante=#FFC42E
HoverBlue=#1a66b2
a
  text-decoration: none;

#leftBar
  position: relative
  box-sizing: border-box
  background: lightblue
  width: 300px
  height: 100%
  box-shadow: 0px 0px 10px 0px rgba(0 0 0 0.05)
  .Category
    position: absolute
    top: calc(50% - 177px)
    width: 100%
    height: auto
    padding: 0 0 0 47px
    h1 {
      position: relative
      width: 100%
      height: 70px
      line-height: 30px
      font-size: 1.3em
      font-weight: bold
      color: h1Category
    }
    .ListItems
      display: flex
      position: relative
      width: 100%
      height: 45px
      line-height: 45px
      font-size: 1em
      transition: 2s
      svg
        position: relative
        top: 17px
        font-size: .8em
        padding-right: 15px
      &:hover
        color: blue
        cursor: pointer
        transition: 0.5s
      &.Active
        color: blue
        &.Active:hover
          color: HoverBlue
      span
        position: relative
        top: calc(50% - 10px)
        left: 5px
        width: 20px
        height: 20px
        font-size: .7em
        font-weight: bold
        color: white
        line-height: 20px
        text-align: center
        border-radius: 100%
        &.Urgente
          background: Urgente
        &.Importante
          background: Importante
</style>
