<template>
  <div id="task" class="modal">
    <div class="modal-content">
      <div class="modal-header"></div>
      <div class="modal-body">
        <div class="modal-icon">
          <i class="fa fa-trash-o font-size" v-if="value === 0"></i>
          <i class="fa fa-times font-size" v-else></i>
        </div>
        <div class="modal-text" v-if="value === 0">
          Tem certeza que deseja <span class="txt-color">excluir</span> esta
          tarefa?
          <p class="paragraph">Esta ação não poderá ser desfeita.</p>
        </div>
        <div class="modal-text" v-else>
          {{ msg }}
        </div>
        <div class="buttonTask row">
          <div class="item">
            <button
              class="btn btn-primary"
              @click.prevent="close"
              v-if="value === 0"
            >
              <span>Cancelar</span>
            </button>
          </div>
          <div class="item">
            <button
              class="btn btn-secondary"
              :class="value === 1 ? 'btn1' : ''"
              @click.prevent="eventBtn(value)"
            >
              <span>{{ txtBtn }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "task",
  props: {
    msg: {
      type: String,
    },
    value: {
      type: Number,
      default: 0,
    },
    txtBtn: {
      type: String,
      default: "Confirmar",
    },
  },
  mounted() {},
  methods: {
    close() {
      const modalConfirmedTask = document.querySelector("#task");
      if (modalConfirmedTask.style.display === "block") {
        modalConfirmedTask.style.display = "none";
      }
    },
    eventBtn(value) {
      const modalConfirmedTask = document.querySelector("#task");

      if (value === 1) modalConfirmedTask.style.display = "none";
      else this.$emit("send-value-delete", { delete: 1 });
    },
  },
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/css/form.styl'
@import "~@/assets/font.styl"

.btn1
  margin-right: 70px

.item
  margin: 5px;

button > span
  color: white
  font-family: SVN-Gilroy
  font-style: normal
  font-weight: 600
  font-size: 15px
  line-height: 16px

colorTxtModal=red
colorP=#475E78
colorGreen=#1AD18F

.btn
  width: 118.31px
  &-secondary
    background-color: colorTxtModal
  &-primary
    background-color:colorGreen

.buttonTask
  max-width: 100%
  margin: 0 auto
  display:flex
  width: 20em;



.paragraph
  margin: 0.4em
  font-family: SVN-Gilroy
  font-style: normal
  font-weight: 600
  font-size: 15px
  line-height: 16px
  text-align: center
  color:colorP

.txt-color
  color: colorTxtModal

.modal-text
  margin-top:9rem
  font-family: SVN-Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 21px;
  text-align: center;
  color: #283848;

.modal-icon
  position: absolute
  border-radius: 70px
  background: #edf6fc
  top: 2.8em
  left: 173.5px
  height: 136px

.font-size
  margin:0.4em 0.5em
  font-size: 75px
  color: #4A6583


.modal-title
  position: relative
  left: 5%;
  top: 2em;

.modal
  display: none
  position: fixed
  z-index: 999
  padding-top: 210px
  left: 0
  top: 0
  width: 100%
  height: 100%
  overflow: auto
  background-color: rgb(0,0,0)
  background-color: rgba(0,0,0,0.4)

.close
  color: black
  float: right
  font-size: 28px
  font-weight: bold

.modal-header
  padding:2px 16px

.modal-body
  padding:2px 5px
  left: 5em;
  padding-top: 40px;

.modal-footer
  padding:2px 16px
  background-color:#5cb85c
  color: white

.modal-content
  position: relative
  background-color:#fefefe
  margin: auto
  padding: 0
  border: 1px solid #888
  width: 477px
  height: 345px
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)
  -webkit-animation-name: animtationFrame
  -webkit-animation-duration: 0.4s
  animation-name: animtationFrame
  animation-duration: 0.4s
  border-radius: 15px

@-webkit-keyframes animatetop {
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
}

@keyframes animtationFrame{
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
}
</style>
