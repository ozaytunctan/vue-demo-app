<script setup lang="ts">
import {reactive} from "vue";
import {useAuthStore} from "@/stores/useAuthStore";

const user = reactive({
  username: '',
  password: ''
})

function onSubmit() {
  if (user.username != '' && user.password != '') {
    useAuthStore().login(user.username, user.password);
  }
}

</script>

<template>
  <form class="bg-white p-8 rounded-md shadow-md login-form w-80"
        @submit.prevent="onSubmit">

    <!--  -->
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold">Kullanıcı Adı:</label>
      <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          v-model="user.username">
    </div>
    <!---->
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold">Şifre</label>
      <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          v-model="user.password">
    </div>

    <div>
      <button type="submit"
              class="w-full shadow rounded-2 border-blue-50 text-blue-600 hover:border-blue-600 p-1.5">Giriş Yap
      </button>
    </div>


  </form>
</template>


<style scoped>

</style>