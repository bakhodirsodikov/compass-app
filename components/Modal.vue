<template>
  <div class="modal container-fluid d-flex justify-content-center align-items-center">
    <div class="video-wrapper d-flex flex-column align-items-end">
      <button class="btn video-closer p-0"
      @click="$emit('closeModal')"><i class="bi bi-x text-white fs-2"></i></button>
        <iframe class="video" src="https://www.youtube.com/embed/X31t_cnTcS4?si=e242K3nMOF288855&amp;start=9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; " referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>