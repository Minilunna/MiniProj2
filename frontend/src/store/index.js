import Vue from "vue";
import Vuex from "vuex";

import moduleBase from "./module";
import moduleAuth from "./auth/auth.module";
import moduleUser from "./users/user.module";
import moduleSponsor from "./sponsors/sponsor.module";
import moduleExpert from "./experts/expert.module";
import moduleAnimal from "./animals/animal.module";
import moduleQuiz from "./quizzes/quiz.module";
import moduleQuestion from "./questions/question.module";

Vue.use(Vuex);

export default new Vuex.Store({
  getters: moduleBase.getters,
  mutations: moduleBase.mutations,
  state: moduleBase.state,
  actions: moduleBase.actions,
  modules: {
    auth: moduleAuth,
    animal: moduleAnimal,
    user: moduleUser,
    expert: moduleExpert,
    sponsor: moduleSponsor,
    quiz: moduleQuiz,
    question: moduleQuestion
  }
});
