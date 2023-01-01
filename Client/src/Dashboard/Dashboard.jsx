import FlatList from 'flatlist-react'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_KEY, BASEURL, COLLECTION, DATABASE, DATA_SOURCE } from '../../secret'
import { 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Typography,
  Box, Button
} from '@mui/material';
import MUISelect from '../../components/MUISelect';


const Dashboard = () => {

  const [Data, setData] = useState([])
  const [filteredData, setFilterData] = useState([])
useEffect(() => {  
  getChartData()
}, [])

const getChartData = async () => {
  const url = `${BASEURL}/countryrecord`
  await fetch(url, {
    method: 'GET'
  }).then((res) => res.json())
  .then((result) => {
    setData(result)
    setFilterData(result)
    console.log(result, 'getChartData')
  })
}

// const getChartData = () => {
//   var myHeaders = new Headers();
// myHeaders.append("api-key", "g2JbR7rJoulw2l5kDJsVSKwNbLf7X27qSjl5zAPl0timCuo0ta8p8pTqLQ7U2ho6");
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({
//   "dataSource": "FriendNationCluster",
//   "database": "BlackCoffer",
//   "collection": "Test"
// });

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("https://data.mongodb-api.com/app/data-kecdz/endpoint/data/v1/action/find", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
// }
// filtering dropdown options
const sector = Data?.map((item) => item.sector )
const uniqueSector = Array.from(new Set(sector));
// filtering country
const country = Data?.map((item) => item.country )
const uniqueCountry = Array.from(new Set(country));
// filtering end year
const end_year = Data?.map((item) => item.end_year ).sort((a, b) =>  new Date().setFullYear(a) - new Date().setFullYear(b) )
const uniqueEndYear = Array.from(new Set(end_year))
// filtering source
const source = Data?.map((item) => item.source )
const uniqueSource = Array.from(new Set(source));
// filtering topic
const topic = Data?.map((item) => item.topic )
const uniqueTopic = Array.from(new Set(topic));
// filtering region
const region = Data?.map((item) => item.region )
const uniqueRegion = Array.from(new Set(region));

function renderItem(item, idx) {
  return(
    <TableRow
      key={idx}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component={'td'} scope="row">
        <Button onClick={() => navigate(`/analytics/individualCharts/${item.title}`,{ state: { data: item } }) }>{item.title}</Button>
      </TableCell>
      <TableCell align="left">
          <Button onClick={() => navigate(`/analytics/individualCharts/${item.title}`,{ state: { data: item } }) }>{item.country}</Button>
      </TableCell>
      <TableCell align="left">{item.topic}</TableCell>
      <TableCell align="left">{item.pestle}</TableCell>
      <TableCell align="left">{item.sector}</TableCell>
      <TableCell align="left">{item.region}</TableCell>
      <TableCell align="left">{item.end_year}</TableCell>
      <TableCell align="left">{item.source}</TableCell>
  </TableRow>
  )
}

const handleChangeSector = (event) => {
  SetSelectedSector(event.target.value);
  const TempData = []
  Data.slice(0).filter((item) => {
    if(item.sector === event.target.value){
      TempData.push(item)
    }
  })
  setFilterData(TempData)
  setSelectedEndYear('')
  SetSelectedSource('')
  SetSelectedCountry('')
  setSelectedTopic('')
  setSelectedRegion('')
};

const handleChangeCountry = (event) => {
  SetSelectedCountry(event.target.value);
  const tempData = []
  Data.slice(0).filter((item) => {
    if(item.country === event.target.value){
      tempData.push(item)
    }
  })
  setFilterData(tempData)
  setSelectedEndYear('')
  SetSelectedSource('')
  SetSelectedSector('')
  setSelectedTopic('')
  setSelectedRegion('')
}

const handleChangeEndYear = (event) => {
  setSelectedEndYear(event.target.value);
  const tempData = []
  Data.slice(0).filter((item) => {
    if(item.end_year === event.target.value){
      tempData.push(item)
    }
  })
  setFilterData(tempData)
  SetSelectedCountry('')
  SetSelectedSector('')
  SetSelectedSource('')
  setSelectedTopic('')
  setSelectedRegion('')
}

const handleChangeSource = (event) => {
  SetSelectedSource(event.target.value);
  const tempData = [];
  Data.slice(0).filter((item) => {
    if(item.source === event.target.value){
      tempData.push(item)
    }
  })
  setFilterData(tempData)
  SetSelectedCountry('')
  setSelectedEndYear('')
  SetSelectedSector('')
  setSelectedTopic('')
  setSelectedRegion('')
}

const handleChangeTopic = (event) => {
  setSelectedRegion(event.target.value);
  const tempData = [];
  Data.slice(0).filter((item) => {
    if(item.source === event.target.value){
      tempData.push(item)
    }
  })
  setFilterData(tempData)
  SetSelectedCountry('')
  setSelectedEndYear('')
  SetSelectedSector('')
  SetSelectedSource('')
  setSelectedRegion('')
}

const handleChangeRegion = (event) => {
  setSelectedRegion(event.target.value);
  const tempData = [];
  Data.slice(0).filter((item) => {
    if(item.source === event.target.value){
      tempData.push(item)
    }
  })
  setFilterData(tempData)
  SetSelectedCountry('')
  setSelectedEndYear('')
  SetSelectedSector('')
  SetSelectedSource('')
  setSelectedTopic('')
}

const [selectedSector, SetSelectedSector] = useState('');
const [selectedCountry, SetSelectedCountry] = useState('');
const [selectedEndYear, setSelectedEndYear] = useState('')
const [selectedSource, SetSelectedSource] = useState('')
const [selectedTopic, setSelectedTopic] = useState('')
const [selectedRegion, setSelectedRegion] = useState('')

// Navigation
const navigate = useNavigate()

  return (
    <>
    <Button onClick={() => navigate(-1)}>Go Back</Button>
    <Grid>
      <Typography variant={'h6'}>Filters</Typography>
    </Grid>
    <div style={{
      display: "flex",
     }}>
      <Box sx={{ width: 150, marginLeft: 2 }}>
        <MUISelect selectedValue={selectedCountry} menuData={uniqueCountry} 
        label={"Country"} handleChange={handleChangeCountry} defaultLabel={"Country"} />
      </Box>
      <Box sx={{ width: 150, marginLeft: 2 }}>
        <MUISelect selectedValue={selectedSector} menuData={uniqueSector}
        label={"Sector"} handleChange={handleChangeSector} defaultLabel={"Sector"} />
      </Box>
      <Box sx={{ width: 150, marginLeft: 2 }}>
        <MUISelect selectedValue={selectedEndYear} menuData={uniqueEndYear}
        label={"Year"} handleChange={handleChangeEndYear} defaultLabel={"Year"} />
      </Box>
      <Box sx={{ width: 150, marginLeft: 2 }}>
        <MUISelect selectedValue={selectedSource} menuData={uniqueSource}
        label={"Source"} handleChange={handleChangeSource} defaultLabel={"Source"} />
      </Box>
      <Box sx={{ width: 150, marginLeft: 2 }}>
        <MUISelect selectedValue={selectedTopic} menuData={uniqueTopic}
        label={"Topic"} handleChange={handleChangeTopic} defaultLabel={"Topic"} />
      </Box>
      <Box sx={{ width: 150, marginLeft: 2 }}>
        <MUISelect selectedValue={selectedRegion} menuData={uniqueRegion}
        label={"Region"} handleChange={handleChangeRegion} defaultLabel={"Region"} />
      </Box>
    </div>
    <Grid>
        <Typography variant='h5' fontWeight={'bold'}>Table:-</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow component={'th'}>
                <TableCell>Title</TableCell>
                <TableCell align="left">Country</TableCell>
                <TableCell align="left">Topic</TableCell>
                <TableCell align="left">PEST</TableCell>
                <TableCell align='left'>Sector</TableCell>
                <TableCell align='left'>Region</TableCell>
                <TableCell align='left'>End year</TableCell>
                <TableCell align='left'>Source</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <FlatList 
                list={filteredData}
                renderItem={renderItem}
              />
            </TableBody>
          </Table>
        </TableContainer>
    </Grid>
    </>
  )
}

export default Dashboard