<template lang="html">
  <div class="item item_theme_light" >
    <div class="item__info">
      <p class="item__field item__name">{{ obj.name }}</p>
      <p class="item__field item__position">{{ obj.position }}</p>
      <div class="item__contacts">
        <p class="item__field item__email">Email: {{ obj.email }} |</p>
        <p class="item__field item__phone">Телефон: {{ obj.phone }}</p>
      </div>
    </div>
    <div class="item__actions">
      <button class="item__button item__button-edit" @click="edit()">Edit</button>
      <button class="item__button item__button-delete" @click="remove()">Delete</button>
    </div>
  </div>
</template>

<script src="./item.js"></script>
