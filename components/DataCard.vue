<template>
  <div class="card">
    <div v-if="image" class="card-image">
      <img :src="image"
           alt="Контрольный забег" />
    </div>
    <div class="card-event">
      <p v-if="date" class="card-date">{{ date }}</p>
      <h2 v-if="title" class="card-title">{{ title }}</h2>
      <hr class="card-hr"/>
      <template v-if="content">
        <div v-for="(item, index) in content" :key="'I' + index" class="card-content">
          <h3 v-if="item.subtitle" class="card-subtitle">{{ item.subtitle }}</h3>
          <ul v-if="item.list" class="card-list">
            <li v-for="(element, index) in item.list"
                :key="'E' + index" class="card-list__item">{{ element }}</li>
          </ul>
          <template v-if="item.text">
            <p v-for="(text, index) in item.text" :key="'T' + index"
               class="card-text">{{ text }}</p>
          </template>
        </div>
        <hr class="card-hr"/>
      </template>
      <div v-if="buttons" class="card-buttons">
        <button v-for="(button, index) in buttons"
                :key="'B' + index" class="card-buttons__item">
          {{ button }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataCard',
  props: {
    image: {
      type: String,
      default: null,
    },
    date: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    content: {
      type: Object,
      default: null,
    },
    buttons: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style scoped>

</style>
