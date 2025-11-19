const carFleet = (target: number, position:number[], speed:number) => {
    const times = position
        .map((pos:number, i:number) => [pos, (target - pos) / speed[i]])
        .sort((a, b) => a[0] - b[0]);
    
    let fleets = 0;
    let slowest = 0;
    
    for (let i = times.length - 1; i >= 0; i--) {
        if (times[i][1] > slowest) {
            fleets++;
            slowest = times[i][1];
        }
    }
    
    return fleets;
};