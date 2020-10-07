export default class TodayWeather{
    constructor(){
        this.url = 'https://api.weatherbit.io/v2.0/current?';
        this.apiKey = '823bb590e7d943b7af67eb1635a03f0f';

        this.geo = navigator.geolocation;
    }

    getCoordinates(){
        if(this.geo){
            this.geo.getCurrentPosition((location)=>{
                console.log(location.coords.latitude);
                console.log(location.coords.longitude);
            })
        } else {
            alert("No Data");
        }
    }
}