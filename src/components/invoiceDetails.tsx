import React, { Component } from "react";
import ShowDocument from "./ShowDocument";

class InvoiceDetails extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="p-6 flex justify-between p-5">
        <div className="w-1/2 border border-gray-300 p-4">
          <ShowDocument />
        </div>
        {/* Form Section */}
        <div className="bg-white w-1/2 p-4 rounded shadow-md mb-6">
          <h3 className="text-purple-500 ">Invoice Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="font-bold">Country</label>
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

          {/* Line Item Details Section */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-purple-600 font-bold mb-4">
              Line Item Details
            </h3>
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="p-2">Select</th>
                  <th className="p-2">Select Debit</th>
                  <th className="p-2">GL Desc</th>
                  <th className="p-2">GL Code</th>
                  <th className="p-2">
                    Text (Do not enter special characters)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-blue-50">
                  <td className="p-2 text-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-purple-600"
                    />
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
                    <input
                      type="text"
                      className="border border-gray-300 p-2 rounded w-full"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <button className="bg-gray-100 border border-gray-300 p-2 rounded text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <button className="bg-purple-600 text-white px-4 py-2 rounded">
                  Calculate
                </button>
                <button className="bg-purple-600 text-white px-4 py-2 rounded">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InvoiceDetails;
