
import { Link } from 'react-router-dom';

function Section5 (){
return(
    <>
    <div className="h-[380px] relative w-full bg-[url('https://images.meesho.com/images/marketing/1744698143534.webp')] flex">
        
   <Link className="h-[50px] w-[180px] bg-white text-center content-center rounded-[5px] text-[#590a47] text-[25px] font-bold mt-[260px] ml-[50px]"> Shop Name</Link>
   
   <div>
    <div className="hover:translate-y-[-5px] absolute left-[500px] top-[55px]">
    <Link class="Hover-effect"><img src="https://images.meesho.com/images/marketing/1744635893307.webp" alt="Summer dress" className='h-[255px] ' /> <h1 className="flex justify-center items-center text-[#43003b] bg-white border border-yellow-500 rounded-[7px] font-bold transition duration-100 h-[30px] relative top-[7px]">Summer Dresses</h1></Link>
    </div>
    <div className='hover:translate-y-[-5px] absolute left-[720px] top-[55px]'>
    <Link className='h-[150px]'><img src="https://images.meesho.com/images/marketing/1744635812270.webp" alt="Baggy Jeans" /><h1 className="flex justify-center items-center text-[#43003b] bg-white border border-yellow-500 rounded-[7px] font-bold transition duration-100 h-[30px] relative top-[7px]">Baggy Jeans</h1></Link></div>
    <div className='hover:translate-y-[-5px] absolute left-[940px] top-[55px]'>
    <Link class="Hover-effect"><img src="https://images.meesho.com/images/marketing/1744635870215.webp" alt="Earrings" /><h1 className="flex justify-center items-center text-[#43003b] bg-white border border-yellow-500 rounded-[7px] font-bold transition duration-100 h-[30px] relative top-[7px]">Earring</h1></Link></div>
    <div className='hover:translate-y-[-5px] absolute left-[1160px] top-[55px]'>
    <Link className='h-[210px] '><img src="https://images.meesho.com/images/marketing/1744635846873.webp" alt="Chic Flats" /><h1 className="flex justify-center items-center text-[#43003b] bg-white border border-yellow-500 rounded-[7px] font-bold transition duration-100 h-[30px] relative top-[7px]">Chic Flat</h1></Link>
    </div>
   </div>
    </div>
    </>
)
}

export default Section5;