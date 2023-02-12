<script setup lang="ts">
import {RouterView} from 'vue-router'
import NavbarMenu from "@/components/NavbarMenu.vue";</script>


<template>
  <div class="min-h-screen bg-gray-100">
    <!--    Header Start-->
    <header class="bg-gray-200 p-4">
      <div class="container mx-auto">
        <NavbarMenu/>
      </div>

    </header>

    <!--    Main Content-->
    <main class="container mx-auto p-8">
      <RouterView/>
    </main>

  </div>

</template>

<style scoped>

</style>
