import { greet } from "./modules/myName.js";
import { celsiusToFahrenheit } from "./modules/cels.js";
import { calculateFallDistance } from "./modules/calc.js";
import { calculateAverage } from "./modules/calcAver.js";
import { concatStrings } from "./modules/concStrin.js";
alert(celsiusToFahrenheit(11))
greet();
alert(calculateFallDistance(10))
alert(calculateAverage(10,5,16))
alert (concatStrings("привет" , "мир"))