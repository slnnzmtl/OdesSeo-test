<template lang="html">
  <form class="user-form user-form_theme_light" @submit.prevent="save(currentUser)">
    <div class="user-form__title">Форма создания / редактирования сотрудника</div>
    <div class="form-field">
      <!-- <div class="form-field__label">Фамилия Имя</div> -->
      <label class="form-field__label">Фамилия Имя
        <input type="text" name="name" class="form-field__input" v-model="currentUser.name">
      </label>
      <div class="form-field__error-message" v-if="name">Поле “Фамилия Имя” должно содержать два слова, разделенных пробелами</div>
    </div>

    <div class="form-field">
      <label class="form-field__label">Должность
        <input type="text" name="position" class="form-field__input" v-model="currentUser.position">
      </label>
      <div class="form-field__error-message" v-if="position">Поле “Должность” должно содержать минимум 5 символов</div>
    </div>

    <div class="form-field">
      <label class="form-field__label">Email
        <input type="text" name="email" class="form-field__input" v-model="currentUser.email">
      </label>
      <div class="form-field__error-message" v-if="email">Введите корректный Email в формате test@gmail.com</div>
    </div>

    <div class="form-field">
      <label class="form-field__label">Телефон
        <input type="text" name="phone" class="form-field__input" v-model="currentUser.phone">
      </label>
      <div class="form-field__error-message" v-if="phone">Введите корректный телефон в формате 0631112233, 80633332211, +380631112233</div>
    </div>
    <input type="submit" value="Сохранить" class="user-form__button button_theme_light">
  </form>
</template>
<script src="./user-form.js"></script>
