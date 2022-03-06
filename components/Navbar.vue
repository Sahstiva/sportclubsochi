<template>
  <header class="navbar">
    <div class="navbar-container">
      <img src="~assets/images/logo_small.png"
         width="56"
         height="58"
         alt="Спортклуб Сочи"
         class="navbar-logo">
      <ul class="navbar-menu">
        <li class="navbar-menu__item">расписание забегов</li>
        <li class="navbar-menu__item">результаты забегов</li>
        <li class="navbar-menu__item">тренеры</li>
        <li class="navbar-menu__item">тренировки</li>
        <li class="navbar-menu__item">партнеры</li>
        <li class="navbar-menu__item">контакты</li>
      </ul>
      <div class="navbar-contact">
        <a class="navbar-contact__link" href="tel:+79649409902">+7 (964) 940-99-02</a>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'NavBar',
};
</script>
