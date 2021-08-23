<template>
  <!-- Форма - модал  -->
          <form class="location-form"  @submit="submitForm">
            <button class="location-form-close-modal" @click="closeModal">
              <font-awesome-icon icon="times" />
            </button>
           <h2>Change city:</h2>
            <input type="text" class="location-form-city" placeholder="City" v-model="city" name="city">
            <button type="submit" class="location-form-get-location-btn">Get weather</button>
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
<style scoped>
  .location-form {
    position: relative;
    border-radius: 5px;
    box-shadow: 0 0 10px #3269c4;
    max-width: 100%;
    max-height: 100%;
    background: #3269c4;
    color: #FFF;
    border: #3269c4 solid 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
.location-form-close-modal{
  align-self: flex-end;
  position: relative;
  top: 0;
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
.location-form-city{
  width: 100%;
  height: 30px;
  margin: 1em;
  padding: 10px;
  border: none;
  border-radius: 3px;
  font-size: 100%;
}
.location-form-city:focus, .location-form-get-location-btn:focus{
  outline: 0;
  box-shadow: 0 0 10px cornflowerblue;
}
.location-form-get-location-btn{
  cursor: pointer;
  width: 100%;
  height: 30px;
  padding: 5px;
  font-family: inherit;
  font-size: 100%;
  font-weight: 500;
  border: none;
  border-radius: 3px;
  background: cornflowerblue;
  color: #FFFFFF;
}
</style>