import React from 'react'

export const Header = () => {

    const headerStyle = {

        width: '100%',
        padding: '2%',
        backgroundColor: "red",
        color: 'white',
        textAlign: 'center'
    }

    return(
        <div style={headerStyle}>
            <h1>Multicloud React/Node/SQL app</h1>
        </div>
    )
}