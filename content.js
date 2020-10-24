console.log("Dá-lhe!");

let pdf_files = document.getElementsByTagName("li");

let pdfs = [];

for (let i = 0; i < pdf_files.length; i++) {
    let aFile = pdf_files[i].getElementsByTagName("a")[0];
    if (aFile.href.endsWith(".pdf") || aFile.href.endsWith(".zip")){
        aFile.click();
        // pdf_files[i].getElementsByTagName("a")[0].click();
        // pdfs.push({
        //     a: aFile,
        //     url: aFile.href,
        //     name: aFile.innerText
        // });
    }
}

console.log(pdfs);