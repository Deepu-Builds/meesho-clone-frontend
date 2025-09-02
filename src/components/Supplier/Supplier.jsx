import Navbar from "./Navbar";
import Section1 from "./Section1";
import Section2 from "./Section2"


function Supplier(){
    return(
        <>
        <div className="fixed z-10 top-0">
        <Navbar/>
        </div>
        <Section1/>
        <Section2/>
        </>
    )
}

export default Supplier;