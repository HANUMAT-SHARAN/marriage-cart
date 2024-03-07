import React from 'react';
const contact_details = {
    "Contact No": "012345678910",
    "Address": "House Number 000 4th block 6th main"
}

const ContactDetail = () => {
    return (
        <div className='w-full'>
        <h2 className='text-2xl font-semibold pb-4 text-[#e0c86e]'>personal Details</h2>
        <div className='flex flex-col gap-1 text-black'>

        {
            Object.entries(contact_details)?.map(([key, value]) =>(
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

export default ContactDetail;