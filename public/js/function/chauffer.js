let chauffer = (x) => {
    setTimeout(() => {
        if (x.temperature < 100) {
            x.temperature+=20
            console.log(`La température est à ${x.temperature}`);
            chauffer(x);
        } else {
            console.log(`L'eau est chauffée`);
        }
    }, 1000);
}

export {chauffer}