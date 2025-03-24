import { useEffect, useState } from 'react';
import '../css/AutoComplete.css';

const AutoComplete=()=>{
    const [input,setInput]=useState('');
    const [result,setResult]=useState([]);
    const [click,setclick]=useState(false);
    const [cache,setcache]=useState({});
    const [selectedIndex,setSelectedIndex]=useState(-1);

    const handleKeyDown=(e)=>{
        if(result.length===0)return ;
        if(e.key==="ArrowDown"){
            setSelectedIndex(prev=>(prev<result.length-1 ? prev+1 : 0));
        }
        if(e.key==="ArrowUp"){
            setSelectedIndex(prev=>prev>0 ? prev-1 : result.length-1)
        }
        if(e.key==="Enter" && selectedIndex>=0){
            setInput(result[selectedIndex].name);
            setclick(false);
        }
    }

    const fetchData=async()=>{
        if(cache[input]){
            console.log('cache:',cache[input]);
            
             setResult(cache[input]);
             return ;
        }
        try{
            console.log('api call:',input);
            
            const request=await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
        const res=await request.json();
        setResult(res?.recipes);
        setcache(prev=>({...prev,
            [input]:res?.recipes
        }))
        }catch{
            if(error){
                console.error(`error:${error}`)
            }
        }
    }

    useEffect(()=>{
        let Timer=setTimeout(fetchData,300);
        return ()=>{clearTimeout(Timer)};
    },[input]);
    return (
        <>
        <h1>autocomplete search here:</h1>
        <div className="container">
            <input  value={input} onChange={(e)=>{setInput(e.target.value)}}
            onClick={()=>setclick(true)}
            onBlur={()=>setclick(false)}
            onKeyDown={handleKeyDown}
            />
            <div className="result-container">
                {click && result.map((res,index)=><div className={`result ${index===selectedIndex ? "highlight" : ''}`}
                key={res.id}
                onMouseEnter={()=>setSelectedIndex(index)}
                onMouseDown={() => {
                setInput(res.name);
                setclick(false);
            }}
                >{res.name}</div>)}
            </div>
        </div>
        </>
    )
}

export default AutoComplete;


// import { useEffect, useState } from "react";
// import "../css/AutoComplete.css";

// const AutoComplete = () => {
//     const [input, setInput] = useState("");
//     const [result, setResult] = useState([]);
//     const [click, setclick] = useState(false);
//     const [cache, setcache] = useState({});
//     const [selectedIndex, setSelectedIndex] = useState(-1); // ✅ Track selected option

//     const fetchData = async () => {
//         if (cache[input]) {
//             console.log("cache:", cache[input]);
//             setResult(cache[input]);
//             return;
//         }
//         try {
//             console.log("api call:", input);
//             const request = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
//             const res = await request.json();
//             setResult(res?.recipes);
//             setcache(prev => ({ ...prev, [input]: res?.recipes }));
//         } catch (error) {
//             console.error(`error:${error}`);
//         }
//     };

//     useEffect(() => {
//         let Timer = setTimeout(fetchData, 300);
//         return () => clearTimeout(Timer);
//     }, [input]);

//     const handleKeyDown = (e) => {
//         if (result.length === 0) return;

//         if (e.key === "ArrowDown") {
//             setSelectedIndex(prev => (prev < result.length - 1 ? prev + 1 : 0));
//         }
//         if (e.key === "ArrowUp") {
//             setSelectedIndex(prev => (prev > 0 ? prev - 1 : result.length - 1));
//         }
//         if (e.key === "Enter" && selectedIndex >= 0) {
//             setInput(result[selectedIndex].name);
//             setclick(false);
//         }
//     };

//     return (
//         <>
//             <h1>Autocomplete Search Bar:</h1>
//             <div className="container">
//                 <input
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                     onClick={() => setclick(true)}
//                     onBlur={() => setclick(false)}
//                     onKeyDown={handleKeyDown} // ✅ Handle arrow key navigation
//                 />
//                 <div className="result-container">
//                     {click &&
//                         result.map((res, index) => (
//                             <div
//                                 className={`result ${index === selectedIndex ? "highlight" : ""}`}
//                                 key={res.id}
//                                 onMouseEnter={() => setSelectedIndex(index)}
//                                 onMouseDown={() => {
//                                     setInput(res.name);
//                                     setclick(false);
//                                 }}
//                             >
//                                 {res.name}
//                             </div>
//                         ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default AutoComplete;
