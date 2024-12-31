import pigAttach from "./src/pigAttach.vue";

pigAttach.install = function (Vue) {
  Vue.component(pigAttach.name, pigAttach);
};

export default pigAttach;
