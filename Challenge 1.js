const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const { first = [15, 11, 13, 7, 5] } = data.first || {}
const { second = [2, 6, 8, 4, 14, 12, 10]} = data.second || {}
const { third = [9, 3, 1] } = data.third || {}

const result = []

const extractBiggest = () => {
	if (first[first.length-1] > second[second.length-1] && first.length > 0) {
		return first.pop()
	}

	if (second[second.length - 1] > third[third.length - 1] && second.length > 0) {
		return second.pop()
	}
	
	return third.pop()
}
// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)