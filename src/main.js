import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import pinia from './stores/index'

// 第三方的重置样式css， 一般新建项目都会导入一个这样的文件
// 保持不同浏览器的样式统一
import "normalize.css"
import "./assets/css/index.css"

createApp(App).use(router).use(pinia).mount('#app')
