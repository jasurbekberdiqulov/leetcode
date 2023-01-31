function tribonacci(n: number): number {
    let t = [0, 1, 1];
    for(let i = 3; i <= n; i++) {
        t[i] = t[i-1] + t[i-2] + t[i-3];
    }
    return t[n];
};