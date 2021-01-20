let bouilloire = {
    eau : "vide",
    temperature : 0,
}

import {chauffer} from '../function/chauffer.js'
import {remplir} from '../function/remplir.js'

remplir(bouilloire);
chauffer(bouilloire)

console.log(bouilloire);