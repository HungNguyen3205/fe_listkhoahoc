import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'   // ⬅ thêm dòng này
import App from './App.vue'
import router from './router'

import Default from './layout/wrapper/index.vue'
import Blank from './layout/wrapper/index_blank.vue'
import Client from './layout/wrapper/index_client.vue'
import ClientThanhToan from './layout/wrapper/index_thanh_toan.vue'

import Toaster from "@meforma/vue-toaster"; 
import vue3GoogleLogin from 'vue3-google-login';

// ⬅ import file ngôn ngữ
import vi from './lang/vi'
import en from './lang/en'

// ⬅ tạo i18n
const i18n = createI18n({
  locale: localStorage.getItem('lang') || 'vi', // ngôn ngữ mặc định
  messages: {
    vi,
    en,
  }
})

const app = createApp(App)

app.use(router)
app.use(vue3GoogleLogin, {
  clientId: '982150332470-3hga4s908dup4ecoqehfvrkegtij8rv6.apps.googleusercontent.com'
})
app.use(Toaster, { position: "top-right" })

// ⬅ dùng i18n
app.use(i18n)

app.component("default-layout", Default)
app.component("blank-layout", Blank)
app.component("client-layout", Client)
app.component("payment-layout", ClientThanhToan)

app.mount("#app")
