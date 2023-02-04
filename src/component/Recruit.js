import {Box,Typography,Button,Link} from '@mui/material';
import React, { useState } from "react";

export default function Main(){
    return(
        <Box className="App-header" sx={{ width:'100%',backgroundColor:'black',height:'100vh'}}>
          <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',pt:8}}>
            <Box sx={{pb:5,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <Typography color="white" sx={{fontSize:50,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                    RECRUIT
                </Typography>

                <Box sx={{display:'flex', maxWidth:'750px',justifyContent:'center',flexDirection:'column',alignItems:'center',pb:10}}>
                    <Box sx={{display:'flex'}}>
                        <Typography color='white' fontSize={{xs:30, md:50}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',alignItems:'center', pt:8}}>
                            당신의 &nbsp;
                        </Typography>
                        <Typography color='white' fontSize={{xs:30, md:50}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center', pt:8}}>
                            새로운 도전에
                        </Typography>
                    </Box>
                    <Box sx={{display:'flex'}}> 
                        <Typography color='white' fontSize={{xs:30, md:50}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center', pt:3}}>
                            인하벤처클럽이 &nbsp;
                        </Typography>
                        <Typography color='white' fontSize={{xs:30, md:50}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',alignItems:'center', pt:3}}>
                            함께하기를
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{display:'flex'}}>
                    <Box sx={{pr:{xs:3,md:5}}}>
                        <Link underline="none" color="inherit" href="https://ivcresume.s3.ap-northeast-2.amazonaws.com/%EC%9D%B8%ED%95%98%EB%B2%A4%EC%B2%98%ED%81%B4%EB%9F%BD+27%EA%B8%B0+%EC%A7%80%EC%9B%90%EC%84%9C.docx">
                            <Button sx={{border:1,color:'white',padding:2}}>
                                <Typography color="white" sx={{fontSize:{xs:20,md:30},fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                                    지원서 다운로드
                                </Typography>
                            </Button>
                        </Link>
                    </Box>
                    <Box>
                        <Link underline="none" color="inherit" href="https://forms.gle/K5DJy9W8r2RTmftW7">
                            <Button sx={{border:1,color:'white',padding:2}}>
                                <Typography color="white" sx={{fontSize:{xs:20,md:30},fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                                    지원서 제출
                                </Typography>
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
          </Box>
        </Box>
    )
}