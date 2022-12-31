import React from 'react';

import { FormControl, InputLabel, Select, MenuItem} from "@mui/material"

const MUISelect = ({defaultLabel, menuData =  [], label, selectedValue, handleChange }) => {
  return (
   <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">{defaultLabel}</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={selectedValue}
      label={label}
      onChange={handleChange}
      >
      {menuData.map((data) => <MenuItem key={data} value={data}>{data}</MenuItem>)}
    </Select>
  </FormControl>  )
}

export default MUISelect;