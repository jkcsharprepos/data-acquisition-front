import * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';

import { Grid } from '@mui/material';

function SingleElement(props) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <Grid item md={3} sx={{ m: 1 }}>
                <Card className="SingleElement" sx={{ maxWidth: 345, minHeight: 345 }}>
                    <Card sx={{ maxWidth: 345, minHeight: 345 }}>


                        <CardMedia>
                            <img sx={{ m: 3 }} height="150px" src={props.imgUrl}></img>
                        </CardMedia>

                    <CardContent>
                        <CardMedia>
                            {props.title}
                        </CardMedia>
                        <CardMedia>
                            {props.price}
                        </CardMedia>




                        <Typography sx={{ lineHeight: 1 }} fontSize="12px" color="text.secondary">


                            <List>

                                {props.attributeList.map((value,idValue)=>{
                                   return <ListItem key={'ListElement:'+idValue}>{value}</ListItem>
                                })}

                            </List>


                        </Typography>
                    </CardContent>

                    </Card>
                </Card>
        </Grid>

    );
}

export default SingleElement;
