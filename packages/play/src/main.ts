import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import LuminaUI from '../../core/index'
import '../../theme/index.scss'

createApp(App).use(LuminaUI).mount('#app')
