<template>
  <div id="content">
    <MyTasks :listJobs="jobs" :msg="msg" :valor="value" />
    <a @click.prevent="openModal">
      <div class="ButtonCreateTask">
        <font-awesome-icon icon="fa-solid fa-plus" />
      </div>
    </a>

    <create-job
      @send-to-data="createTasks"
      :key="componentKey"
      :idJob="'create'"
      :valor="{}"
    ></create-job>
  </div>
</template>

<script>
import MyTasks from "@/components/MyTasks.vue";
import createJob from "@/components/Modal/CreateJob.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Content",
  components: {
    MyTasks,
    createJob,
  },
  data() {
    return {
      jobs: [],
      msg: "",
      value: 0,
      componentKey: 0,
      test: [],
    };
  },
  mounted() {
    this.searchLocalStorage();
  },
  beforeMount() {
    this.jobs.sort((a, b) => b.num - a.num);
  },
  methods: {
    ...mapActions(["jobsList"]),
    ...mapGetters([`getterJobs`]),
    //...mapMutations([`newJobMut`]),
    forceRerender() {
      this.componentKey += 1;
    },
    searchLocalStorage() {
      if (JSON.parse(localStorage.getItem("jobs"))) {
        this.jobs = JSON.parse(localStorage.getItem("jobs"));
        this.jobs.sort((a, b) => b.num - a.num);
      }
    },
    openModal() {
      const createModalTask = document.querySelector("#create");
      createModalTask.style.display = "block";
    },
    createTasks(task) {
      const modalConfirmedTask = document.querySelector("#task");
      if (task !== undefined) {
        const success = document.querySelector("#create");
        if (
          task.title !== undefined &&
          task.title !== "" &&
          task.description !== undefined &&
          task.description !== ""
        ) {
          this.jobs.push({ ...task }); //this.jobs.push(task);
          //Ordena array
          this.jobs.sort((a, b) => b.num - a.num);
          this.jobsList(task);

          localStorage.setItem("jobs", JSON.stringify(this.jobs));
          success.style.display = "none";
          this.forceRerender();
        } else {
          this.msg =
            "Erro ao adicionar a tarefa, atualize a pagina e tente novamente!";
          this.value = 1;

          modalConfirmedTask.style.display = "block";
        }
      } else {
        this.msg =
          "Erro ao adicionar a tarefa, atualize a pagina e tente novamente!";
        this.value = 1;

        modalConfirmedTask.style.display = "block";
      }
    },
    // numberForOrdenar(test) {
    //   if (test.typejob === "Urgente") return 1;
    //   else if (test.typejob === "Importante") return 0;
    //   else return -1;
    // },
  },
};
</script>

<style scoped lang="stylus">
@import "~@/assets/font.styl"

blue=#2693FF
white=#FFFFFF
gray=#cccccc
lightblue=#F4FBFF
backblue=#E9F4FB

#content
  display: flex
  justify-content: center
  justify-items: center
  align-content: center
  align-items: center
  position: relative
  box-sizing: border-box
  background: backblue
  width: 100%
  height: 100%
  .ButtonCreateTask
    position: absolute
    bottom: 20px
    right: 25px
    width: 77px
    height: 77px
    border-radius: 100%
    background: #1AD18F
    color: white
    font-size: 2em
    line-height: 77px
    text-align: center
    z-index: 4
    &:hover
      background: #0ED984
      cursor: pointer
</style>
