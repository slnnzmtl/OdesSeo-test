<template lang="html">
  <div class="user-form user-form_theme_light">
    <div class="user-form__title">Форма создания / редактирования сотрудника</div>
    <div class="form-field">
      <div class="form-field__label">Фамилия Имя</div>
      <input type="text" name="name" class="form-field__input" v-model="currentUser.name">
      <div class="form-field__error-message" v-if="name">Поле “Фамилия Имя” должно содержать два слова, разделенных пробелами</div>
    </div>

    <div class="form-field">
      <div class="form-field__label">Должность</div>
      <input type="text" name="name" class="form-field__input" v-model="currentUser.position">
      <div class="form-field__error-message" v-if="position">Поле “Должность” должно содержать минимум 5 символов</div>
    </div>

    <div class="form-field">
      <div class="form-field__label">Email</div>
      <input type="text" name="name" class="form-field__input" v-model="currentUser.email">
      <div class="form-field__error-message" v-if="email">Введите корректный Email в формате test@gmail.com</div>
    </div>

    <div class="form-field">
      <div class="form-field__label">Телефон</div>
      <input type="text" name="name" class="form-field__input" v-model="currentUser.phone">
      <div class="form-field__error-message" v-if="phone">Введите корректный телефон в формате 0631112233, 80633332211, +380631112233</div>
    </div>
    <button class="user-form__button button_theme_light" @click="Save(currentUser)">Сохранить</button>
  </div>
</template>
<script src="./user-form.js"></script>
