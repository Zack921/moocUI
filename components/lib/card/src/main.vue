<template>
  <div class="m-card">
    <div class="m-card-img">
      <img :src="imgSrc" alt="img">
    </div>
    <div v-if="summary" class="m-card-summary">
      {{summary}}
    </div>
    <div v-else class="m-card-summary">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'MCard',
  props: {
    width: {
      type: Number,
      default: 0,
    },
    imgSrc: {
      type: String,
      default: '',
    },
    imgHeight: {
      type: Number,
      default: 0,
    },
    summary: {
      type: String,
      default: '',
    },
  },
}
</script>