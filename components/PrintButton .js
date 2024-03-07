"use client"
const PrintButton = () => {
    const handlePrint = () => {
      window.print();
    };
  
    return (
        <div className="w-full flex justify-center items-center mt-5">

            <button onClick={handlePrint} className="border-2 py-2 px-3 text-xl ">Print</button>
        </div>
    );
  };
  
  export default PrintButton;
  