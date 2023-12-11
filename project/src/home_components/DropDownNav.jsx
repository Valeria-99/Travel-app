import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import BackpackIcon from '@mui/icons-material/Backpack';
import ApartmentIcon from '@mui/icons-material/Apartment';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import FlightIcon from '@mui/icons-material/Flight';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

export default function DropDownNav() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 124 }} style={{border:"none",outline:"none"}}>
        <InputLabel id="demo-simple-select-autowidth-label" style={{color:"white"}}>Перелік </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
          
        >
            <MenuItem value="" style={{width:"450px"}}>
            <em>Один</em>
          </MenuItem>
          <MenuItem value={1}> <BackpackIcon/>&nbsp;&nbsp;Путівки</MenuItem>
          <MenuItem value={2}><ApartmentIcon/>&nbsp;&nbsp;Статус</MenuItem>
          <MenuItem value={2}> <TimeToLeaveIcon/>&nbsp;&nbsp;Автомобілі</MenuItem>
          <MenuItem value={3}> <FlightIcon/>&nbsp;&nbsp;Авіарейси</MenuItem>
          <MenuItem value={4}> <DirectionsBoatIcon/>&nbsp;&nbsp;Круїзи</MenuItem>
          <MenuItem value={5}> <LocalActivityIcon/>&nbsp;&nbsp;Що потрібно зробити</MenuItem>
          <MenuItem value={6}>Поїздки для мене</MenuItem>
          <MenuItem value={6}>Відкрийте для себе країни</MenuItem>
          <MenuItem value={6}>Туристичні пропозиції</MenuItem>
          <MenuItem value={6}>Надихатись</MenuItem>
          <MenuItem value={6}>Групи та зустрічі</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
