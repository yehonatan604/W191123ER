//console.log("hello Node JS!!!");

import { sizes } from "./sizes.js";

const rndSize = Math.floor(Math.random() * 49);

const size = sizes[Object.keys(sizes).find(key => {
    const [min, max] = key.split('-');
    return rndSize >= min && rndSize <= max;
})];

console.log(`size: ${rndSize} - ${size}`);


