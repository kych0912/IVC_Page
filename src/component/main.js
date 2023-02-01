import '../App.css';
import {Container,Box} from "@mui/material";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const cards = [1, 2, 3];

export default function Main(){
    return(
        <Box sx={{textAlign:'center',backgroundColor:'black'}}>
        <header className="App-header">
          <p className='mainslogun'>
            IN your VENture, 
          </p>
          <p className='mainslogun1'>
            With our IVC.
          </p>
        </header>

        <Container sx={{display:'flex',alignItems:'center',justifyContent:'center',minWidth:'200px'}}>
            <Box sx={{flexDirection:'column',display:'flex', width:'1300px',alignItems:'center',justifyContent:'center'}}>
                <Typography color='white'sx={{ justifyContent:'center',fontSize:25,fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center', pt:8,fontSize:30}}>
                    인하벤처클럽은,
                </Typography>
                <Container sx={{width:'100%',height:'80vh',minHeight:'80vh'}}>
                    <Box sx={{display:'flex', justifyContent:'space-between',alignItems:'center',flexDirection:'row',height:'60vh'}}>
                        <Box sx={{display:'flex',justifyContent:'center',height:'100%',width:'80%',alignItems:'center',flexDirection:'column'}}>
                            <Typography color='white' fontSize={{xs:15, md:30}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center', pt:8}}>
                                인하대학교 대표 창업 동아리
                            </Typography>
                            <Typography color='white' fontSize={{xs:15, md:30}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center', pt:8}}>
                                창업지원단 소속 인하대학교 직속 창업동아리
                            </Typography>
                        </Box>
                        <Box sx={{display:'flex',justifyContent:'center',height:'100%',width:'80%',alignItems:'center',flexDirection:'column',pt:5}}>
                            <Box>
                                <Typography color='white' fontSize={{xs:16, md:30}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center', pt:5}}>
                                    전통이 있는 동아리
                                </Typography>
                                <Typography color='white' fontSize={{xs:12, md:20}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center', pt:5}}>
                                    1997년 조현정 회장님에 의해 설립
                                </Typography>
                            </Box>
                            <Box>
                                <Typography color='white' fontSize={{xs:16, md:30}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center', pt:5}}>
                                    창업에 강한 동아리
                                </Typography>
                                <Typography color='white' fontSize={{xs:12, md:20}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center', pt:5}}>
                                    매년 3팀 이상의 스타트업 배출
                                </Typography>
                            </Box>
                            <Box>
                                <Typography color='white' fontSize={{xs:16, md:30}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center', pt:5}}>
                                    능력있는 사람들의 모임
                                </Typography>
                                <Typography color='white' fontSize={{xs:12, md:20}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center', pt:5}}>
                                    2022년 10개 이상의 수상
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Container>

        <Container sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Box sx={{flexDirection:'column',display:'flex', width:'1300px',alignItems:'center',justifyContent:'center'}}>
                <Typography color='white'sx={{ justifyContent:'center',fontSize:25,fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center', pt:8,fontSize:30}}>
                    주요 활동
                </Typography>
                <Box>
                <Container sx={{ py: 5  }} maxWidth="lg">
                        {/* End hero unit */}
                        <Grid container px={5} py={5} width='100%'>
                            {cards.map((card) => (
                            <Grid px={3} py = {4} item key={card} xs={12} sm={4} md={4}>
                                <Card
                                sx={{height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                <CardMedia
                                    component="img"
                                    image="https://source.unsplash.com/random"
                                    alt="random"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                    Heading
                                    </Typography>
                                    <Typography>
                                    This is a media card. You can use this section to describe the
                                    content.
                                    </Typography>
                                </CardContent>
                                </Card>
                            </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </Container>

        <Container sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Box sx={{flexDirection:'column',display:'flex', width:'600px',alignItems:'center',justifyContent:'center'}}>
                    <Typography fontSize={{xs: 25, md: 25}} color='white'sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center', pt:8,fontSize:30}}>
                        신입부원 모집
                    </Typography>

                <Box sx={{display:'flex', maxWidth:'750px',justifyContent:'center'}}>
                    <Typography color='white' fontSize={{xs:25, md:25}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center', pt:8}}>
                        당신의 모험에 항상 IVC가 있기를
                    </Typography>
                </Box>
                <Box sx={{pb:10 ,px:10,pt:7}}>
                    <Button variant="contained" color="inherit" size="large" sx={{px:6, py:3}}>
                        <Link underline="none" color="inherit" href="/Recruit">
                            <Typography fontSize={{xs: 20, md: 25}} color='black'sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center'}}>
                                지원하기
                            </Typography>
                        </Link>
                    </Button>
                </Box>
            </Box>
        </Container>

        </Box>
    )
}