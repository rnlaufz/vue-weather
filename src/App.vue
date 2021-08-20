<template>
  <div id="app">
    <div class="container">
      <div class="weather-card">
        <div v-if="!showForm" class="weather-card-main">
          <CallForm @open-modal="openModal" />
          <WeatherData
              :condition = 'condition'
              :icon=icon
              :temperature="temperature"
              :feelsLike="feelsLike"
              :humidity="humidity"
              :windDirection="windDirection"
              :windSpeed="windSpeed"
              :location="location"
          />
        </div>
      <div v-if="showForm" class="weather-card-form">
    <WeatherForm @close-modal="closeModal" @change-city="changeCity"/>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import WeatherForm from "@/components/WeatherForm";
import WeatherData from "@/components/WeatherData";
import CallForm from "@/components/CallForm";
export default {
  name: 'App',
  components: {
    WeatherData,
    CallForm,
    WeatherForm
  },
  data: function (){
    return {
      showForm: false,
      // Дефолтное значение либо загруженное из localstorage браузера
      city: localStorage.getItem("city") ? localStorage.getItem("city") : "London",
      weatherAPIKey: '24a69fb88b7345278bb72458202703',
      // Данные с API
      condition: "",
      icon: "",
      temperature: 0,
      feelsLike: 0,
      humidity: 0,
      windDirection: "",
      windSpeed: 0,
      location: ""
    }
  },
  methods: {
    getData: async function (){
          await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.weatherAPIKey}&q=${this.city}`)
            .then((res) => {
              return res.json()
            })
            .then((data) => {
              this.location = data.location.region;
              this.condition = data.current.condition.text;
              this.icon = data.current.condition.icon;
              this.temperature = data.current.temp_c;
              this.feelsLike = data.current.feelslike_c;
              this.humidity = data.current.humidity;
              this.windDirection = data.current.wind_dir;
              this.windSpeed = data.current.wind_mph;
            });
          localStorage.setItem("city", this.city)
    },
    openModal: function (){
    this.showForm = true
    },
    closeModal: function (){
      this.showForm = false
    },
    changeCity(newCity){
      // Получение запроса на данные с другого города, закрытие формы по завершению
      this.city = newCity;
      this.getData();
      this.showForm = false;
      localStorage.setItem("city", this.city);
    }
  },
  // Вызов по загрузке
  created: function() {
    this.getData()
  },
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
 html, body {
  width: 100%;
  height: 100%;
}
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container .weather-card {
  position: relative;
  border-radius: 5px;
  box-shadow: 0 0 10px cornflowerblue;
  max-width: 40%;
  max-height: 60%;
  background: #3269c4;
  color: #FFF;
  border: #3269c4 solid 3px;


}
.weather-card-main, .weather-card-form {
  width: 100%;
  height: 100%;
}
</style>
