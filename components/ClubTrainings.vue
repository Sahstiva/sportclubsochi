<template>
<section class="training">
  <div class="training-container">
    <div class="training-header">ТРЕНИРОВКИ КЛУБА</div>
    <div class="training-image"/>
    <p class="training-banner">Хочешь бегать быстро, правильно и без травм - приходи!</p>
    <div class="training-cards">
      <data-card v-for="i in 3" :key="i"
        title="ГОСТЕВЫЕ"
        :content="content"
        :buttons="buttons" />
    </div>
  </div>
</section>
</template>

<script>
import DataCard from '@/components/DataCard.vue';

export default {
  name: 'ClubTrainings',
  components: {
    DataCard,
  },
  data() {
    return {
      content: [
        {
          subtitle: 'Для гостей города Сочи.',
          text: [
            'Видеоразбор, постановка и корректировка техники бега. Освоение техники СБУ',
            'Корректировка ваших тренировочных планов.',
            'В подарок - тренировочный план на неделю.',
          ],
        },
        {
          subtitle: '1 тренировка - 2000р.',
          text: [
            'Тренировки проходят каждый день возле отеля Имеретинский.',
            'Предварительная запись обязательна.',
          ],
        },
      ],
      buttons: [
        'записаться!',
      ],
    };
  },
};
</script>
