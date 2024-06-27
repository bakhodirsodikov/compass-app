<template>

  <NuxtLayout>
    <div class="container-xl" >
      <h1>{{ docText.title }}</h1>
      <p>{{ docText.text }}</p>
    </div>
  </NuxtLayout>
</template>

<script setup>
import {ref} from 'vue'
const route = useRoute()
const idx = ref(route.params.id);
// const url = ref(`/public/data/${idx.value}.json`)
// const url = ref('https://jsonplaceholder.typicode.com/users')

// const data = fetch(url.value)
// .then((req) => req.json())
// .then((data) => console.log(data))

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

const docText = docs.value[idx.value]


</script>
