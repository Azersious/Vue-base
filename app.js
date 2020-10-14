const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    remove(num) {
      this.counter -= num;
    },
    // remove() {
    //   this.counter--;
    // },
    setName(event, lastName) {
      this.name = `${event.target.value} ${lastName}`;
    },
    // Si on n'envois pas de valeur dans le setName, rien n'empèche de récupérer cette valeur pour la renvoyer de manière dynamique avec le target.value  target.value = ce qu'on tape // this.name = name dans data() ==> ce qu'on tape en temps réel est renvoyé dans name
    submitForm(e) {
      e.preventDefault();
      alert(`Hey submitted ! Thx ${this.name}`);
    },
    // Pour le rprevent defaut ou on peut soit le mettre dans la fonction soit l'écrire directement dans l'HTML => v-on:submit.prevent=
  },
});

app.mount("#root");
