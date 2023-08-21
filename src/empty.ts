export {}
export function primeFactorsTo(max: number) {
    let store: boolean[] = []
		let primes: number[] = [];
    for (let i = 2; i <= max; ++i) {
        if (!store[i]) {
					primes.push(i);
					for (let j = i << 1; j <= max; j += i) {
							store[j] = true;
					}
        }
    }
    return primes;
}