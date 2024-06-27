<template>
  <div class="documents  py-4 ">
    <h5 class="py-4 text-center">Документы </h5>
    <div class="swiper">
      <Swiper
      :modules="[SwiperNavigation, SwiperPagination]"
      :slides-per-view="1"
      :breakpoints="{
        '600': {
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
        '1000':{
          slidesPerView: 3,
          slidesPerGroup: 1,
        }
      }"
      :space-between="10"
      :loop="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      
      navigation
      :pagination="{ clickable: true }">

        <SwiperSlide v-for="(card, idx) in docs" :key="idx">
          <div class="w-100 d-flex justify-content-center">
            <div class="docs-wrapper d-flex flex-column align-items-center justify-content-between p-3">
              <div class="docs-text">
                <h5>{{card.title}}</h5>
                <span>{{card.text}}</span>
              </div>
              <NuxtLink :to="`/docs/${idx}`" class="btn btn-primary ">Перейти</NuxtLink>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const docs = ref([
  {
    title: 'Лицензионный договор',
    text: 'Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке. ',
  },
  {
    title: 'Политика обработки персональных данных',
    text: 'Радиус разброса ПГМ составляет до 3 метров и может регулироваться.',
  },
  {
    title: 'Информация об оплате',
    text: 'Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.',
  },
  {
    title: 'Политика обработки персональных данных',
    text: 'Радиус разброса ПГМ составляет до 3 метров и может регулироваться.',
  },
])

  
</script>

<style scoped>


</style>