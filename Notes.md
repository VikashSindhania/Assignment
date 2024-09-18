import React, { Component } from 'react';
import { Document, Page } from 'react-pdf'; // Import react-pdf to render PDFs
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

class AssignmentUI extends Component {
constructor(props) {
super(props);
this.state = {
file: null, // Store the uploaded file
numPages: null,
};
}

onFileChange = (event) => {
this.setState({
file: event.target.files[0], // Handle file upload
});
};

onDocumentLoadSuccess = ({ numPages }) => {
this.setState({ numPages });
};

render() {
const { file, numPages } = this.state;

    return (
      <div className="flex justify-between p-5">
        {/* Left side: PDF viewer and file upload */}
        <div className="w-1/2 border border-gray-300 p-4">
          <h3 className="text-lg font-bold mb-4">Upload PDF</h3>
          <input
            type="file"
            onChange={this.onFileChange}
            accept="application/pdf"
            className="mb-4"
          />
          {file && (
            <Document
              file={file}
              onLoadSuccess={this.onDocumentLoadSuccess}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          )}
        </div>

        {/* Right side: Form */}
        <div className="w-1/2 border border-gray-300 p-4">
          <h3 className="text-lg font-bold mb-4">Form Section</h3>
          <form className="space-y-4">
            <div className="flex items-center">
              <label className="w-1/3">Country:</label>
              <input
                type="text"
                name="country"
                value="INR"
                readOnly
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div className="flex items-center">
              <label className="w-1/3">Invoice Basic Amt:</label>
              <input
                type="text"
                name="invBasicAmt"
                value="15,000.00"
                readOnly
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div className="flex items-center">
              <label className="w-1/3">Invoice Tax Amt:</label>
              <input
                type="text"
                name="invTaxAmt"
                value="1,000.00"
                readOnly
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div className="flex items-center">
              <label className="w-1/3">Total Invoice Amt:</label>
              <input
                type="text"
                name="totalInvAmt"
                value="16,000.00"
                readOnly
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            {/* Add more form fields here */}
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
              Submit
            </button>
          </form>
        </div>
      </div>
    );

}
}

export default AssignmentUI;

<div className="flex items-center space-x-4">
  <span className="text-lg font-bold p-2">
    INVOICE AMOUNT DETAILS
  </span>
  <span className="text-lg font-bold p-2 bg-gray-300">
    INVOICE AMOUNT DETAILS
  </span>
</div>

import React, { Component } from 'react';

class InvoiceDetails extends Component {
render() {
return (
<div className="p-6">
{/_ Form Section _/}
<div className="bg-white p-4 rounded-lg shadow-md mb-6">
<h3 className="text-purple-600 font-bold mb-4">Invoice Details</h3>
<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col">
<label className="font-bold">Country :</label>
<input
                type="text"
                className="border border-gray-300 p-2 rounded"
                placeholder="Enter Country"
              />
</div>
<div className="flex flex-col">
<label className="font-bold">Bank Key / IFSC Code :</label>
<input
                type="text"
                className="border border-gray-300 p-2 rounded"
                placeholder="Enter Bank Key / IFSC Code"
              />
</div>
<div className="flex flex-col">
<label className="font-bold">Bank Acc No :</label>
<input
                type="text"
                className="border border-gray-300 p-2 rounded"
                placeholder="Enter Bank Account Number"
              />
</div>
<div className="flex flex-col">
<label className="font-bold">Reference :</label>
<input
                type="text"
                className="border border-gray-300 p-2 rounded"
                placeholder="Enter Reference"
              />
</div>
</div>
</div>

        {/* Line Item Details Section */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-purple-600 font-bold mb-4">Line Item Details</h3>
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-2">Select</th>
                <th className="p-2">Select Debit</th>
                <th className="p-2">GL Desc</th>
                <th className="p-2">GL Code</th>
                <th className="p-2">Text (Do not enter special characters)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue-50">
                <td className="p-2 text-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600" />
                </td>
                <td className="p-2">
                  <select className="border border-gray-300 p-2 rounded w-full">
                    <option>Debit</option>
                    <option>Credit</option>
                  </select>
                </td>
                <td className="p-2">
                  <input
                    type="text"
                    className="border border-gray-300 p-2 rounded w-full"
                    value="Original cost-Plant & ..."
                    readOnly
                  />
                </td>
                <td className="p-2">
                  <input
                    type="text"
                    className="border border-gray-300 p-2 rounded w-full"
                    value="0020200000"
                    readOnly
                  />
                </td>
                <td className="p-2">
                  <input type="text" className="border border-gray-300 p-2 rounded w-full" />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <button className="bg-gray-100 border border-gray-300 p-2 rounded text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-purple-600 text-white px-4 py-2 rounded">Calculate</button>
              <button className="bg-purple-600 text-white px-4 py-2 rounded">Add</button>
            </div>
          </div>
        </div>
      </div>
    );

}
}

export default InvoiceDetails;
