const app = Vue.createApp({
  data() {
    return {
      name: "Naldi",
      number: Math.random(),
      imageLink: 'https://upload.wikimedia.org/wikipedia/en/d/db/Adolf_Hitler_in_Paris_1940.jpg',
    };
  },
  methods: {
    getAge() {
      const birthdate = new Date(1998, 1, 1);
      const todaydate = new Date();
      const age =
        todaydate.getFullYear() -
        birthdate.getFullYear() -
        (todaydate.getMonth() < birthdate.getMonth() ||
          (todaydate.getMonth() === birthdate.getMonth() &&
            todaydate.getDate() < birthdate.getDate()));
      return age;
    },
  },
});
app.mount("#assignment");
