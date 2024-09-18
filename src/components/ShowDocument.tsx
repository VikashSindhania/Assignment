import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Set the workerSrc to the locally bundled worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface InvoiceState {
  file: File | null;
  numPages: number | null; // Type for numPages
}
class ShowDocument extends React.Component<{}, InvoiceState> {
  constructor(props: any) {
    super(props);
    this.state = {
      file: null, // Store the uploaded file
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

  render() {
    const { file, numPages } = this.state;
    return (
      <div className="flex justify-between p-5">
        {/* Left Side: PDF Viewer and file upload */}
        <div className="w-1/2 p-4 ">
          <h3 className="text-lg font-bold mb-4">Upload PDF File</h3>
          <input
            type="file"
            accept="application/pdf"
            className="mb-4"
            onChange={this.onFileChange}
          />
          {file && (
            <Document file={file} onLoadSuccess={this.onDocumentLoadSuccess}>
              {Array.from(new Array(numPages), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          )}
        </div>
      </div>
    );
  }
}

export default ShowDocument;
