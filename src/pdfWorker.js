import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc =
  "https://unpkg.com/pdfjs-dist@5.4.296/build/pdf.worker.min.mjs";



//import { pdfjs } from "react-pdf";
//import workerSrc from "pdfjs-dist/build/pdf.worker.min.js?url";

//pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

//import { pdfjs } from "react-pdf";
//import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";

//pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
//
//import { pdfjs } from "react-pdf";

//IMPORTANT: must match installed pdfjs-dist version

//pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//  "pdfjs-dist/build/pdf.worker.min.js",
//  import.meta.url
//).toString();


