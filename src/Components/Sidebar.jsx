import{ AppBar, Toolbar,styled, Typography , Box ,  } from '@mui/material'
// Import icons
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

// Styling
const NavBar = styled(AppBar)(({theme})=>({
    background:'#1E2640',
    height:'100vh',
    width: '241px',
    
   
    
   })) ;
const Nav = styled(Toolbar)(({theme})=>({
    
    display:"flex",
    flexDirection:'column',
    gap:'24px',
    flex:'1 0 0',
    alignItems:'flex-start',
    
   })) ;
const UpperContent = styled(Box)(({theme})=>({
    
    display: 'flex',
    width: '192px',
    alignItems: 'center',
    gap: 'var(--Spacing-spacing-05, 28px)',
   })) ;
const Image = styled(Typography)(({theme})=>({
    width:'39px',
   height:'39px',
   borderRadius:'4px',
   position:'relative',
   
   top:'0.5px',
   background:`url(${process.env.PUBLIC_URL}/Image.png)   no-repeat`,
   backgroundSize:'cover'

   })) ;
const StoreInfo = styled(Typography)(({theme})=>({
  
  
   })) ;
const StoreName = styled(Typography)(({theme})=>({
    fontFamily:'Inter',
    fontSize:'15px' , 
    fontWeight:'500' , 
    lineHeight:'22px' , 
    alignSelf:'stretch'
   })) ;
const StoreLink = styled('a')(({theme})=>({
    fontSize:'13px' ,
    fontWeight:'400' , 
    lineHeight:'16px' , 
    textDecorationLine:'underline',
    color:'#fff',
    opacity:'0.8',
    alignSelf:'stretch',
    position:'relative',
    bottom:'3vh',

   })) ;
const Dropdown = styled(Box)(({theme})=>({
    
   })) ;
const MiddleContent = styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    
    gap:'2vh'
   })) ;
const Tab = styled(Box)(({theme})=>({
    display:'flex',
    gap:'3vh'
   })) ;
const Icons = styled(Box)(({theme})=>({
    
   })) ;
const LowerIcon = styled(Box)(({theme})=>({
    position:"relative",
    top:'1.5vh',
    width:'24px',
    height:'24px',
   })) ;
   const LowerContent = styled(Box)(({theme})=>({
    background:'#353C53',
    display:'flex',
    width:"182px",
    padding:'6px 12px',
    marginTop:'10vh',
    marginLeft:'-1vh',
    gap:'15px',
    borderRadius:'4px',
    
   })) ;
   const Balance = styled(Box)(({theme})=>({
    
    
   })) ;

const Sidebar = ()=>{
    return(
        <Box>
        <NavBar position="static">
            <Nav>
            <UpperContent>
                <Image></Image>
                <StoreInfo>
                     <StoreName>  <h4 >Nishyan</h4>  </StoreName>
                     <StoreLink  href="/">visit store</StoreLink>
                </StoreInfo>
                <Dropdown>
                <ArrowDropDownOutlinedIcon/>
                </Dropdown>
            </UpperContent>
            <MiddleContent>
            <Tab><Icons><HomeOutlinedIcon/></Icons><Typography>Home</Typography></Tab>
            <Tab><Icons><FeedOutlinedIcon/></Icons><Typography>Orders</Typography></Tab>
            <Tab><Icons><GridViewOutlinedIcon/></Icons><Typography>Products</Typography></Tab>
            <Tab><Icons><AirportShuttleOutlinedIcon/></Icons><Typography>Delivery</Typography></Tab>
            <Tab><Icons><CampaignOutlinedIcon/></Icons><Typography>Marketing</Typography></Tab>
            <Tab><Icons><EqualizerOutlinedIcon/></Icons><Typography>Analytics</Typography></Tab>
            <Tab><Icons><PaymentsOutlinedIcon/></Icons><Typography>Payouts</Typography></Tab>
            <Tab><Icons><DiscountOutlinedIcon/></Icons><Typography>Discounts</Typography></Tab>
            <Tab><Icons><Person2OutlinedIcon/></Icons><Typography>Audience</Typography></Tab>
            <Tab><Icons><PaletteOutlinedIcon/></Icons><Typography>Appearance</Typography></Tab>
            <Tab><Icons><ElectricBoltOutlinedIcon/></Icons><Typography>Plugins</Typography></Tab>
            </MiddleContent>

            <LowerContent>
                <LowerIcon>
                <AccountBalanceWalletOutlinedIcon/>
                </LowerIcon>
                <Balance>
                 <Typography>Available Credits</Typography>   
                 <Typography>222.10</Typography>   
                </Balance>
            </LowerContent>
            </Nav>
        </NavBar>
        </Box>
    )
}

export default Sidebar;