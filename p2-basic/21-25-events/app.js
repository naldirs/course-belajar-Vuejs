const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      counter2: 0,
      name: '',
    };
  },
  methods: {
    add() {
      this.counter2++;
    },
    reduce() {
      this.counter2 = this.counter2 - 1;
    },

    addDynamic(num) {
      this.counter2 = this.counter2 + num;
    },
    reduceDynamic(num) {
      this.counter2 = this.counter2 - num;
    },
    setName(event){
      this.name = event.target.value;
    },
  },
});

app.mount("#events");
