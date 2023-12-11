import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function SideSelect() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      style={{ display: "flex", justifyContent: "center"  }}
      sx={{ width: "100%" , height:"50px"}}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <Tab value="one" label="Статуси" wrapped style={{fontWeight:"bolder"}} />
        <Tab value="two" label="Авіарейси" style={{fontWeight:"500",width:"max-content"}} />
        <Tab value="three" label="Автомобілі" style={{fontWeight:"500",width:"max-content"}} />
        <Tab value="four" label="Путівки" style={{fontWeight:"500",width:"max-content"}} />
        <Tab value="five" label="Ексурсії" style={{fontWeight:"500",width:"max-content"}} />
        <Tab value="six" label="Круїзи" style={{fontWeight:"500",width:"max-content"}} />
      </Tabs>
    </Box>
  );
}
