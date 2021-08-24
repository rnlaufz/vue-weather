<template>
  <!-- Форма - модал  -->
          <form class="app__container__weather-card__form__location-form display-flex-center pos-relative border-blue blue-white-theme border-rad-s shadow-blue"  @submit="submitForm">
            <button class="app__container__weather-card__form__location-form__close-modal blue-white-theme-light zero-top height-30 pos-relative border-rad-s border-none" @click="closeModal">
              <font-awesome-icon icon="times" />
            </button>
           <h2>Change city:</h2>
            <input type="text" class="app__container__weather-card__form__location-form__city-input font-100-presents height-30 full-width border-none border-rad-s shadow-blue-focus" placeholder="City" v-model="city" name="city">
            <button type="submit" class="app__container__weather-card__form__location-form__btn cursor-pointer blue-white-theme-light font-100-presents height-30 full-width border-none border-rad-s shadow-blue-focus">Get weather</button>
          </form>
</template>

<script>
export default {
  name: "WeatherForm",
  data: function (){
    return{
      city: 'London',
    }
},
  methods: {
    closeModal(){this.$emit('close-modal')},
    submitForm(e){
      e.preventDefault()
      const newCity = this.city;
      this.city = ""
      this.$emit('change-city', newCity)
    }
  }
}
</script>
<style>
.app__container__weather-card__form__location-form {
    max-width: 100%;
    max-height: 100%;
  }
.app__container__weather-card__form__location-form__close-modal{
  align-self: flex-end;
  font-size: 0.9em;
  padding: 0.3em;
  margin: 0.5em 0;
}
.app__container__weather-card__form__location-form__city-input{
  margin: 1em;
  padding: 10px;
}
.app__container__weather-card__form__location-form__btn{
  cursor: pointer;
  padding: 5px;
  font-weight: 500;
}
</style>