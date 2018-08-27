function firstNotRepeatingCharacter(s) {
    let seen = []
    let remove = []

    for (let i = 0; i < s.length; i++) {
        if (seen.includes(s[i])) {
            if (!remove.includes(s[i])) {
                remove.push(s[i])
            }
            continue
        } else {
            seen.push(s[i])
        }
    }

    seen = seen.filter(x => !remove.includes(x))
    return seen.length == 0 ? '_' : seen[0]
}

function firstNotRepeatingCharacter2(s) {
    s = [...s]
    s = s.filter(x => s.indexOf(x) == s.lastIndexOf(x))
    return s.length == 0 ? '_' : s[0]
}

let s = 'abacabad'
console.log(firstNotRepeatingCharacter2(s))