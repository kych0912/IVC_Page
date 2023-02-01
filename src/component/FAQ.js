import {Box,Typography} from '@mui/material';

export default function Main(){
    return(
        <Box sx={{height: '100vh', width:'100%',backgroundColor:'black'}}>
          <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',pt:20}}>
            <Typography color="white" sx={{fontSize:50,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
              Email
            </Typography>
            <Typography color="white" sx={{fontSize:50,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
              Instagram
            </Typography>
            <Typography color="white" sx={{fontSize:50,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
              KakaoTalk
            </Typography>
          </Box>
        </Box>
    )
}