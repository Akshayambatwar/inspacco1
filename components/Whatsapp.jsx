import React from 'react'
import whatsapp from '../images/Whatsapp.png'
function Whatsapp() {

    const styles={
            button:{
                position: "fixed",
                bottom: "120px",
                right: "30px",
                zIndex: "99",
                cursor: "pointer",
                width:"40px",
                height:"40px",
               
            }
           
    }
    return (
        <div>
            <a href="https://wa.me/919370519120"  target="_blank">
            <img style={styles.button} src={whatsapp}/>
            </a>
        </div>
    )
}

export default Whatsapp
