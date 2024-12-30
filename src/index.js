/* Automatically generated by './build/bin/build-entry.js' */

import Button from "../packages/mybutton/index.js";

const components = [Button];

const install = function (Vue) {
    // 判断是否安装
    if (install.installed) return;
    install.installed = true;

    components.forEach((component) => {
        Vue.component(component.name, component);
    });
};

/* istanbul ignore if */
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}

export default {
    version: "1.0.0",
    install,
    Button,
};