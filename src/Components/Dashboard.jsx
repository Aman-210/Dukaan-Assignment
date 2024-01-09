import { Box  , styled , InputBase , TableCell , TableRow , TableHead , TableBody , Table,  } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ImportExportOutlinedIcon from '@mui/icons-material/ImportExportOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import CountUp from 'react-countup';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';

const Container = styled(Box)(({theme})=>({
    
   background:"var(--Black-100, #FFF)",
   display:'flex',
   width:'1152px',
   padding:'var(--Spacing-spacing-05, 12px) var(--Spacing-spacing-05, 12px) var(--Spacing-spacing-04, 8px) var(--Spacing-spacing-05, 12px);',
   flexDirection:'column',
   alignItems:'flex-start',
   justifyContent:"space-between",
   borderRadius:"var(--Spacing-spacing-04, 8px)",
   boxShadow:'0px 2px 6px 0px rgba(26, 24, 30, 0.04)'
    
   })) ;
const Header = styled(Box)(({theme})=>({
    
   display:'flex',
   gap:'106.5vh',
   alignItems:'center',
   
    
   })) ;

   const StyledInputBase = styled(InputBase)(({theme})=>({
    fontSize:"14px",
    fontFamily:"Galano Grotesque",
    fontWeight:"500",
    
   color:"var(--Black-60, #999)"

}))
const Search = styled(Box)(({theme})=>({
    width:'25vh',
    height:'2vh',
    padding:'10px 16px',
    border:' 1px solid var(--Black-85, #D9D9D9)',
    background:" var(--Black-100, #fff)",
    display:'flex',
    gap:'8px',
    alignItems:'center',
    borderRadius:'4px',
    flex:"1 0 0",
   
}));
   const StyleIcon = styled(SearchIcon)(({theme})=>({
    width:"14px",
    height:'14px',
    
    

}))
   const Buttons = styled(Box)(({theme})=>({  
    display:"flex",
    alignItems:"center",
    gap:'2vh',
    
}))
   const Button1 = styled(Box)(({theme})=>({  
    width:'45px',
    height:'3vh',
    padding:" 6px var(--Spacing-spacing-05, 12px)",
    flexShrink:'0',
    borderRadius:"4px",
    border:'1px solid var(--Black-85, #D9D9D9)',
    background:"var(--Black-100, #FFF)",
    display:"flex",
    alignItems:'center',
    gap:'6px'

}))
   const Button2 = styled(Box)(({theme})=>({  
    width:'20px',
    height:'3vh',
    padding:" 6px var(--Spacing-spacing-05, 12px)",
    flexShrink:'0',
    borderRadius:"4px",
    border:'1px solid var(--Black-85, #D9D9D9)',
    background:"var(--Black-100, #FFF)",
    display:"flex",
    alignItems:'center',
    gap:'6px'

}))
   const Data = styled(Box)(({theme})=>({  
    display:'flex',
    width:"1128px",
    padding:"10px var(--Spacing-spacing-05, 12px)",
    justifyContent:'space-between',
    alignItems:'center',
    borderRadius:"4px",
   

}))
   const Icon = styled(CircleIcon)(({theme})=>({  
    fontSize:'10px',
    color:"green",

}))
   const Tablecell = styled(TableCell)(({theme})=>({  
    display:"flex",
   alignItems:"center",
   gap:"1vh"
}))



const Dashboard = ()=>{
    return(
        <Container>
          <Header>
          <Search >
           <StyleIcon />
           <StyledInputBase 
            placeholder="Order ID or transaction ID"
           
          />
           
            </Search>
            <Buttons>
            <Button1>Sort <ImportExportOutlinedIcon/></Button1>
            <Button2><DownloadOutlinedIcon/></Button2>
            </Buttons>
          </Header>

          <Data>
          <Table sx={{ minWidth: '100%' }} size="small" aria-label="a dense table">
        <TableHead style={{ background:"var(--Black-95, #F2F2F2)",}}>
          <TableRow>
            
            <TableCell >Order ID</TableCell>
            <TableCell align="right">Status&nbsp;</TableCell>
            <TableCell align="right">Transaction ID&nbsp;</TableCell>
            <TableCell align="right">Refund Date&nbsp;</TableCell>
            <TableCell align="right">Order Amount&nbsp;</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                #281209
              </TableCell>
              <Tablecell  align="right"><p>successfull</p> <Icon/></Tablecell>
              <TableCell align="right">131634495747</TableCell>
              <TableCell align="right">Today, 08:45 PM</TableCell>
              <TableCell align="right" style={{display:'flex' , alignItems:'center'}}>
              <CountUp start={0} end={1125} duration={1} seperation = "," />
              <CurrencyRupeeOutlinedIcon style={{fontSize:"15px"}}/>
              </TableCell>
              
            </TableRow>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                #281209
              </TableCell>
              <Tablecell  align="right"><p>successfull</p> <Icon style={{color:'rgba(153, 153, 153, 1)'}}/></Tablecell>
              <TableCell align="right">131634495747</TableCell>
              <TableCell align="right">Today, 08:45 PM</TableCell>
              <TableCell align="right" style={{display:'flex' , alignItems:'center'}}>
              <CountUp start={0} end={1125} duration={1} seperation = "," />
              <CurrencyRupeeOutlinedIcon style={{fontSize:"15px"}}/>
              </TableCell>
              
            </TableRow>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                #281209
              </TableCell>
              <Tablecell  align="right"><p>successfull</p> <Icon/></Tablecell>
              <TableCell align="right">131634495747</TableCell>
              <TableCell align="right">Today, 08:45 PM</TableCell>
              <TableCell align="right" style={{display:'flex' , alignItems:'center'}}>
              <CountUp start={0} end={1125} duration={1} seperation = "," />
              <CurrencyRupeeOutlinedIcon style={{fontSize:"15px"}}/>
              </TableCell>
              
            </TableRow>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                #281209
              </TableCell>
              <Tablecell  align="right"><p>successfull</p> <Icon/></Tablecell>
              <TableCell align="right">131634495747</TableCell>
              <TableCell align="right">Today, 08:45 PM</TableCell>
              <TableCell align="right" style={{display:'flex' , alignItems:'center'}}>
              <CountUp start={0} end={1125} duration={1} seperation = "," />
              <CurrencyRupeeOutlinedIcon style={{fontSize:"15px"}}/>
              </TableCell>
              
            </TableRow>
           
           
          
        </TableBody>
      </Table>
          </Data>
        </Container>
    )
}

export default Dashboard;