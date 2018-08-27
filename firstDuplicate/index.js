function firstDuplicate (a) {

    for (let i = 0; i < a.length; i++) {
        let index = Math.abs(a[i]) - 1
        if (a[index] < 0) return Math.abs(index) + 1
        a[index] *= -1
    }
    
    return -1
}

function firstDuplicate2 (a) {
    let b = {}
    for (let c of a) {
        if (b[c]) return c
        b[c] = true
    }
    
    return -1
}

let arr = [8, 4, 6, 2, 6, 4, 7, 9, 5, 8]

console.log(firstDuplicate(arr))