// just js global variabel
const generateNum = Math.round(Math.random() * 100) / 100;
//
const app = Vue.createApp({
  data() {
    return {
      myGoal: "Finish the Vue.js course in less than " + (5 + 2) + " days!",
      myGoalA: "Master at Vue.js",
      myGoalB: "Must learn basic JavaScript",
      myGoalC: "I want to <i>learn</i> more about <b>Web Development</b>",
      theLink: "https://vuejs.org/",
    };
  },
  methods: {
    randomNumber() {
      const num = generateNum;
      let text = "Magic counch shell generate a number: " + num;
      if (num < 0.5) {
        return (text += ", less than 0.5. Than i must learn less than 7 days");
      } else {
        return (text += ", more than 0.5. Than i can learn more than 7 days");
      }
    },
    randomNumber2() {
      const num = generateNum;
      if (num < 0.5) {
        return this.myGoalA;
      } else {
        return this.myGoalB;
      }
    },
  },
});

app.mount("#user-goal");
