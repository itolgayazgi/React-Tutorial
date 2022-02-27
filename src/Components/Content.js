import React from 'react'
import About from './Sections/About'
import Contact from './Sections/Contact'
import Menu from './Sections/Menu'

function Content() {
    return (
        <>
            <div className="w3-content" style={{ maxWidth: 1100 }}>
                <About></About>
                
                <Menu></Menu>
                
                <Contact></Contact>
            </div>

        </>

    )
}

export default Content