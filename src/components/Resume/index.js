import React, { useState } from "react";
import resume from "../../assets/resume/resume.pdf";
// had to import these from the react5 module to work correctly
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack5";
// had to copy pdf.worker.js into the public folder so it would be packaged
// with the dist folder and usable.  Also, had to import this css specifically
// to make sure the pdf links worked
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function Resume({ currentCategory }) {
  const { name, description } = currentCategory;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  console.log(name);
  console.log(description);

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  if (name === "Resume") {
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
      setPageNumber(1);
    }
    return (
      <div className="res">
        <Document
          file={resume}
          options={{ workerSrc: "pdf.worker.js" }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} height="1200" />
        </Document>

        <div>
          <p>
            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </p>
          <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            Previous
          </button>
          <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
  return <section></section>;
}

export default Resume;
