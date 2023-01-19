function quizz (n) {
    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}
let res = quizz(11)
console.log(res)