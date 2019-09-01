new Vue({
  el: "#desafio",
  data: {
    myName: "Bruno Ferreira",
    myAge: 28,
    srcImage:
      "https://www.kcbi.org/wp-content/uploads/2019/03/homer-simpson.jpg"
  },
  methods: {
    random() {
      return Math.random(0, 1);
    }
  }
});
