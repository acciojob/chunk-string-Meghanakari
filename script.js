function chunkString(str,sixe) {
    let chunks = [];
    for (let i = 0; i < str.length-1; i++) {
        let subStr=str.slice(i,i+size);
        chunks.push(subStr);
    }
    return chunks;
}