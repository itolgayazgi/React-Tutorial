import React,{useState} from 'react'

function StateInputArraySample() {

    // const countryData = ['Turkey','Spain','Venezuela','Colombia'];

    // const [countries,setCountries] = useState(countryData);

//Herhangi bir ülkeye tıklandığında silinsin.
    //   const removeCountry = (key) =>{
    //     countries.splice(key,1);
    //     setCountries([...countries]); 
    //     }

    let metals = ['Iron Maiden','Amon Amarth','In Flames']; //Array dizisi tanımlama
    const [metalGroups,setMetalGroups] = useState(metals); //MetalGroups dinamik dizisi oluşturduk, default değerini useState(metals) yazarak metals dizisini atatık. setMetalGroups ise, metalGroups dinamik dizisini manipule edecek tek fonksiyon olarak tanımladık. Aşağıda ki addMetal ve removeMetal fonksiyonlarının içine setMetalGroups u tetikledik.
    const [name, setName] = useState('...');

    const addMetal = () => {
        setMetalGroups([...metalGroups,name])
    } 
    const removeMetal =(key)=>{
        metalGroups.splice(key,1);
        setMetalGroups([...metals]);
    }
    

  return (
        <>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
            <button onClick={()=> addMetal()}>Add</button>
            <ul>
                {
                    metalGroups.map((item,key) => <li key={key} onClick={()=> removeMetal()}>{item}</li>)
                
                }
            </ul>
        </>
  )
}

export default StateInputArraySample