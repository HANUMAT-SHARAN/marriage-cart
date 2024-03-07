import Image from "next/image";

const personalInfo = {
    "Name": "Jane Doe",
    "Date of Birth": "15-01-1990",
    "Gender": "Female",
    "Marital Status": "Single",
    "Religion": "Hindu",
    "Caste": "Brahmin",
    "Height": "5 feet 10 inches",
    "Complexion": "Fair",
    "Blood Group": "A+"
};
const hobbies = {
    Hobbies: "Reading, Playing Guitar, Painting",
    Interests: "Traveling, Photography",
    "Favorite Food": "Italian"
};
const contact = {
    Phone: "(123) 456-7890",
    Email: "jane.doe@email.com",
    Address: "123 Main Street"
};

const familyInfo = {
    "Father's Name": "James Doe",
    "Father's Job": "Engineer",
    "Mother's Name": "Mary Doe",
    "Mother's Job": "Teacher",
    "Siblings": "2 brothers, 1 sister"
};

const educationDetails = {
    "Highest Degree": "Bachelor's in Computer Science",
    College: "XYZ University",
    "Graduation Year": 2012
};

const otherQualification = {
    "High School": "ABC School(2008)",
    "Intermediate DEF": "College(2010)"
}

const jobInfo = {
    "Job": "Software Engineer",
    "Company": "Tech Solutions Inc.",
    "Work Location": "Dhaka Bangladesh",
    "Yearly Income": "$75,000"
};

import { MdFamilyRestroom, MdCastForEducation, MdWifiCalling3 } from "react-icons/md";
import { GoBook } from "react-icons/go";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { RxHobbyKnife } from "react-icons/rx";

const SecondPdf = () => {
    const A4Width = 794; // A4 width in pixels (210mm converted to pixels)
    const A4Height = 1123; // A4 height in pixels (297mm converted to pixels)
    const backgroundColor = 'rgb(255, 250, 231)';
    return (
        <div className="w-full relative" style={{ backgroundColor, width: `${A4Width}px`, height: `${A4Height}px` }}>
            <div className="flex">
            <div className="w-5/12 pr-5">
                <div className="w-full relative ">
                    <div className=" w-full py-20 relative z-10">
                        <div className=" flex overflow-hidden justify-center items-center border-4 border-black bg-white w-[200px] h-[200px] rotate-45 mx-auto py-10">
                            <Image className="-rotate-45 overflow-hidden" src={"/images/rakib.jpg"} width={200} height={200} alt="Md Rakib Mia" />
                        </div>
                    </div>
                    <div className="diagonal z-0"></div>
                </div>

                <div className="flex flex-col gap-9">
                    {/* personal info  */}
                    <div className='w-full pl-3'>
                        <div className="flex gap-2 items-center pb-5">
                            <FaUser className="text-2xl" />
                            <h2 className='text-xl font-semibold  text-slate-800'>PERSONAL INFO</h2>
                        </div>
                        <div className='flex flex-col gap-1 text-black'>

                            {
                                Object.entries(personalInfo)?.map(([key, value]) => (
                                    <div class="flex w-full" key={key}>
                                        <div class="w-5/12">{key}</div>
                                        <div class="w-1/12">:</div>
                                        <div class="w-6/12">{value}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* hobbies details  */}
                    <div className='w-full pl-3'>
                        <div className="flex gap-2 items-center pb-5">
                            <RxHobbyKnife className="text-2xl" />
                            <h2 className='text-xl font-semibold  text-slate-800'>HOBBIES AND INTERESTS</h2>
                        </div>
                        <div className='flex flex-col gap-1 text-black'>

                            {
                                Object.entries(hobbies)?.map(([key, value]) => (
                                    <div class="flex w-full" key={key}>
                                        <div class="w-5/12">{key}</div>
                                        <div class="w-1/12">:</div>
                                        <div class="w-6/12">{value}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* contact details  */}
                    <div className='w-full pl-3'>
                        <div className="flex gap-2 items-center pb-5">
                            <MdWifiCalling3 className="text-2xl" />
                            <h2 className='text-xl font-semibold  text-slate-800'>CONTACT DETAILS</h2>
                        </div>
                        <div className='flex flex-col gap-1 text-black'>

                            {
                                Object.entries(contact)?.map(([key, value]) => (
                                    <div class="flex w-full" key={key}>
                                        <div class="w-5/12">{key}</div>
                                        <div class="w-1/12">:</div>
                                        <div class="w-6/12">{value}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-7/12">
                <div className="flex flex-col gap-9 mt-36">
                <h1 className="text-5xl font-bold">Jane Doe</h1>


                {/* family info  */}
                <div className='w-full'>
                    <div className="flex gap-2 items-center pb-5">
                        <MdFamilyRestroom className="text-2xl" />
                        <h2 className='text-xl font-semibold  text-slate-800'>Family Details</h2>
                    </div>
                    <div className='flex flex-col gap-1 text-black'>

                        {
                            Object.entries(familyInfo)?.map(([key, value]) => (
                                <div class="flex w-full" key={key}>
                                    <div class="w-4/12">{key}</div>
                                    <div class="w-1/12">:</div>
                                    <div class="w-7/12">{value}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* education details  */}
                <div className='w-full'>
                    <div className="flex gap-2 items-center pb-5">
                        <MdCastForEducation />
                        <h2 className='text-xl font-semibold  text-slate-800'>Education</h2>
                    </div>
                    <div className='flex flex-col gap-1 text-black'>

                        {
                            Object.entries(educationDetails)?.map(([key, value]) => (
                                <div class="flex w-full" key={key}>
                                    <div class="w-4/12">{key}</div>
                                    <div class="w-1/12">:</div>
                                    <div class="w-7/12">{value}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* other qualification   */}
                <div className='w-full'>
                    <div className="flex gap-2 items-center pb-5">
                        <GoBook className="text-2xl" />
                        <h2 className='text-xl font-semibold  text-slate-800'>OTHER QUALIFICATIONS</h2>
                    </div>
                    <div className='flex flex-col gap-1 text-black'>

                        {
                            Object.entries(otherQualification)?.map(([key, value]) => (
                                <div class="flex w-full" key={key}>
                                    <div class="w-4/12">{key}</div>
                                    <div class="w-1/12">:</div>
                                    <div class="w-7/12">{value}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* job info  */}
                <div className='w-full'>
                    <div className="flex gap-2 items-center pb-5">
                        <PiShoppingBagOpenFill className="text-2xl" />
                        <h2 className='text-xl font-semibold  text-slate-800'>CAREER</h2>
                    </div>
                    <div className='flex flex-col gap-1 text-black'>

                        {
                            Object.entries(jobInfo)?.map(([key, value]) => (
                                <div class="flex w-full" key={key}>
                                    <div class="w-4/12">{key}</div>
                                    <div class="w-1/12">:</div>
                                    <div class="w-7/12">{value}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="triangle absolute right-0 bottom-0">
            </div>
        </div>
    );
};

export default SecondPdf;