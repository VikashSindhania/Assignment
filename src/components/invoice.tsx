import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import BottomUI from "./BottomUI";
import { useNavigate } from "react-router-dom";
import { withRouter } from "./withRouter";

// Set the workerSrc to the locally bundled worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface InvoiceState {
  file: File | null; // Type the file state
  numPages: number | null; // Type for numPages
}

// Define the Props interface that includes the `navigate` function
interface InvoiceProps {
  navigate: (path: string) => void; // The navigate function expects a string path
}

class Invoice extends Component<InvoiceProps, InvoiceState> {
  constructor(props: InvoiceProps) {
    super(props);
    this.state = {
      file: null, // store the uploaded file
      numPages: null,
    };
  }

  onFileChange = (event: any) => {
    this.setState({
      file: event.target.files[0], // Handle file upload
    });
  };

  // Manually typing the parameter type as we don't have OnLoadSuccessParams
  onDocumentLoadSuccess = (pdf: { numPages: number }) => {
    this.setState({ numPages: pdf.numPages });
  };

  goToInvoiceDetail = () => {
    this.props.navigate("/invoiceDetail");
  };

  render() {
    const { file, numPages } = this.state;
    return (
      <div className="flex justify-between p-5">
        {/* Left side: PDF viewer and file upload */}
        <div className="w-1/2 border border-gray-300 p-4">
          <h3 className="text-lg font-bold mb-4 text-purple-600">
            Upload PDF File{" "}
          </h3>
          <input
            type="file"
            onChange={this.onFileChange}
            accept="application/pdf"
            className="mb-4"
          />
          {file && (
            <Document file={file} onLoadSuccess={this.onDocumentLoadSuccess}>
              {Array.from(new Array(numPages), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          )}
        </div>

        {/* Right side: Form */}
        <div className="w-1/2 border border-gray-300 p-4">
          <div className="flex ">
            <span className=" mb-4 p-2 text-cyan-500 ">Invoice Details</span>
            <span className="mb-4 p-2  ">Action History</span>

            <button
              className="bg-blue-500 text-white  px-4  mb-2 rounded ml-auto"
              onClick={this.goToInvoiceDetail}
            >
              Next Page
            </button>
          </div>

          <h3 className="text-lg font-bold mb-4 p-2 bg-gray-300">
            INVOICE AMOUNT DETAILS
          </h3>
          <form className="space-y-4">
            <div className="flex items-center">
              <label className="w-1/3">
                Country<span className="text-red-600 mx-1">*</span>:
              </label>
              <input
                type="text"
                name="country"
                value="INR"
                readOnly
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div className="flex items-center">
              <label className="w-1/3">
                Invoice Basic Amt<span className="text-red-600 mx-1">*</span>:
              </label>
              <input
                type="text"
                name="invBasicAmt"
                value="15,000.00"
                readOnly
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div className="flex items-center">
              <label className="w-1/3">
                Invoice Tax Amt<span className="text-red-600 mx-1">*</span>:
              </label>
              <input
                type="text"
                name="invTaxAmt"
                value="1,000.00"
                readOnly
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div className="flex items-center">
              <label className="w-1/3">
                Total Invoice Amt<span className="text-red-600 mx-1">*</span>:
              </label>
              <input
                type="text"
                name="totalInvAmt"
                value="16,000.00"
                readOnly
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div className="flex items-center">
              <label className="w-1/3">
                TCS Applicable<span className="text-red-600 mx-1">*</span>:
              </label>
              <div className="w-full flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="tcsApplicable"
                    value="yes"
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="tcsApplicable"
                    value="no"
                    className="mr-2"
                    defaultChecked
                  />
                  No
                </label>
              </div>
            </div>
            <div className="flex items-center">
              <label className="w-1/3">
                Net Payable Amt [Exclu of TDS ]
                <span className="text-red-600 mx-1">*</span>:
              </label>
              <input
                type="text"
                name="totalInvAmt"
                value="16,000.00"
                readOnly
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            {/* Add more form fields here */}

            <div className="">
              <h1 className="bg-gray-300 p-3">ALTERNATE PAYEE DETAILS</h1>
            </div>

            <div className="flex items-center">
              <label className="w-1/3">Alternate Payee 1:</label>
              <input
                type="text"
                name="invBasicAmt"
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div className="flex items-center">
              <label className="w-1/3">Alternate Payee 2:</label>
              <input
                type="text"
                name="invBasicAmt"
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div className="flex items-center">
              <label className="w-1/3">City:</label>
              <input
                type="text"
                name="city"
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div className="flex items-center">
              <label className="w-1/3">Street:</label>
              <input
                type="text"
                name="invBasicAmt"
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div className="flex items-center">
              <label className="w-1/3">Country:</label>
              <input
                type="text"
                name="Country"
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div className="flex items-center">
              <label className="w-1/3">Bank key/IFSC Code:</label>
              <input
                type="text"
                name="Bank Key"
                className="border border-gray-300 p-2 w-full"
              />
            </div>
          </form>
        </div>
        <BottomUI />
      </div>
    );
  }
}
export default withRouter(Invoice);
