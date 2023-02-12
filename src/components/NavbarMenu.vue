<script lang="ts" setup>
import {useAuthStore} from "@/stores/useAuthStore";

const auth = useAuthStore();

function logout() {
  auth.doLogout();
}

</script>

<template>
  <nav>
    <RouterLink class="mr-2 hover:text-blue-600"
                to="/">Anasayfa
    </RouterLink>
    <RouterLink class="px-2 hover:text-blue-600"
                to="/about">Hakkımda
    </RouterLink>

    <a href="#" class="px-2 hover:text-blue-600"
       v-if="auth.isAuthenticated"
       @click="logout">{{ auth.username + ' (Çıkış Yap)' }}</a>

    <RouterLink class="px-2 hover:text-blue-600"
                to="/login"
                v-else>Giriş Yap
    </RouterLink>

  </nav>
</template>

<style scoped>

</style>