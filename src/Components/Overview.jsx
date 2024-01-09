import { Box, Typography , styled , Card , CardContent } from "@mui/material"
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';

import CountUp from 'react-countup';
import Transactions from "./Transactions";
const Container = styled(Box)(({theme})=>({
    
    width:'1152px',
    marginLeft:'40vh',
    marginTop:'-90vh'
    
   })) ;
const Container1 = styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    alignSelf:'stretch'
   })) ;
const MonthDropdown = styled(Typography)(({theme})=>({
    width:'127px',
    height:'26px',
    flexShrink:'0',
    borderRadius:"4px",
    border:'1px solid #D9D9D9',
    background:"#fff",
    display:"flex",
    alignItems:'center',
    gap:'3vh'
   })) ;
   const Container2 = styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    alignSelf:'stretch',
    marginTop:'2vh'
   })) ;
   const Cards = styled(Card)(({theme})=>({
   
   
   }));
   const Card1 = styled(Card)(({theme})=>({
    width:'40vh',
    height:'124px',
    display:'flex',
    padding:"var(--Spacing-spacing-07, 20px)",
    alignItems:'flex-start',
    gap:'16px',
    
    borderRadius:"var(--Spacing-spacing-04, 8px)",
    background:"var(--Primary-Blue, #146EB4)"
   
   }));
   
   const OrdersandPayments = styled(Typography)(({theme})=>({
   
    display:"flex",
    
    alignItems:'center',
    gap:"12vh"
    }))
   const Payment = styled(Typography)(({theme})=>({
     
      display:"flex",
      alignItems:'center',
     fontSize:'32px',
     color:'var(--Black-100, #FFF)',
     fontWeight:"500",
     fontFamily:'Galano Grotesque',
    
    }))
   const Orders = styled(Typography)(({theme})=>({
   
    display:"flex",
    alignItems:'center',
    gap:'1vh',
    color:"#fff",
    textDecoration:'underline',
    cursor:"pointer"
    }))
   const NextPayment = styled(Box)(({theme})=>({
    width:'337.67px',
    display:'flex',
    justifyContent:"space-around",
    alignItems:'flex-start',
    position:"relative",
    top:'33px',
    right:'5vh',
    borderRadius:"var(--Spacing-spacing-04, 8px)",
    background:"var(--Hover-Blue, #0E4F82)",
    color:"#fff",
    }))

const Overview = ()=>{
    return(
        <Container>
        <Container1>
            <Typography style={{fontFamily:'Galano Grotesque' , color:"#1A181E" , fontSize:"20px" , fontWeight:'500'}}>Overview</Typography>
            <MonthDropdown >This month
                <ArrowDropDownOutlinedIcon/>
            </MonthDropdown>

        </Container1>
        <Container2>
        {/* Card1 */}
        <Card1 variant="outlined">
          <CardContent>
            <Typography sx={{ fontSize: 14  , display:"flex" , alignItems:'center' , gap:'3vh'}} color="text.secondary" gutterBottom>
              Next Payout 
              <HelpOutlineOutlinedIcon sx={{fontSize:"20px"}}/>
            </Typography>
            <OrdersandPayments>
            <Payment >
                <CurrencyRupeeOutlinedIcon style={{fontSize:"30px"}}/>
              <CountUp start={0} end={2312.23} duration={2.5} seperation = "," />
            </Payment>
            <Orders>
                23 Orders 
                <ArrowForwardIosOutlinedIcon sx={{fontSize:"15px"}}/>
            </Orders>
            </OrdersandPayments>
            <NextPayment>
              <Typography style={{fontSize:'14px' , fontWeight:'400'}}>Next Payment Date</Typography>
              <Typography style={{fontSize:'14px' , fontWeight:'400'}}>Today, 04:00PM</Typography>
            </NextPayment>
          </CardContent>
        </Card1>

        {/* Card2 */}
        <Cards variant="outlined">
          <CardContent>
          <Typography sx={{ fontSize: 14  , display:"flex" , alignItems:'center' , gap:'3vh'}} color="text.secondary" gutterBottom>
              Amount Pending
              <HelpOutlineOutlinedIcon sx={{fontSize:"20px"}}/>
            </Typography>
            <OrdersandPayments>
            <Payment >
                <CurrencyRupeeOutlinedIcon style={{fontSize:"30px" , color:'black'}}/>
              <CountUp style={{color:'black' , fontWeight:'bold'}} start={0} end={92312.23} duration={2.5} seperation = "," />
            </Payment>
            <Orders style={{textDecoration:'underline' , color:'blue' , cursor:"pointer"}}>
                13 Orders 
                <ArrowForwardIosOutlinedIcon sx={{fontSize:"15px"}}/>
            </Orders>
            </OrdersandPayments>
          </CardContent>
        </Cards>
        {/* Card3 */}
        <Cards variant="outlined">
          <CardContent>
          <Typography sx={{ fontSize: 14  , display:"flex" , alignItems:'center' , gap:'3vh'}} color="text.secondary" gutterBottom>
              Amount Processed
              <HelpOutlineOutlinedIcon sx={{fontSize:"20px"}}/>
            </Typography>
            <OrdersandPayments>
            <Payment >
                <CurrencyRupeeOutlinedIcon style={{fontSize:"30px" , color:'black'}}/>
              <CountUp style={{color:'black' , fontWeight:'bold'}} start={0} end={2392312.23} duration={2.5} seperation = "," />
            </Payment>
            <Orders>
                13 Orders 
                <ArrowForwardIosOutlinedIcon sx={{fontSize:"15px"}}/>
            </Orders>
            </OrdersandPayments>
          </CardContent>
        </Cards>
        </Container2>
        <Transactions/>
        </Container>
    )
}
export default Overview