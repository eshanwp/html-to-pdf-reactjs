import React from "react";
import './App.css';
import * as pdfMake from "pdfmake";
import * as htmlToPdf from "html-to-pdfmake";

function App() {

    const downLoadPDF = () => {
        // https://aymkdn.github.io/html-to-pdfmake/index.html
        const docDef = htmlToPdf(`
        <div>
            <div style="font-weight: bold; color: blue" class="title">Service request</div>
            <di>NIC detail change</di>
            <div>
                <div>
                    <div>Request by</div>
                    <div>11203433</div>
                </div>
                <div>
                    <div>Request on</div>
                    <div>7/27/2022 4:37:48 PM</div>
                </div>
                <div>
                    <div>Refernce number</div>
                    <div>2207270000323</div>
                </div>
            </div>
            <div>Service request details</div>
            
        </div>
        `);

        pdfMake.createPdf({content: docDef}).download('sample.pdf');
    }

    return (
        <>
            <button onClick={() => downLoadPDF()}>Download PDF</button>
        </>
    );
}

export default App;
