<template>
  <div
    class="Desc"
    v-if="this.test.length !== undefined ? this.test.length : 0"
  >
    Olá <span class="Link">{{ this.usuario.user }}</span
    >, você tem
    <span class="Link">{{ this.test.length }} Tarefas</span>
    pendentes.
  </div>
  <div v-else class="Desc">
    Olá
    <span class="Link">{{ this.usuario.user }}</span>
    , você não tem
    <span class="Link">Tarefas</span>
    pendentes.
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "ContentUser",
  props: {
    jobslength: {
      type: [Array, String],
      required: true,
    },
  },
  data() {
    return {
      usuario: "",
    };
  },
  computed: {
    ...mapGetters(["getterJobs"]),
    test() {
      return this.jobslength.length > 0
        ? this.jobslength.filter((i, index) => {
            if (i.check === 0) return this.jobslength[index];
          })
        : 0;
    },
  },
  mounted() {
    this.usuario = JSON.parse(localStorage.getItem("login-facilita"));
  },
};
</script>
c
<style lang="stylus" scoped>
@import '~@/assets/css/MyTasks.styl'
</style>
