// 思路一： 求出 n 份的平均值（目的值），在遍历时计算本次值分配到哪个数组中最接近目的值并执行分配
export function divideToEqual(input: number[], part = 3): number[][] {
	input.sort((a, b) => b - a);
	let average = getSum(input) / part;
	const res = input.reduce<number[][]>(
		(list, curr) => {
			let tryList = list.map((item) => getSum(item) + curr);
			let bestDiffIndex = getBestDiffIndex(tryList, average);
			list[bestDiffIndex].push(curr);
			return list;
		},
		Array.from<number[]>({ length: part }).map(() => []),
	);

	return res;
}

function getSum(input: number[]) {
	return input.reduce((prev, current) => {
		current += prev;
		return current;
	}, 0);
}
function getBestDiffIndex(input: number[], target: number) {
	let diffArr = input.map((item) => target - item);
	const positiveArr = diffArr.filter((item) => item >= 0);
	if (positiveArr.length > 0) {
		let minDiff = Math.min(...positiveArr);
		return diffArr.indexOf(minDiff);
	} else {
		let absArr = diffArr.map((item) => Math.abs(item));
		let minDiff = Math.min(...absArr);
		return absArr.indexOf(minDiff);
	}
}

// 思路二： 每次给值最小的数组分配最大值
export function divide2(input: number[]) {
	var res = [
		{ sum: 0, arr: [] as number[] },
		{ sum: 0, arr: [] as number[] },
		{ sum: 0, arr: [] as number[] },
	];
	// 从大到小排序，最后放细沙
	input
		.sort((a, b) => b - a)
		.map((el) => {
			var min = res.sort((a, b) => a.sum - b.sum)[0];
			min.sum += el;
			min.arr.push(el);
		});

	res.map((el) => el.arr);
	return res;
}
