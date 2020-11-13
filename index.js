// Your code here
function mapToNegativize(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * -1)
    }
    return newArr
}

function mapToNoChange(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i])
    }
    return newArr
}

function mapToDouble(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2)
    }
    return newArr
}

function mapToSquare(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] ** 2)
    }
    return newArr
}

function reduceToTotal(arr,startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}

function reduceToAllTrue(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            newArr.push(true)
        } else {
            newArr.push(false)
        }
    }
    if (newArr.includes(false)) {
        return false
    } else {
        return true
    }
}

function reduceToAnyTrue(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            newArr.push(true)
        } else {
            newArr.push(false)
        }
    }
    if (newArr.includes(true)) {
        return true
    } else {
        return false
    }
}