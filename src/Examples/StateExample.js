import React, { useState } from 'react'




function StateExample() {


    console.log('State Sample Component Render')
    const [country, setCountry] = useState('USA');
    //Dizideki ilk parametre tanımladığım değişken, ikinci parametre bunu değiştirecek TEK FONKSİYON. useState içerisindeki değer ise değişkenimin default değeri.
    const [sayac, setSayac] = useState(0);  
    return (
        <>
            <h1>{country}</h1>
            <button onClick={() => setCountry('Turkey')}> Change The Country </button>
            <h1>{sayac}</h1>
            <button onClick={() => setSayac(sayac + 1)}>Change Sayac</button>


        </>
    )
}

export default StateExample