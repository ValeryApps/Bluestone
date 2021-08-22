export const delay=(sm)=>{
    return new Promise(resolve=>setTimeout(resolve,sm));
}

export const getFileExtension = (filename)=>{
 return filename.slice((filename.lastIndexOf(".") -1 >>> 0) +2);
}