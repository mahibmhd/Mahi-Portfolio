import React from "react";
import { Fragment } from "react";

function DownloadLink() {
  return (
   
    <div>
      <a href="../public/documents/Mahi's_CV.pdf" download = "Mahi's_CV.pdf" className="bg-teal-800 text-white py-2 px-4 rounded">
        Download Resume
      </a>
    </div>
 
  );
}

export default DownloadLink;