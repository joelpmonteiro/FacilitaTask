<template>
  <div id="MyTasks">
    <div class="Title">Minhas Tarefas</div>
    <content-user :jobslength="jobslengths"></content-user>
    <confirmTask
      :msg="msg"
      :value="valorDelete === 1 ? valor : valorDelete"
      :txtBtn="'OK'"
      @send-value-delete="deleteTask"
    ></confirmTask>

    <div class="Search">
      <form action="">
        <input
          type="text"
          name="Search"
          placeholder="Buscar Tarefas"
          v-model="searchItem"
        />
        <button class="SubmitSearch">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </button>
      </form>
    </div>

    <div class="GridList">
      <!-- Atenção na classe de Item Checado -->

      <div
        class="ItemList"
        v-for="(value, index) in $route.name === 'Tasks'
          ? listByTitleAndDescri
          : $route.name === 'Jobs'
          ? filtringJobs
          : ``"
        :class="value !== undefined && value.check === 1 ? 'ItemChecked' : ''"
        :key="index"
      >
        <div class="ItemCheck">
          <input
            v-if="value !== undefined && value.check === 1"
            :checked="true"
            type="checkbox"
            class="CheckTask"
            @change="taskCompleted(value, index, 'remove')"
          />
          <input
            v-else
            type="checkbox"
            class="CheckTask"
            :value="index"
            v-model.lazy="checkBox"
            @change="taskCompleted(value, index, 'insert')"
          />
        </div>
        <changeJob
          @send-to-data="alterTask"
          :key="componentKey"
          :titulo="'Alterar Tarefa'"
          :idJob="'job_' + index"
          :btnTxt="'Alterar'"
          :valor="value"
        ></changeJob>

        <div
          class="ItemName"
          :class="
            value !== undefined && value.check === 1 ? 'ItemNameChecked' : ''
          "
        >
          {{ value !== undefined ? value.title : "" }}
        </div>
        <div class="ItemTag">
          <span
            class="Urgente"
            v-if="value !== undefined && value.typejob === 'Urgente'"
            >{{ value !== undefined ? value.typejob : "" }}</span
          >
          <span
            class="Importante"
            v-else-if="value !== undefined && value.typejob === 'Importante'"
            >{{ value !== undefined ? value.typejob : "" }}</span
          >
          <span class="" v-else>{{
            value !== undefined ? value.typejob : ""
          }}</span>
          <!-- <span
            :class="
              value.typejob === 'Importante'
                ? 'Importante'
                : value.typejob === 'Urgente'
                ? 'Urgente'
                : ''
            "
          >
            {{ value.typejob }}
          </span> -->
        </div>
        <a @click.prevent="openMiniModal('_' + index)">
          <div class="ItemTools">
            <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
          </div>
        </a>

        <div :class="'Tools _' + index">
          <ul>
            <li class="ListTools">
              <font-awesome-icon icon="fa-solid fa-circle" />
              <a @click.prevent.stop="openModalEdit(index, `job_${index}`)"
                >Editar</a
              >
            </li>
            <li class="ListTools">
              <font-awesome-icon icon="fa-solid fa-circle" />
              <a @click.prevent="confirmeDelete(index)">Excluir</a>
            </li>
          </ul>
          <a @click.prevent="closeMiniModal">
            <div class="CloseTools">
              <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import contentUser from "@/components/Content/ContentUser.vue";
import confirmTask from "@/components/Modal/ConfirmTask";
import changeJob from "@/components/Modal/CreateJob.vue";
import { mapGetters } from "vuex";

export default {
  name: "MyTasks",
  components: {
    confirmTask,
    contentUser,
    changeJob,
  },
  props: {
    listJobs: {
      type: [Array, Object],
      required: true,
    },
    msg: {
      type: String,
      required: true,
    },
    valor: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      searchItem: "",
      deleteItem: 0,
      checkBox: [],
      isChecked: true,
      componentKey: 0,
      alterItem: {},
      itemIndex: 0,
      isboolean: false,
      routerId: this.$route.params.id,
      test: [],
      valorDelete: 1,
    };
  },

  // beforeMount() {
  //   this.listJobs.sort((a, b) => b.num - a.num);
  // },
  computed: {
    ...mapGetters(["getterJobs"]),
    listByTitleAndDescri() {
      return this.getterJobs.filter((item) => {
        this.getterJobs.sort((a, b) => b.num - a.num);

        return (
          item.title?.toLowerCase()?.match(this.searchItem) ||
          item.description?.toLowerCase()?.match(this.searchItem)
        );
      });
    },
    jobslengths() {
      return this.getterJobs;
    },
    filtringJobs() {
      return this.$route.params?.check != 1
        ? this.getterJobs.filter((item) => {
            this.getterJobs.sort((a, b) => b.num - a.num);

            return (
              item.num == this.$route.params.id &&
              item.check !== 1 &&
              item.title.toLowerCase().match(this.searchItem)
            );
          })
        : this.getterJobs.filter((item) => {
            this.getterJobs.sort((a, b) => b.num - a.num);

            return (
              item.check == this.$route.params.check &&
              item.title.toLowerCase().match(this.searchItem)
            );
          });
    },
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;
    },

    async openModalEdit(index, job) {
      document.querySelector(".ToolsOn").classList.remove("ToolsOn");

      const jobId = document.querySelector(`#${job}`);
      jobId.style.display = "block";
      this.alterItem = this.listJobs[index];
      this.itemIndex = index;
      this.$store.commit("jobForChange", this.getterJobs[index]);
      this.isboolean = true;
    },
    alterTask(task) {
      if (
        task.title !== undefined &&
        task.title !== "" &&
        task.description !== undefined &&
        task.description !== ""
      ) {
        this.$set(this.listJobs, this.itemIndex, task);
        this.$store.commit("updateItem", { index: this.itemIndex, task });
        localStorage.setItem("jobs", JSON.stringify(this.listJobs));
        this.forceRerender();
        task = {};
      }
    },
    confirmeDelete(task) {
      this.valorDelete = 0;
      this.deleteItem = task;
      const modalConfirmedTask = document.querySelector("#task");
      modalConfirmedTask.style.display = "block";
      setTimeout(() => {
        document.querySelector(".ToolsOn").classList.remove("ToolsOn");
      }, 800);
    },
    taskCompleted(value, index, action) {
      if (action === "insert") {
        const task = { ...value, check: 1 };
        this.$set(this.listJobs, index, task);
        this.$store.commit("updateItem", { index, task });
        localStorage.setItem("jobs", JSON.stringify(this.listJobs));
      } else {
        const task = { ...value, check: 0 };
        this.$set(this.listJobs, index, task);
        this.$store.commit("updateItem", { index, task });
        localStorage.setItem("jobs", JSON.stringify(this.listJobs));
      }
    },
    deleteTask(value) {
      const modalConfirmedTask = document.querySelector("#task");
      if (value.delete === 1) {
        this.$delete(this.listJobs, this.deleteItem);
        this.$store.commit("deleteItem", this.deleteItem);
        localStorage.setItem("jobs", JSON.stringify(this.listJobs));
        modalConfirmedTask.style.display = "none";
        this.valorDelete = 1;
      }
    },
    openMiniModal(modal) {
      const miniModal = document.querySelector("." + modal);
      if (!miniModal.classList.contains("ToolsOn"))
        miniModal.classList.toggle("ToolsOn");
      else miniModal.classList.remove("ToolsOn");
    },
    closeMiniModal() {
      const modal = document.querySelector(".ToolsOn");
      modal.classList.remove("ToolsOn");
    },
  },
};
</script>

<style scoped lang="stylus">
@import '~@/assets/css/MyTasks.styl'
@import "~@/assets/font.styl"
</style>
