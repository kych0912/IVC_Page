import {Box,Typography} from '@mui/material';
import React from "react";
import Accordion from './accordion';
import './App.css';
import {useState} from "react";
import AWS from 'aws-sdk';


export default function Main(){
    const [progress , setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);
    const [showAlert, setShowAlert] = useState(false);

    const ACCESS_KEY = 'IAM의 ACCESS KEY';
    const SECRET_ACCESS_KEY = 'IAM의 SECRET ACCESS KEY';
    const REGION = "ap-northeast-2";
    const S3_BUCKET = 'codegear-react-file-upload-test-bucket';

    AWS.config.update({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY
    });

    const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET},
    region: REGION,
    });

    return(
        <Box sx={{ width:'100%',backgroundColor:'black'}}>
          <Box sx={{display:'flex',justifyContent:'start',alignItems:'start',flexDirection:'column',pt:15}}>
            <Box sx={{pb:5}}>
              <Typography color="white" sx={{fontSize:50,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                Email
              </Typography>
              <Typography color="white" sx={{fontSize:30,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                kyt031522@inha.edu
              </Typography>
            </Box>
            <Box sx={{pb:5}}>
              <Typography color="white" sx={{fontSize:50,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                Instagram
              </Typography>
              <Typography color="white" sx={{fontSize:30,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                @ivc_inha
              </Typography>
            </Box>
            <Box sx={{pb:5}}> 
              <Typography color="white" sx={{fontSize:50,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                KakaoTalk
              </Typography>
              <Typography color="white" sx={{fontSize:30,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                준비중...
              </Typography>
            </Box>
          </Box>
          <Box paddingBottom={'100px'} sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
              <Typography paddingBottom ={'50px'} color="white" sx={{fontSize:50,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                FAQ
              </Typography>
              <Accordion />
          </Box>
        </Box>
    )
}