import React from 'react'
//import './footer.css'      //this is how we add css in react


export const Foote = () => {
    // this is another way of adding css to react
    let footerStyle={             // using commands in this way of adding css is different sometimes. ex: background color is written as backgroundColor:
        position: "fixed",
        top: "87vh",
        width: "100%",
        margin: "60px 0",
    }
    return (
        <footer className="bg-dark text-light " style={footerStyle}>
            <p className="text-center py-3">copyright &copy; My todolist</p>
            
        </footer>
    )
}
