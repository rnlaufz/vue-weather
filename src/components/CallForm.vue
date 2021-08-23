<template>
  <button class="btn-call-location-form" @click="openModal">
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
  .btn-call-location-form {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 1%;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: none;
    background: cornflowerblue;
    color: #FFFFFF;
    font-size: 0.9em;
    padding: 0.3em;
    margin: 0.5em 0;
  }
  .btn-call-location-form:focus{outline: none;}
</style>