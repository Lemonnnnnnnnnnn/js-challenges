export function arrayWrapper(arr: any[]) {
	const proxy = new Proxy(arr, {
		get(target, p) {
			if (p === "-1") {
				return target[target.length - 1];
			}
		},
	});
	return proxy;
}
