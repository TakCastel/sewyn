<template>
  <div>
    catégories
    <div 
      v-for="(category, index) in categories" 
      :key="index">
      {{ category }}
    </div>
  </div>
</template>
