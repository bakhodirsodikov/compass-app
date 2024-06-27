<template>
  <div class="advantages d-flex flex-column py-4">
    <h3 class="advantages-title text-center py-4">
      Плюсы использования сервиса «Компас» для анализа штрафов
    </h3>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 justify-content-center">
      <div class="col advantages-card d-flex rounded m-2"
      v-for="card in advantages" :key="card.id">
        <div class="img-wrapper">
          <img :src="card.img" alt="">
        </div>
        <div class="advantages-text ps-2 d-flex flex-column">
          <h6 style="color: #1253A2;">{{card.title}}</h6>
          <span style="font-size: 14px;">{{card.text}}</span>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const advantages = ref([
  {
    img: 'https://static.vecteezy.com/system/resources/previews/027/386/549/original/infinity-loop-symbol-illustration-free-png.png',
    title: 'Неограниченый автопарк',
    text: 'Можно добавить неограниченное кол-во машин и водителей'
  },
  {
    img: 'https://cdn-icons-png.freepik.com/512/1897/1897605.png?ga=GA1.1.1614710450.1718473212',
    title: 'Сокращение затрат до 50%',
    text: 'Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у вас есть время оплатить по скидке'
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/5723/5723758.png',
    title: 'Безопасность',
    text: 'Данные передаются в зашифрованном виде, они доступны только получателю'
  },
  {
    img: 'https://cdn-icons-png.freepik.com/512/8295/8295013.png?ga=GA1.1.1614710450.1718473212',
    title: 'Уведомление о погашении',
    text: 'Мы оповестим вас о том, что штраф был погашен и соответствующая запись создана в ГИС ГМП'
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/8564/8564194.png',
    title: 'Квитанция об оплате',
    text: 'После совершения оплаты банковской картой на Вашу электронную почту придет квитанция об успешной оплате.'
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/12423/12423746.png',
    title: 'Все история сохраняется по каждой машине',
    text: 'Вся история штрафов сохраняется по машине и водителю, позволяет анализировать статистику по штрафам'
  },
])
</script>

<style scoped>
</style>