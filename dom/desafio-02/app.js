new Vue({
  el: "#desafio",
  data: {
    valor: ""
  },
  methods: {
    showAlert(e) {
      e.stopPropagation();

      alert(`Clicou no botão`);
    },
    saveValueToData(e) {
      console.log(e.target.value);

      this.valor = e.target.value;
    }
  }
});
