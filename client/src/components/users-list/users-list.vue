<template lang="html">
  <div class="users-list users-list_theme_light">
    <div class="users-list__title">Список сотрудников</div>
    <div class="users-list__wrapper" v-if="getLocalUsers.length">
      <Item v-for="(user, idx) in getLocalUsers" :key="idx" :idx="idx" :obj="user"></Item>
    </div>
    <div class="users-list__empty" v-else>Здесь пусто...</div>
  </div>
</template>

<script src="./users-list.js"></script>
