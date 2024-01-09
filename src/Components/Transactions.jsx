import { Box , styled, Typography } from "@mui/material"
import Dashboard from "./Dashboard";


const Container = styled(Box)(({theme})=>({
    
    width:'1152px',
    
    marginTop:'5vh'
    
   })) ;
const Container1 = styled(Box)(({theme})=>({
    
    
    
   })) ;
const Title = styled(Typography)(({theme})=>({
    
    color:'var(--Black-12, #1A181E)',
    fontFamily:'Galano Grotesque',
    fontSize:'20px',
    fontWeight:'500',
    lineHeight:'28px'
    
   })) ;
   const Container2 = styled(Box)(({theme})=>({
    
    display:'flex',
    padding:"6px 16px",
    alignItems:'center',
    gap:'6px'
    
   })) ;
   const Buttons = styled(Box)(({theme})=>({
    width:"100px",
    height:'4vh',
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:"40px",
    fontFamily:"Inter",

   })) ;
   


const Transactions  = ()=>{
    return(
        <Container>
         <Container1>
            <Title>Transactions | This Month</Title>
         </Container1>
         <Container2>
            <Buttons style={{  background:"var(--Black-90, #E6E6E6)", color:"var(--Black-50, #808080)"}}>Payouts (22)</Buttons>
            <Buttons style={{  background:"var(--Black-90, #146EB4)", color:"#fff"}}>Refund (6)</Buttons>
         </Container2>
         <Dashboard/>
        </Container>
    )
}

export default Transactions