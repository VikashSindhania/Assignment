import React from "react";
class BottomUI extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-gray-200 p-4 shadow-lg flex justify-between items-center">
        {/* Invoice Details */}
        <div className="flex space-x-4">
          <div className="flex space-x-2 border border-gray-300 p-3 bg-pink-100 rounded">
            <span className="font-bold">Currency :</span>
            <span className="text-green-600">INR</span>
          </div>
          <div className="flex space-x-2 border border-gray-300 p-3 bg-pink-100 rounded">
            <span className="font-bold">Inv Basic Amt :</span>
            <span className="text-green-600">15,000.00</span>
          </div>
          <div className="flex space-x-2 border border-gray-300 p-3 bg-pink-100 rounded">
            <span className="font-bold">Basic Tax Amt :</span>
            <span className="text-green-600">1,000.00</span>
          </div>
          <div className="flex space-x-2 border border-gray-300 p-3 bg-pink-100 rounded">
            <span className="font-bold">Inv Total Amt :</span>
            <span className="text-green-600">16,000.00</span>
          </div>
          <div className="flex space-x-2 border border-gray-300 p-3 bg-pink-100 rounded">
            <span className="font-bold">TDS Amt :</span>
            <span className="text-green-600">15.00</span>
          </div>
          <div className="flex space-x-2 border border-gray-300 p-3 bg-pink-100 rounded">
            <span className="font-bold">Net Payable Amt :</span>
            <span className="text-green-600">16,000.00</span>
          </div>
          <div className="flex space-x-2 border border-gray-300 p-3 bg-pink-100 rounded ">
            <span className="font-bold">Basic Amt Diff :</span>
            <span className="text-red-600">NA</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <select className="border border-gray-300 p-2 rounded">
            <option>Select Action</option>
            <option>Action 1</option>
            <option>Action 2</option>
          </select>
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Reject
          </button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded">
            Approve
          </button>
        </div>
      </div>
    );
  }
}
export default BottomUI;
