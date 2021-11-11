<template>
  <div :id="idJob" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <div class="modal-header">
        <span class="close"><a @click="close">&times;</a></span>
        <div class="modal-title">
          <span class="title">{{ titulo }}</span>
        </div>
      </div>
      <div class="modal-body">
        <form class="form">
          <div class="form-group column">
            <label class="label-radio">Titulo:</label>
            <input
              type="text"
              class="form-control"
              id="titulo"
              v-model.lazy="jobs.title"
              v-if="valor.title === undefined"
            />
            <input
              v-else
              type="text"
              class="form-control"
              id="titulo"
              v-model.lazy="alterJob.title"
            />
          </div>
          <div class="form-group column">
            <label class="label-radio">Descrição:</label>
            <textarea
              type="text"
              class="form-control textArea"
              id="descricao"
              v-model.lazy="jobs.description"
              v-if="valor.description === undefined"
            ></textarea>

            <textarea
              v-else
              type="text"
              class="form-control textArea"
              id="descricao"
              v-model.lazy="alterJob.description"
            ></textarea>
          </div>
          <div class="form-group row">
            <div class="item-flex grow1">
              <input
                type="radio"
                class="form-radio"
                id="selectOp"
                value="Urgente"
                v-model.lazy="jobs.typejob"
                v-if="valor.typejob === undefined"
              />
              <input
                v-else
                type="radio"
                class="form-radio"
                id="selectOp"
                value="Urgente"
                v-model="alterJob.typejob"
              />

              <label class="label-radio">Urgente</label>
            </div>
            <div class="item-flex grow1">
              <input
                v-if="valor.typejob === undefined"
                type="radio"
                class="form-radio item"
                id="selectOp"
                value="Importante"
                v-model="jobs.typejob"
              />
              <input
                v-else
                type="radio"
                class="form-radio item"
                id="selectOp"
                value="Importante"
                v-model="alterJob.typejob"
              />
              <label class="label-radio">Importante</label>
            </div>
            <div class="item-flex grow1">
              <button
                type="submit"
                class="form-btn"
                @click.prevent="create"
                v-if="btnTxt === 'Adicionar'"
              >
                <span class="btn-txt">{{ btnTxt }}</span>
              </button>
              <button
                type="submit"
                class="form-btn"
                @click.prevent.stop="updateJobs(alterJob)"
                v-else
              >
                <span class="btn-txt">{{ btnTxt }}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
//import { mapGetters } from "vuex";
export default {
  name: "createJob",
  props: {
    titulo: {
      type: String,
      default: "Cadastrar Tarefa",
    },
    idJob: {
      type: String,
      default: "job",
    },
    btnTxt: {
      type: String,
      default: "Adicionar",
    },
    valor: {
      type: [String, Object],
      required: true,
    },
  },

  data() {
    return {
      jobs: {
        check: 0,
        num: 0,
      },
      alterJob: {
        title: this.valor.title,
        description: this.valor.description,
        num: this.valor.num,
        typejob: this.valor.typejob,
        check: 0,
      },
      radioButton: {},
    };
  },
  // computed: {
  //   //...mapGetters(["getterJobsForChange"]),
  //   // test: function () {
  //   //   return this.valor !== undefined && this.valor !== ""
  //   //     ? this.$store.getters.getterJobsForChange(this.valor)
  //   //     : 0;
  //   // },
  // },
  methods: {
    create() {
      this.jobs.typejob === undefined ? (this.jobs.typejob = "nenhum") : "";
      this.jobs.check = 0;
      if (this.jobs.typejob === "Urgente") this.$set(this.jobs, `num`, 1);
      else if (this.jobs.typejob === "Importante")
        this.$set(this.jobs, `num`, 0);
      else this.$set(this.jobs, `num`, -1);
      this.$emit("send-to-data", this.jobs);
    },
    close() {
      const modalConfirmedTask = document.querySelector(`#${this.idJob}`);
      if (modalConfirmedTask.style.display === "block") {
        modalConfirmedTask.style.display = "none";
      }
    },
    updateTypeJob(task) {
      this.alterJob.typejob = `Importante`;
      this.$set(this.radioButton, 0, task);
    },
    updateJobs(task) {
      if (task.typejob === "Importante") task.num = 0;
      else if (task.typejob === "Urgente") task.num = 1;
      else task.num = -1;
      this.$emit(`send-to-data`, task);
    },
  },
  async updated() {
    // this.alterJob.check = this.getterJobsForChange.check;
    // this.alterJob.description = this.getterJobsForChange.description;
    // this.alterJob.num = this.getterJobsForChange.title;
    // this.alterJob.typejob = this.getterJobsForChange.typejob;
  },
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/css/form.styl'
@import "~@/assets/font.styl"

varWidth=10%
.form-group
  margin-left: 2em
  .form-control
    width:43.8em
    height: 50px;
    background: #FFFFFF
    border: 2px solid #BFDAEB
    box-sizing: border-box
    border-radius: 5px
  .textArea
    height:183px

.item-flex
  margin: 0 auto


.radius
  width:10px

body
  font-family: Arial, Helvetica, sans-serif

.title
  font-family: SVN-Gilroy
  font-style: normal
  font-weight: bold
  font-size: 25px
  line-height: 26px

.modal-title
  position: relative
  left: 5%;
  top: 2em;

.modal
  display: none
  position: fixed;
  z-index: 1
  padding-top: 100px
  // left: 0
  // top: 0
  left: 0;
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
  &:hover
    background-color: #808080

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
  width: 660px
  height: 488px
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
