
import img from '../assets/2.png'
import toffy from '../assets/1.png'

export function Mid(){
     
     return (
    <div style={{display:"flex",flexDirection:"row", gap:"20px"}}>
        <div style={{display:"flex"}}><img src={toffy} style={{height:"510px"}}/></div>
        <div style={{display:"flex",flexDirection:"column",flexWrap:"wrap"}}><b><h4 style={{marginBlockEnd:"unset"}}> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4></b>
        <ul>
          <li> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
          <li> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
        </ul>
        <img src={img} style={{height:"330px", width:"850px" }} />
        <h4 style={{fontWeight:"unset"}}>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</h4>
        </div>
    </div>



     )
}