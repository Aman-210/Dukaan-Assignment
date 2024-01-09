import{ styled,  Box  } from '@mui/material'

import Navbar from "./Navbar";
import Overview from "./Overview";
import Sidebar from "./Sidebar";


const Container = styled(Box)(({theme})=>({
   display:'flex',
   flexDirection:'column',
   minHeight:'100vh',

   })) ;
const Box1 = styled(Box)(({theme})=>({
   
   })) ;
const Box2 = styled(Box)(({theme})=>({
   
   })) ;
const Box3 = styled(Box)(({theme})=>({
  flex:'1'
    

   })) ;


const Home = ()=>{
    return(
       <Container> 
        <Box1><Navbar/></Box1>
        <Box2><Sidebar/></Box2>
        <Box3><Overview/></Box3>
        
       </Container>
    )
}


export default Home;