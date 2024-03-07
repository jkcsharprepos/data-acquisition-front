import './App.css';
import SingleElement from "./SingleElement";
import axios from "axios";
import * as React from "react";
import {AppBar, Button, Input, ThemeProvider, Toolbar} from "@mui/material";
import { useState } from "react";
import { Grid } from '@mui/material';


import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

import { styled, alpha } from '@mui/material/styles';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));


function App() {

    const [elements, setElements] = useState([
        {
            title:"Smartfon APPLE iPhone 14 Plus 128GB 5G 6.7",
            imgUrl:"https://prod-api.mediaexpert.pl/api/images/gallery_290_300/thumbnails/images/41/4118042/Smartfon-APPLE-14-Plus-Polnoc-1.jpg",
            price:"Cena: 3200",
            attributeList:["Pamięć RAM:4GB","Pamięć wbudowana [GB]:128","Procesor:Apple A14 Bionic, Sześciordzeniowy",
                "Aparat:Tylny 2 x 12 Mpx, Przedni 12 Mpx","Komunikacja:5G, Wi-Fi, NFC, Bluetooth 5.0, Złącze Lightning","Wersja systemu:iOS 14"],
            key:"product100"
        },{
            title:"Smartfon APPLE iPhone 14 Plus 128GB 5G 6.7",
            imgUrl:"https://prod-api.mediaexpert.pl/api/images/gallery_290_300/thumbnails/images/41/4118042/Smartfon-APPLE-14-Plus-Polnoc-1.jpg",
            price:"Cena: 3200",
            attributeList:["Pamięć RAM:4GB","Pamięć wbudowana [GB]:128","Procesor:Apple A14 Bionic, Sześciordzeniowy",
                "Aparat:Tylny 2 x 12 Mpx, Przedni 12 Mpx","Komunikacja:5G, Wi-Fi, NFC, Bluetooth 5.0, Złącze Lightning","Wersja systemu:iOS 14"],
            key:"product101"
        }
    ]);



    let returnProducts =async ()=>{
        let elements=[];
        let productName = document.getElementById("productName").value;

        // console.log("Euro");
        // let response = await axios.get(`http://localhost:4000/euro/search/${productName}`);
        // for(let singleElement of response.data){
        //     if(!singleElement.price) continue;
        //     elements.push({title:singleElement.title,imgUrl:singleElement.imgUrl,price:"Cena: "+singleElement.price+" zł",attributeList:singleElement.attributes,key:singleElement.key})
        // }

        console.log("Media");
       let response = await axios.get(`http://localhost:4000/mediaexpert/search/${productName}`);
        for(let singleElement of response.data){
            if(!singleElement.price) continue;
            elements.push({title:singleElement.title,imgUrl:singleElement.imgUrl,price:"Cena: "+singleElement.price+" zł",attributeList:singleElement.attributes})
        }




        // setElements(elements);

        return 0;
    }

  return (
    <div className="App">
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>

                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase id="productName"
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Button color="inherit" onClick={returnProducts}>Pobierz</Button>
                </Toolbar>
            </AppBar>
        </Box>


                <Grid container
                      direction="row"
                      justifyContent="center"
                      alignItems="center">

                    {elements.map((value)=>{
                        return <SingleElement title={value.title}
                                              imgUrl={value.imgUrl}
                                              price={value.price}
                                              attributeList={value.attributeList}
                                              key={value.key}
                        >
                        </SingleElement>

                    })}
                </Grid>

    </div>

  );
}

export default App;
