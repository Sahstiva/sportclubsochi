<template>
  <section class="upcoming">
    <div class="upcoming-container">
      <div class="upcoming-header">
        <p class="upcoming-header__text">
          предстоящие забеги<span class="upcoming-header__caps"> СК"СОЧИ"</span>
        </p>
      </div>
      <div class="upcoming-cards">
        <data-card v-for="i in 3" :key="i"
                   :image="require('~/assets/images/card_image.jpg')"
                   date="27/03"
                   title="контрольный забег"
                   :content="content"
                   :buttons="buttons"
        />
        </div>
      </div>
  </section>
</template>

<script>
import DataCard from '@/components/DataCard.vue';

export default {
  name: 'UpcomingRaces',
  components: {
    DataCard,
  },
  data() {
    return {
      content: [
        {
          subtitle: 'ДИСТАНЦИИ И ВРЕМЯ',
          list: [
            '21 км ( 18+ )', '1км ( дети до 14 лет )',
            'забег "Юных чемпионов"  ( 0-7лет )',
            '10км - ( 16+ )', '5км - ( 16+ )', '3км - ( 12+ )'],
          text: [
            '* Обязательно наличие медицинской справки',
            '** Участие только на одной дистанции',
            '*** Регистрация обязательна'],
        },
        {
          subtitle: 'Место старта',
          text: [
            'ФТ Сириус Морской бульвар,1, напротив отеля Имеретинский, отель Редисон Блю, Сёрф Кофе',
          ],
        },
        {
          subtitle: 'Трасса',
          text: [
            'Олимпийская набережная',
          ],
        },
      ],
      buttons: [
        'регистрация', 'участники', 'трасса', 'место старта',
      ],
    };
  },
};
</script>
