<template>
  <div id="app">
    <div class="app__container display-flex-center">
      <div class="app__container__weather-card pos-relative border-rad-s blue-white-theme border-blue shadow-blue">
        <div v-if="!showForm" class="app__container__weather-card__main full-size">
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
      <div v-if="showForm" class="app__container__weather-card__form full-size">
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
      condition: "Misty",
      icon: "",
      temperature: 0,
      feelsLike: 0,
      humidity: 0,
      windDirection: "SWS",
      windSpeed: 0,
      location: localStorage.getItem("city") ? localStorage.getItem("city") : "London"
    }
  },
  methods: {
    getData: async function (){
          await fetch(`https://api.weatherapi.com/v1/current.json?key=${this.weatherAPIKey}&q=${this.city}`)
            .then((res) => {return res.json()})
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
    openModal(){this.showForm = true},
    closeModal(){this.showForm = false},
    changeCity(newCity){
      // Получение запроса на данные с другого города, закрытие формы по завершению
      this.city = newCity;
      this.getData();
      this.showForm = false;
      localStorage.setItem("city", this.city);
    }
  },
  // Вызов по загрузке
  created(){
    this.getData()
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
 html, body, #app {
  width: 100%;
  height: 100%;
}
.zero-top{top: 0}
.blue-white-theme{
  background: #3269c4;
  color: #FFFFFF;
}
.blue-white-theme-light{
  background: #6da6e0;
  color: #ffffff;
}
.pos-relative{position: relative}
.border-rad-s {border-radius:3px}
.border-blue{border: #3269c4 solid 3px;}
.border-none{border: none}
.shadow-blue-focus:focus{
  outline: 0;
  box-shadow: 0 0 10px cornflowerblue;
}
.shadow-blue{box-shadow: 0 0 10px #3269c4;}
.display-flex-center{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.full-width{width: 100%;}
.height-30{height: 30px;}
.font-100-presents{font-size: 100%}
.cursor-pointer{cursor:pointer;}
.app__container {
  min-width: 100%;
  min-height: 100%;
  text-align: center;
  &__weather-card {
    max-width: 100%;
    max-height: 100%;
    justify-self: center;
  }
}
.full-size {
  width: 100%;
  height: 100%;
}
</style>
