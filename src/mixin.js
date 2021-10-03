export const logoutMixin = {
    methods: {
        efetuarLogout() {
          this.$store.commit("DESLOGAR_ALUNO");
          this.$router.push({ name: "home" });
        }
    }
}