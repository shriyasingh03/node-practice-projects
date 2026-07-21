const fs = require('fs');
const path = require('path');

// ============================================================
// 2. CAPTURING USER INPUT (The "Ear")
// ============================================================
let query = process.argv.slice(2);


// ============================================================
// 3. THE CLASSIFIER (The "Brain")
// ============================================================
// This is a "Forward Index" - it maps CATEGORY -> LIST OF EXTENSIONS.
// It is highly readable for humans. If we want to add "videos", we just add a new key.
let fileType = {
    "images": ["png", "jpg", "jpeg", "gif", "bmp", "tiff", "svg", "ico", "webp", "heic"],
    "media": ["mp4", "mov", "avi", "mkv", "wmv", "flv", "mpg", "mpeg", "webm", "3gp"],
    "documents": ["pdf", "docx", "xlsx", "pptx", "txt", "csv", "rtf", "odt", "ods", "odp", "doc", "xls", "ppt", "html", "xml", "json", "epub", "md", "pages", "numbers", "key"],
    "apk": ["apk", "aab", "xapk", "ipa", "app", "exe", "msi", "dmg", "deb", "rpm"],
    "compressed": ["zip", "rar", "7z", "tar", "gz", "bz2", "xz", "z", "iso"],
    "scripts": ["js"],
    "music": ["mp3", "wav", "flac", "aac", "ogg", "wma", "m4a", "alac", "aiff", "mid"]
}


//The Classifier function 
// making an NVERTED INDEX ({ 'jpg': 'images', 'pdf': 'documents' })

const invertedIndexArray = {};

for (const category in fileType ){
    let invertedCategory = fileType[category];
    for (let i=0 ; i<= invertedCategory.length; i++){
        const finalInvertedCategory = invertedCategory[i];
        invertedIndexArray[finalInvertedCategory]= category;
    }
    // console.log(invertedIndexArray);
}
    // console.log(invertedIndexArray);

 //Making everything in invertedIndexArray in lowercase if exist otherwise add 'other'

 const getCategory = (extension)=>{
   const lowerExtension = extension.toLowerCase();
   if (invertedIndexArray[lowerExtension]){
    return invertedIndexArray[lowerExtension];
   } else {
        return "other";
   }
 }

 // ============================================================
// 5. PATH PROCESSOR (The "Glue" for spaces)
// ============================================================
//  * pathProcesser: Reconstructs a path if the user forgot to use quotes.
//  * Example: If the user types: node organizer.js organizePath only C:/My Docs
//  * The shell splits it into ['organizePath', 'only', 'C:/My', 'Docs'].
//  * This function glues 'C:/My' and 'Docs' back into 'C:/My Docs'.

const pathProcesser = ()=>{
    let constructedPath = "";
    for (let i =2; i< query.length;i++){
        if (constructedPath != ''){
            constructedPath = constructedPath + " " + query[i];
        }
        else{
            constructedPath = query[i];
        }
    }
    return constructedPath;
}