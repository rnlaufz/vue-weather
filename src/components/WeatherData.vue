<template>
  <div class="weather-data-container">
    <!-- Данные о погоде с weatherapi.com  -->
    <ul class="weather-data-list">
    <!--   Иконка и остальные данные приходят от API   -->
    <li key="1" class="weather-data-icon">
      <img v-bind:src="icon" v-bind:alt="condition">
    </li>
    <li key="2" class="weather-data-name">{{condition}}</li>
    <li key="3" class="weather-data-location">{{location}}</li>
      <br />
    <li key="4" class="weather-data-temperature">{{temperature}}&deg;</li>
      <br />
    </ul>
<!-- Детали  -->
    <ul class="weather-data-details">
      <li key="5" class="weather-data-details-humidity">
        <font-awesome-icon icon="tint" />
        <p class="weather-data-details-text">
        <span class="weather-data-details-description">Humidity: </span>
          <br />
        <span class="weather-data-details-value">{{humidity}}</span>
        </p>
      </li>
      <li key="6" class="weather-data-details-feels-like">
        <font-awesome-icon icon="thermometer" />
        <p class="weather-data-details-text">
        <span class="weather-data-details-description">Feels like: </span>
          <br />
        <span class="weather-data-details-value">{{feelsLike}}&deg;</span>
        </p>
      </li>
      <li key="7" class="weather-data-details-wind-direction">
        <font-awesome-icon icon="wind" />
        <p class="weather-data-details-text">
        <span class="weather-data-details-description">Wind direction: </span>
          <br />
        <span class="weather-data-details-value">{{windDirection}}</span>
        </p>
      </li>
      <li key="8" class="weather-data-details-wind">
        <font-awesome-icon icon="wave-square" />
        <p class="weather-data-details-text">
          <span class="weather-data-details-description">Wind speed: </span>
          <br />
          <span class="weather-data-details-value"> {{windSpeed}} mph </span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CallForm",
  props: {
    condition: String,
    icon: String,
    temperature: Number,
    feelsLike: Number,
    humidity: Number,
    windDirection: String,
    windSpeed: Number,
    location: String

  }
}
</script>

<style scoped>
ul{list-style: none;}
ul li {font-size: 2em;}
/* Гл. значения */
.weather-data-container{
  width: 100%;
  height: 100%;
  background: #3269c4;
  color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.weather-data-icon{padding: 1.1em;}
.weather-data-location{
  font-size: 1em;
  opacity: 0.4;
}
.weather-data-temperature{font-size: 3em;}
/* Доп. значения */
.weather-data-details {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  padding: 0;
}
.weather-data-details li{
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 0.5em 0.5em 0.5em 1.6em;
  font-size: 1.1em;
  text-align: end;
}
.weather-data-details li i {padding-left: 0.5em;}
.weather-data-details-humidity{
  border-right: dotted 1px #fff;
  border-top: dotted 1px #fff;
}
.weather-data-details-feels-like{border-top: dotted 1px #fff;}
.weather-data-details-wind-direction{
  border-right: dotted 1px #fff;
  border-top: dotted 1px #fff;
}
.weather-data-details-wind{ border-top: dotted 1px #fff;}
</style>