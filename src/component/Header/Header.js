import React from 'react';


function Header () {
    return(
        <div className="header-container">
            <div className="logo-formatting">
                <i style={{fontSize:30,color:'white',marginRight:10}} className="fas fa-home"></i>
                <h1>Houser</h1>
            </div>
        </div>
    )
}

export default Header