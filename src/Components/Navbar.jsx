import{ AppBar, Toolbar,styled, Typography , Box , InputBase  } from '@mui/material'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

// Styling
const NavBar = styled(AppBar)(({theme})=>({
 background:'#fff',
 height:'7vh',
 display: 'flex',
flexDirection:'column',
 width: '1232px',
 justifyContent:'center',
 alignItems:'center'
 
})) ;

const Text1 = styled(Typography)(({theme})=>({
    color: '#1A181E',
    fontFamily:'Galano Grotesque',
    fontSize:'20px',
    fontWeight:'500',

   })) ;

const Text2 = styled(Typography)(({theme})=>({
    color: 'rgba(128, 128, 128, 1)',
    fontFamily:'Galano Grotesque',
    fontSize:'16px',
    fontWeight:'500',
    display:'flex',
    gap:'5px',
    marginLeft:'16px',

   })) ;


   const StyledInputBase = styled(InputBase)(({theme})=>({
    fontSize:"15px",
    fontFamily:"Galano Grotesque",
    fontWeight:"500",
    marginLeft:"2vh",
   

}))
const Search = styled(Box)(({theme})=>({
    width:'400px',
    height:'2vh',
    padding:'9px 16px',
    background:'#f2f2f2',
    display:'flex',
    alignItems:'center',
    borderRadius:'6px',
    marginLeft:'20vh',
    [theme.breakpoints.down('lg')]:{
     
      
      },
    [theme.breakpoints.down('sm')]:{
     
        },
}));
   const StyleIcon = styled(SearchIcon)(({theme})=>({
    marginLeft:"1vh" , 
    fontSize:'20px' , 
    marginTop:'.5vh',
    color:'black',
    
    [theme.breakpoints.down('sm')]:{
      marginLeft:"0vh",
      fontSize:"20px"
        },

}))
   const Icon = styled(Box)(({theme})=>({
    
    color:'black',
    background:"#f2f2f2",
    width:'40px',
    height:"35px",
    borderRadius: '30px',
    display:"flex",
    justifyContent:'center',
    alignItems:"center",
    cursor:'pointer',
    [theme.breakpoints.down('sm')]:{
      marginLeft:"0vh",
      fontSize:"20px"
        },

}))



const Navbar = ()=>{
    return(
       
        <Box>
         <NavBar>
            <Toolbar>
                <Text1 >Payouts</Text1>
                
                <Text2> <HelpOutlineOutlinedIcon/>How it works</Text2>
                <Search >
           <StyleIcon />
           <StyledInputBase 
            placeholder="Search..."
           
          />
           
            </Search>
            <Box  style={{display:'flex' , gap:"1vh", marginLeft:'40vh'}}>
            <Icon><EmailOutlinedIcon/></Icon>
            <Icon><ArrowDropDownOutlinedIcon/></Icon>
            </Box>
            </Toolbar>
         </NavBar>
        </Box>
         
    )
}

export default Navbar;