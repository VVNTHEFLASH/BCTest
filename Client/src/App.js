import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const App = () => {
  return (
    <>
    <Typography varient='h1'>Black Coffer React App</Typography>
    <Link to={"dashboard"}>
        <Typography>Dashboard</Typography>
    </Link>
    <Link to={"pagination"}>
        <Typography>Pagination</Typography>
    </Link>
    <Link to={"analytics/charts"}>
        <Typography>Analytics/Charts</Typography>
    </Link>
    </>
  )
}

export default App