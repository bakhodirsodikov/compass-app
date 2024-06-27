<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-xl">
      <NuxtLink class="navbar-brand header-logo" to="/">
          <img src="/assets/img/logo.png" alt="logo">
      </NuxtLink>
      
      <button class="navbar-toggler" 
        type="button" data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
        @click="navActive = !navActive">
        <span class="navbar__btn-icon " 
          :class="{'navbar-toggler-active': navActive}"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav w-100 d-flex flex-column flex-lg-row justify-content-sm-between align-items-lg-center py-2">
          <div class="d-flex flex-column flex-lg-row nav-links__wrapper">
            <li class="py-1 py-lg-0"><NuxtLink to="/rates" class="navbar-link">Тарифы</NuxtLink></li>
            <li class="py-1 py-lg-0"><NuxtLink to="/contacts" class="navbar-link">Контакты</NuxtLink></li>
          </div>
          <div class="d-flex flex-column flex-lg-row align-items-lg-center nav-links__wrapper">
            <li class="py-1 py-lg-0"><a href="tel:+74951184422" class="navbar-link">+7 495 118-44-22</a></li>
            <li class="py-1 py-lg-0"><a href="#" class="navbar-link">Вход</a></li>
            <button class="btn btn-primary btn-sign-in rounded">Регистрация</button>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import {ref} from 'vue'

  const navActive = ref(false)
</script>

<style scoped>
</style>