import PrintButton from "@/components/PrintButton ";
import PdfDownload from "@/components/download/PdfDownload";
import HtmlToPdfConverter from "@/components/myPdf";
import MyPdfComponet from "@/components/myPdf";
import FirstPdf from "@/components/pdf/FirstPdf";
import SecondPdf from "@/components/pdf/SecondPdf";


export default function Home() {

  return (<main>
    <div className="flex flex-col parentdiv  justify-center items-center ">
      <SecondPdf />
      <FirstPdf />
    </div>
    <PrintButton />
    <PdfDownload/>
    <MyPdfComponet/>
  </main>
  );
}
