import React from 'react';
const personal_detail =  {
        "Name": "Md Rakib Mia",
        "Place of Birth": "Bangalore",
        "Rashi": "Varishabha (Taurus)",
        "Nakshatra": "Uttara Bhadrapada",
        "Education": "BE in Computer Science",
        "Occupation": "Working as a Senior Project Manager"
    }

const PersonalDetail = () => {
    return (
        <div className='w-full'>
            <h2 className='text-2xl font-semibold pb-4 text-[#e0c86e]'>personal Details</h2>
            <div className='flex flex-col gap-1 text-black'>

            {
                Object.entries(personal_detail)?.map(([key, value]) =>(
                    <div class="flex w-full" key={key}>
                    <div class="w-4/12">{key}</div>
                    <div class="w-1/12">:</div>
                    <div class="w-7/12">{value}</div>
                </div>
                ))
            }
            </div>
        </div>
    );
};

export default PersonalDetail;

