import React, { useState } from 'react'

function StateExample2() {

    const [loading, setLoading] = useState(false);
    const [userName, setUsername] = useState('Default');

    const getData = () => {
        setLoading(true);

        setTimeout(() => {
            setUsername('Tolga');
            setLoading(false);
        }, 1000);
    }

    return (
        <>
            {
                loading == true ? (<span> Loading...</span>) : (
                   <>
                        <h1>{userName}</h1>
                        <button onClick={()=>getData()}>Get Username</button>
                   </>
                )
            }
        </>
    )
}

export default StateExample2