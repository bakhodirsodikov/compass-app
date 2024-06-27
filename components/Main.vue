<template>
  <div class="container-xl">
    <div class="main d-flex flex-column align-items-center">
      <div class="sign-up d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center w-100 pt-3">
        <div class="sign-up__title d-flex flex-column">
          <h3>Проверьте штрафы и зарегестрируйтесь в 1 клик</h3>
          <form id="sign-up-form" class="sign-up__form d-flex flex-column" method="post"
          :class="{'border border-5 border-danger p-2': !datasended}">
            <div class="d-flex flex-column flex-sm-row justify-content-sm-between">
                <label for="num-car" class="d-flex flex-column sign-up__form-label">
                  Номер автомобиля<input type="number" id="num-car" v-model="numAuto"></label>
                <label for="region" class="d-flex flex-column sign-up__form-label">
                  Регион<input type="text" id="region" v-model="region"></label>
            </div>
            <label for="regist-num" class="d-flex flex-column sign-up__form-label">
              Свидетельство о регистрации ТС<input type="number" id="regist-num" class="w-100" v-model="registNum">
            </label>
            <div class="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center">
              <button type="submit" class="btn btn-primary d-flex my-2 align-items-center" style="height:45px;"
              @click.prevent="check">
                Проверить штрафы! 
                <i class="bi bi-arrow-right ms-2"></i> 
              </button>
              <button class="btn btn-outline-primary d-flex align-items-center" style="height:45px;"
              @click.prevent="modal=true">
                <i class="bi bi-play-btn me-2"></i> 
                О сервисе
              </button>
            </div>
          </form>
        </div>
        <div class="sign-up__img">
          <img src="/assets/img/content/laptop.png" alt="laptop">
        </div>
      </div>
    </div>

    <Advantages/>
    <Documents/>
  </div>
  <LazyModal v-if="modal" @close-modal="modal = false"/>
</template>
<script setup>
import {ref} from 'vue'
const emits = defineEmits(['closeModal'])

const numAuto = ref()
const region = ref()
const registNum = ref()
const datasended = ref(true)

const check = ()=>{
  if(numAuto.value && region.value && registNum.value){
    numAuto.value = ''
    region.value = ''
    registNum.value = ''
    datasended.value = true
    setTimeout(() => {
      alert('Данные отправлены!')
    }, 1000);
    
  }
  else{
    datasended.value = false 
    setTimeout(() => {
      alert('Данные не отправлены, заполните все поля!')
      datasended.value = true 
    }, 1000)
  }
}
const modal = ref(false)

</script>

<style scoped>
</style>