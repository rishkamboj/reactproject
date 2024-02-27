import fb from '../assets/fb.svg'
import www from '../assets/www.svg'
import call from '../assets/call.png'

export function Footer(){
     return(<div style={{backgroundColor:"red",display:"flex",justifyContent:"space-evenly",paddingBlockEnd:"30px"}}>
<p style={{color:"white"}}><span><img src={call}/></span>Toll Free <span>1800 200 1234</span></p>
<p style={{color:"white"}}><span><img src={fb}/></span>www.facebook.com/cripumps</p>
<p style={{color:"white"}}><span><img src={www} style={{width:30,height:30}}/></span>www.crigroups.com</p>    
     </div>)
}