import React, { Component } from 'react'
import UserInput from './UserInput';

class MainUI extends Component {
    constructor() {
        super();
        this.state = {
            cityName: "",
            currentTemp: "",
            maxTemp: "",
            minTemp: "",
            humidity: "",
            airPressure: "",
            sunRise: "",
            sunSet: "",
            apiKey: "fd1f5b643734961e25f925f3e3639522"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&appid=${this.state.apiKey}`;
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(response => {
                // console.log(response);
                let max= (response.main.temp_max - 273.15);
                let min= (response.main.temp_min -273.15);
                let curr = (response.main.temp -273.15)
                let unix_rise=response.sys.sunrise;
                let unix_set= response.sys.sunset; // This is getting time in unix seconds since 1970
                let sunrise = new Date(unix_rise*1000); // converting the seconds in miliseconds
                let sunset = new Date(unix_set*1000);
                sunrise = sunrise.toString();
                sunset = sunset.toString();
                this.setState({
                    cityName: response.name,
                    currentTemp: curr,
                    maxTemp: max,
                    minTemp: min,
                    humidity: response.main.humidity,
                    airPressure: response.main.pressure,
                    sunRise: sunrise,
                    sunSet: sunset
                })
            })
            .catch(e => {
                console.log("error while fetching the data: ", e);
            })
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="main-class">
                <h1>Weather Report</h1>
                <UserInput
                    data={this.state}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                />
            </div>
        )
    }
}

export default MainUI;