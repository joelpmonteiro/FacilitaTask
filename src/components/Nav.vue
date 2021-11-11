<template>
  <div id="nav">
    <div class="Icon">
      <div class="IconVerify"></div>
    </div>
    <!-- -->
    <ul class="NavList">
      <li class="NavItem Active">
        <div class="Item">
          <font-awesome-icon icon="fa-solid fa-chart-line" />
          <br />
          Dashboard
        </div>
      </li>
      <li class="NavItem">
        <div class="Item">
          <font-awesome-icon icon="fa-solid fa-circle-check" />
          <br />
          Tarefas
        </div>
      </li>
      <li class="NavItem">
        <div class="Item">
          <font-awesome-icon icon="fa-solid fa-gears" />
          <br />
          Configurações
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped lang="stylus">
@import "~@/assets/font.styl"

blue=#2693FF
white=#FFFFFF
navItemActiveFill=#1182F2
navItemActiveStroke=#46A3FF
navItemFill=#2693FF
navItemStroke=#46A3FF
HoverBlue=#1a66b2

#nav
  position: relative
  box-sizing: border-box
  background: blue
  width: 110px
  height: 100vh
  .Icon
    position: absolute
    top: 25px
    left: calc(50% - 26px)
    width: 50px
    height: 50px
    background: url('../assets/min-logo.png') center center
    background-size: cover
    z-index: 1
    .IconVerify
      position: absolute
      top: -5px
      left: 36px
      width: 19px
      height: 13.84px
      background: url('../assets/min-logo-verify.png') center center
      background-size: cover
      z-index: 2
  .NavList
    display: flexbox
    justify-content: center
    justify-items: center
    align-items: center
    align-content: center
    position: relative
    top: calc(50% - 135px)
    width: 100%
    height: 100%
    .NavItem
      display: flex
      justify-content: center
      justify-items: center
      align-items: center
      align-content: center
      position: relative
      width: 100%
      height: 90px
      font-size: .8em
      color: white
      background: navItemFill
      border: 1px solid navItemStroke
      transition: 1s
      &.Active
        background: navItemActiveFill
        border: 1px solid navItemActiveStroke
        &.Active:hover
          background: HoverBlue
      &:hover
        background: navItemActiveFill
        border: 1px solid navItemActiveStroke
        cursor: pointer
        transition: .3s
      &:nth-child(2)
        border-top: none
        border-bottom: none
      .Item
        width: 90%
        text-align: center
        color: white
        svg
          position: relative
          color: white
          font-size: 2em
          margin-bottom: 5px
</style>
