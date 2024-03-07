import { FaUser } from "react-icons/fa";
import Image from 'next/image'
import PersonalDetail from "../details/PersonalDetail";
import FamilyDetail from "../details/FamilyDetail";
import ContactDetail from "../details/ContactDetail";
const FirstPdf = () => {
    const backgroundColor = 'rgb(255, 250, 231)';
    const A4Width = 794; // A4 width in pixels (210mm converted to pixels)
    const A4Height = 1123; // A4 height in pixels (297mm converted to pixels)
    const bio_bg = 'rgb(186 140 65);'
    return (
        <div className="p-10" style={{ backgroundColor, width: `${A4Width}px`, height: `${A4Height}px` }}>
        <div className="w-full h-full border-8 border-[#cfaf61] relative">
        <div className="flex justify-center items-center flex-col py-10">
        <p className="text-2xl font-bold text-[#be9b5b]">BIO DATA</p>
        <div className={`w-36 h-36 bg-[#ba8c41] rounded-full flex justify-center items-center `}>
        <FaUser  className="w-1/2 h-1/2 text-slate-50"/>
        </div>
        </div>
        <div  className="w-4/5 mx-auto flex flex-col gap-7 pt-10">
        
        <PersonalDetail/>
        <FamilyDetail/>
        <ContactDetail/>
        </div>
        
        <div className='absolute top-0 left-0 '>
        <Image src={'/images/left-top.png'} width={100} height={100} alt='' />
        </div>
        <div className='absolute top-0 right-0 rotate-90'>
        <Image src={'/images/left-top.png'} width={100} height={100} alt='' />
        </div>
        <div className='absolute bottom-0 left-0 -rotate-90'>
        <Image src={'/images/left-top.png'} width={100} height={100} alt='' />
        </div>
        <div className='absolute bottom-0 right-0 -rotate-180'>
        <Image src={'/images/left-top.png'} width={100} height={100} alt='' />
        </div>
        
        </div>
      </div>
    );
};

export default FirstPdf;