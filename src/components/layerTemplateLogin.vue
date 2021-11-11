<template>
  <div class="section">
    <form class="form">
      <div class="error">Por favor preencha os dados corretamente!</div>
      <div class="txt" style="margin-left: -1rem">
        Entre com seus dados de acesso.
      </div>
      <div class="form-group column">
        <label for="user" class="txtFormat">Nome de usuário ou e-mail:</label>
        <input
          type="text"
          class="form-control"
          id="user"
          v-model.lazy="login.user"
          required
        />
      </div>
      <div class="form-group column">
        <label for="password" class="txtFormat">Senha:</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model.lazy="login.password"
          required
        />
      </div>
      <div class="form-group column">
        <button
          type="submit"
          class="btn form-control"
          @click.prevent="loginTela"
        >
          <span class="btn-txt">Entrar</span>
        </button>
      </div>
      <div class="form-group column">
        <a href="#" class="password">Esqueci minha senha</a>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      login: {
        user: "",
        password: "",
      },
    };
  },
  methods: {
    loginTela() {
      const error = document.querySelector(".error");
      if (this.login.user !== "" && this.login.password !== "") {
        localStorage.setItem(
          "login-facilita",
          JSON.stringify({ user: this.login.user })
        );
        this.$router.push({ path: "/Tasks" });
      } else {
        error.style.display = "block";
        setTimeout(() => {
          error.style.display = "none";
        }, 800);
      }
    },
  },
};
</script>
<style lang="stylus" scoped>
@import "~@/assets/font.styl"

.error
  position: relative
  display: none
  color: red
  font-family: "SVN-Gilroy"
  font-style: normal
  font-weight: 600
  font-size: 14px
  line-height: 15px
  text-align: center
  margin-left: -0.6rem


.btn-txt
  color: white
@font-face
  font-family: "SVN-Gilroy"
  font-style SVN-Gilroy
  src: local("SVN-Gilroy"),
   url('../assets/fonts/SVN-Gilroy Black.ttf'),
   url('../assets/fonts/SVN-Gilroy Bold.ttf'),
   url('../assets/fonts/SVN-Gilroy Italic.ttf'),
   url('../assets/fonts/SVN-Gilroy Light.ttf'),
   url('../assets/fonts/SVN-Gilroy Medium.ttf'),
   url('../assets/fonts/SVN-Gilroy Regular.ttf'),
   url('../assets/fonts/SVN-Gilroy SemiBold.ttf'),
   url('../assets/fonts/SVN-Gilroy Thin.ttf'),


//@import url('http://fonts.googleapis.com/css?family=Overlock:400,700,400italic,700italic|Calligraffitti')


.txtFormat

  font-family: "SVN-Gilroy"
  font-style: normal
  font-weight: 600
  font-size: 14px
  line-height: 15px
  color: #4E657B

.form-group
  display: flex
  margin: 0 auto
  padding: 0.5em 0.5em 0.5em 0.5em
  width: 18em
  .form-control
    width: 368px
    height: 55px


.flex-start
  align-items: flex-start

.item
  flex: 1
  margin: 5px
  padding: 0 10px
  text-align: center

.column
  flex-direction: column
  align-items: flex-start

.form
  display:inline
  height: 20em
  margin: 1.5em 0.5em 0.5em
  max-width: 100%
  .btn
    width: 23.5rem
    background: #1ad18f
    border-radius: 5px
    font-family: SVN-Gilroy
    font-style: normal
    font-weight: bold
    font-size: 16px
    line-height: 17px
    padding: 0
    margin: 0 auto
    &:hover
      border: 1px solid #000000


.section
  position: relative
  width: 20em
  height: 2em
  top: 20em;


.txt, .password
  position: relative
  font-size: 18px
  line-height: 19px
  font-family: SVN-Gilroy;
  font-style: normal;
  font-weight: bold;
</style>
