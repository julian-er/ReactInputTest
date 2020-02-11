import React from 'react'


const ValidationComponent = (props) => {

    let showText = null


     if (props.check <= 10){
      (props.check <= 0) ? showText=(<p> escribe algo </p>) : showText= (<p> El texto es muy corto </p>) 
     } else if (props.check >= 20) {
        showText= (<p>El texto es demasiado largo </p>)
     }

return <div className="Person">
           
            {showText}

</div>




}

export default ValidationComponent