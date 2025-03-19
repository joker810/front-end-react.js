import ProgressBar from "./Progress";

const Home=()=>{

    const myLearningProcess=[
        {id:1, language:"html", progressPercentage:70},
        {id:2, language:"css", progressPercentage:60},
        {id:3, language:"Javascript", progressPercentage:50},
        {id:4,language:"react", progressPercentage:40}
    ]
    
    return (
        <div>
            <h1>welcome to homepage</h1>
            <p>my progress</p>
            {myLearningProcess.map((value,index)=>{
                return <ProgressBar key={index} progress={value}/>
            })}
        </div>
    )
}

export default Home;
