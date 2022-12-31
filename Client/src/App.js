import { Button, Drawer, Typography, Box, 
  List, ListItem, ListItemButton, ListItemIcon, ListItemText,
  Divider, AppBar as MuiAppBar, CssBaseline, Toolbar, IconButton
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { Analytics, Menu, ChevronLeft, ChevronRight,
  Dashboard,
  AutoStories
} from '@mui/icons-material';


import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import BCDashboard from './Dashboard/Dashboard';
import Pagination from './Pagination/Pagination';
import IndividualCharts from './Analytics/IndividualCharts/IndividualCharts';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const App = () => {
  // Navigation
  const navigate = useNavigate()

  // Drawer
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          Black Coffer React App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Dashboard", "Pagination"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => navigate(index === 0 ? '/dashboard' : '/pagination')}>
                <ListItemIcon>
                  {index === 0 && <Dashboard />} 
                  {index === 1 && <AutoStories />} 
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Analytics & Sample Charts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => navigate("/analytics/charts")}>
                <ListItemIcon>
                  <Analytics/>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {/* <>
          <Typography varient='h1'>Black Coffer React App</Typography>
          <Button onClick={() => navigate('/dashboard') }>
            <Typography>Dashboard</Typography>
          </Button>
          <Button onClick={() => navigate('/pagination') }>
            <Typography>Pagination</Typography>
          </Button>
          <Button onClick={() => navigate('/analytics/charts') }>
            <Typography>Analytics/Charts</Typography>
          </Button>
        </> */}
        <Routes>
          <Route exact path='/' element={<BCDashboard />} />
          <Route path='/pagination' element={<Pagination />} />
          <Route path='/analytics/individualCharts/:id' element={<IndividualCharts />} />
        </Routes>
      </Main>
    </Box>
    </>
  )
}

export default App