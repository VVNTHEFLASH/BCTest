import React, { useState, useEffect } from 'react'
import { BASEURL } from '../../secret';
import { ListItem, Grid, List, ListItemText, Typography, Button } from '@mui/material'
import FlatList from 'flatlist-react';
import { Link, useNavigate } from 'react-router-dom';

const Pagination = () => {

  // Navigation 
  const navigate = useNavigate()

    const [page, setPage] = useState(0);
    const [Data, setData] = useState([]);

    useEffect(() => {
        getDataByPageNumber(page)
    }, [page])

    function getDataByPageNumber(_pageNo) {
        const url = `${BASEURL}/limitrecord/${_pageNo}`;
        fetch(url, {
            method: 'GET'
        }).then((res) => res.json())
        .then((result) => {
            setData(result)
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
          return "NA"
        }
        return country;
      }

  return (
    <>
    <Button onClick={() => navigate(-1) }>
        <Typography>Back</Typography>
    </Button>
    <Typography>The Current Page number is {page + 1}</Typography>
    <Typography>Each Page Ten Object will load</Typography>
    <div style={{
        display: 'flex',
        margin: 10
    }}>
      <Button onClick={()=> setPage(page - 1)}>
        <Typography fontSize={20}>-</Typography>
      </Button>
      <Typography>{page + 1}</Typography>
      <Button onClick={()=> setPage(page + 1)}>
        <Typography fontSize={20}>+</Typography>
      </Button>
    </div>
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

export default Pagination