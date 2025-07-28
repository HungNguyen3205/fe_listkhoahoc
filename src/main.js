import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './layout/wrapper/index.vue'
import Blank from './layout/wrapper/index_blank.vue'
import Client from './layout/wrapper/index_client.vue'
import ClientThanhToan from './layout/wrapper/index_thanh_toan.vue'
import Toaster from "@meforma/vue-toaster"; 
import vue3GoogleLogin from 'vue3-google-login';
const app = createApp(App)

app.use(router)
app.use(vue3GoogleLogin, {
  clientId: '982150332470-3hga4s908dup4ecoqehfvrkegtij8rv6.apps.googleusercontent.com'
})
app.use(Toaster, {
    position: "top-right",
  });
app.component("default-layout", Default);
app.component("blank-layout", Blank);
app.component("client-layout", Client);
app.component("payment-layout", ClientThanhToan);
Client
app.mount("#app")