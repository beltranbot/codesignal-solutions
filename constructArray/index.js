function constructArray(size) {
    let arr = []
    let i = 1
    let control = size
    while (arr.length < control) {
        arr.push(i++)
        if (arr.length < control) arr.push(size--)
    }
    
    return arr
}
