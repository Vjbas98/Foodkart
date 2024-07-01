import { Third } from "./Third";
export  function Second(){
    const handleclick =()=>{
        console.log("Butoon Clicked");
    };
    return(
        <div className="box">
            <h2>Second Component data</h2>
            <Third data= handleClick={handleclick}/>
        </div>
    );
};  