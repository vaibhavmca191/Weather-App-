import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    const INIT_URL =
         "https://images.unsplash.com/photo-1733164845602-68d7347909e0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    
        const HOT_URL = "https://media.istockphoto.com/id/492393882/photo/dry-dhankar-lake.jpg?s=612x612&w=0&k=20&c=Y0zOaK2siKzMIJWSYuAuqzaj09hwEaqMh_jEs-Gqs2c=";
        const COLD_URL = "https://media.istockphoto.com/id/660422716/photo/icicle-with-snowcapped-himalayan-mountain.jpg?s=612x612&w=0&k=20&c=LgMMa1Vfi2HwxVY1NZmM5XRSFkGLy2Ara-fa365Ddy8=";
        const RAIN_URL = "https://media.istockphoto.com/id/105934727/photo/rain.webp?a=1&b=1&s=612x612&w=0&k=20&c=Z-21JImEjaPh55Ek00YRctuv1VNPwKJnlSDfySyonYw=";
    return  (
        <div className="InfoBox">
         
        <div className='cardContainer'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 
            ? RAIN_URL : info.temp > 15 
            ? HOT_URL 
            : COLD_URL
        }
        
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity > 80 
            ? <ThunderstormIcon/> :
             info.temp > 15 
            ? <WbSunnyIcon/> 
            : <AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temprature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like  = {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    );
}