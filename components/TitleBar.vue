<template>
  <section class="title">
    <div class="title-container">
      <div class="title-social">
        <a href="#" class="title-social__icon">
          <font-awesome-icon :icon="['fab', 'youtube']" />
        </a>
        <a href="#" class="title-social__icon">
          <font-awesome-icon :icon="['fab', 'vk']" />
        </a>
        <a href="#" class="title-social__icon">
          <font-awesome-icon :icon="['fab', 'instagram-square']" />
        </a>
        <a href="#" class="title-social__icon">
          <font-awesome-icon :icon="['fab', 'facebook-square']" />
        </a>
        <a href="#" class="title-social__icon">
          <font-awesome-icon :icon="['fab', 'telegram']" />
        </a>
      </div>
      <img src="~/assets/images/logo_large.png"
           width="250" height="264"
           alt="Спортивный клуб Сочи"
           class="title-logo">
      <div class="title-contact">
        <a href="#" class="title-social__icon">
          <font-awesome-icon :icon="['fas', 'phone-volume']" />
        </a>
        <p class="title-contact__title">спортивный клуб сочи</p>
        <a href="#" class="title-social__icon">
          <font-awesome-icon :icon="['fab', 'whatsapp']" />
        </a>
      </div>
      <div class="title-info">
        <p class="title-info__text">
          быть здоровым - доступно всем
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TitleBar',
};
</script>
