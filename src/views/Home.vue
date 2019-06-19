<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p @click="updateName">{{ userName }}</p>

    <p @click="addPropStr(22222)">{{ getUserName }}</p>

    <div>{{ $t("msg.h") }}</div>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "home",
  data() {
    return {
      userName: ""
    };
  },
  mounted() {
    this.userName = this.$store.state.user.name;
  },
  methods: {
    updateName() {
      this.$store.commit("updateUserName", Date.now());
      // this.updateUserName(Date.now());
    },
    ...mapMutations(["updateUserName", "addPropStr"])
  },
  computed: {
    ...mapState(["user"]),
    ...mapGetters(["getUserName"])
  },
  components: {}
};
</script>
