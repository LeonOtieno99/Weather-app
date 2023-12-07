import * as React from 'react';
import { AppBar, Box, Button, Container, TextField, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function WeatherApp() {  

     const getweather = async () => {    
        try{
            const cityInput = document.getElementsByName('city')[0];
            const city = cityInput.value;
            var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9976448f19a759b98f26c70a0279b43f&units=metric`);
            var data = await res.json();
            document.querySelector('.celsius').innerHTML = 'Temperature: '+data.main.temp + '°C';
            document.querySelector('.city').innerHTML = data.name;
            document.querySelector('.humidity').innerHTML = 'Humidity: ' + data.main.humidity + '%';
            document.querySelector('.wind').innerHTML = 'Wind Speed: '+data.wind.speed + 'km/h';
            document.querySelector('.country').innerHTML = 'Country: '+ data.sys.country;
            let icon = data.weather[0].icon;
            document.querySelector('.icon img').setAttribute('src', `http://openweathermap.org/img/w/${icon}.png`);
            document.querySelector('.main').innerHTML = 'Weather: '+ data.weather[0].main;
            document.querySelector('.desc').innerHTML ='Description: ' + data.weather[0].description;
            document.querySelector('.err').innerHTML = " "
        }
        catch(err){
            document.querySelector('.icon').innerHTML = ' ';
            document.querySelector('.celsius').innerHTML = 'Temperature: ';
            document.querySelector('.city').innerHTML = ' ';
            document.querySelector('.humidity').innerHTML = 'Humidity: ';
            document.querySelector('.wind').innerHTML = 'Wind Speed: ';
            document.querySelector('.country').innerHTML = 'Country: ';
            document.querySelector('.main').innerHTML = 'Weather: ';
            document.querySelector('.desc').innerHTML ='Description: ';
            document.querySelector('.err').innerHTML = "City not found";
            setTimeout(function(){
                window.location.reload();
              },1000)
        }
    }
    const handlesearch = (e) => {
        if (e.key === 'Enter'){
            getweather();
        }
    }
    return(
        <div className='cover'>
            <Container style={{paddingBottom:'100px',
                
                }}>
            <AppBar>
                <Toolbar>
                    <Typography variant='h5'>Weather App</Typography>
                </Toolbar>
            </AppBar>
            </Container>
            <br />
            <Box
                component="form"
                noValidate
                autoComplete='off'
                >
                    <TextField id='outlined-basic' label='Enter City name' variant='outlined' name='city' 
                        inputProps={{style:{color:'white',borderColor:'white'}}}
                        InputLabelProps={{style:{color:'white'}}}
                        onKeyDown={handlesearch} />
                    <Button style={{padding:'8px', color:'white'}}
                        onClick={getweather}
                    >
                    <SearchIcon fontSize='large'/>
                    </Button>
            </Box>
            <br />

            <div className='weather'>
                <Typography className='city' variant='h4' style={{color:'white'}}></Typography>
                <div className='icon'>
                    <img style={{color:'white', width:'80px',height:'auto'}}/>
                </div>
                <Typography className='err' variant='h5' style={{color:'white'}}></Typography>
                <Typography className='main' variant='h6' style={{color:'white'}}>Weather: </Typography>
                <Typography className='desc' variant='h6' style={{color:'white'}}>Description: </Typography>
                <Typography className='celsius' variant='h6' style={{color:'white'}}>Temperature: </Typography>
                <Typography className='country' variant='h6' style={{color:'white'}}>Country: </Typography>
                <Typography className='humidity' variant='h6' style={{color:'white'}}>Humidity:</Typography>
                 <Typography className='wind' variant='h6' style={{color:'white'}}>Wind:</Typography>
                 
            </div>     
        </div>
    )
}