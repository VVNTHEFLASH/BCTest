import { ListItem } from '@material-ui/core'
import { Card, Grid, List, ListItemText, Typography } from '@mui/material'
import FlatList from 'flatlist-react'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BASEURL } from '../../secret'



const Dashboard = () => {

  const [Data, setData] = useState([])
useEffect(() => {  
  getChartData()
}, [])

const getChartData = async () => {
  const url = `${BASEURL}/limitrecord`
  await fetch(url, {
    method: 'GET'
  }).then((res) => res.json())
  .then((result) => {
    setData(result)
    console.log(result, "Data Chart")
  })
}

function renderItem(item, idx) {
  return(
    <ListItem key={idx}>
      <ListItemText>{countryRender(item.country)}</ListItemText>
      <ListItemText>{item.title}</ListItemText>
    </ListItem>
  )
}

function countryRender(country){
  if(country === ""){
    return "Country data not available"
  }
  return country;
}
  return (
    <>
    <Card>
        <Link  to={"/"}>
            <p>Back</p>
        </Link>
    </Card>
    <Grid>
      <List>
        <FlatList 
        list={Data}
        renderItem={renderItem}
        // limit={'10'}
        hasMoreItems
        />
      </List>
    </Grid>
    </>
  )
}

export default Dashboard