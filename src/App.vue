<template>
  <RouterView />
  <!-- <div><SignIn /></div> -->
  <!-- <div><PasswordPage /></div>
  <div><CreateAccount /></div>  -->
</template>
<script>
import SignIn from "./components/SignIn.vue";
import PasswordPage from "./components/PasswordPage.vue";
import CreateAccount from "./components/CreateAccount.vue";
import { RouterLink, RouterView } from "vue-router";
export default {
  name: "App",
  components: {
    SignIn,
    PasswordPage,
    CreateAccount,
  },
};
</script>
<style></style>
