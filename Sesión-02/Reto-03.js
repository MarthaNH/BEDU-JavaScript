for (let counter = 2; counter <= 100; counter++) {
    let isPrime = true;

    for (let i = 2; i <= counter; i++) {
        if (counter % i === 0 && i !== counter) {
            isPrime = false;
        }
    }

    if(isPrime) console.log(counter)
}