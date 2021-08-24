<template>
  <button class="app__container__weather-card__main__button-call-form zero-top cursor-pointer height-30 border-none shadow-blue-focus blue-white-theme border-rad-s" @click="openModal">
    <font-awesome-icon icon="search-location"/>
  </button>
</template>

<script>
export default {
  name: "CallForm",
  methods: {
    openModal(){this.$emit("open-modal")}
  }
}
</script>

<style>
  .app__container__weather-card__main__button-call-form {
    position: absolute;
    right: 1%;
    width: 30px;
    border-radius: 5px;
    font-size: 0.9em;
    padding: 0.3em;
    margin: 0.5em 0;
  }
</style>