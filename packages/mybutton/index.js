import PigButton from './src/button.vue';

PigButton.install = function (Vue) {
  Vue.component(PigButton.name, PigButton);
};

export default PigButton;