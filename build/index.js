"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hello = void 0;
const dog_1 = require("./dog");
const axios_1 = __importDefault(require("axios"));
//-----------------------------------------------
class Hello {
    constructor(person) {
        this.firstName = person.firstName;
        this.lastName = person.lastName;
    }
    //----------end function constructor
    function_get_name() {
        //console.log(`hello there ${this.firstName} the angle is ${this.function_convert_to_degrees(Math.asin(0.5))}`);
        console.log(`distance = ${this.function_calculate_ballistic_distance(1000, 30, 100)}`);
    }
    //----------end function_get_name
    function_calculate_ballistic_distance(velocity, angle, height = 0) {
        let a1 = (velocity * Math.cos((angle * Math.PI / 180)) / 9.8);
        console.log(`a1 = ${a1}`);
        let a2 = velocity * Math.sin((angle * Math.PI / 180));
        console.log(`a2 = ${a2}`);
        let a3 = Math.sqrt((Math.pow(a2, 2)) + (2 * 9.8 * height));
        console.log(`a3 = ${a3}`);
        let a4 = (a1 * (a2 + a3)).toFixed(0);
        let ballistic_distance = parseInt(a4, 10);
        return ballistic_distance;
    }
    //-----------end function_calculate_ballistic_distance
    function_convert_to_degrees(radians) {
        return parseInt((radians * 180 / Math.PI).toFixed(0));
    }
}
exports.Hello = Hello;
//----------end class Hello
//-----------------------------------------------
const matt = {
    firstName: 'Matt',
    lastName: 'Marven'
};
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // 👇️ const data: GetUsersResponse
            const { data, status } = yield axios_1.default.get('https://reqres.in/api/users', {
                headers: {
                    Accept: 'application/json',
                },
            });
            console.log(JSON.stringify(data, null, 4));
            // 👇️ "response status is: 200"
            console.log('response status is: ', status);
            return data;
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            }
            else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    });
}
getUsers();
let yo = new Hello(matt);
yo.function_get_name();
console.log("ha ha");
(0, dog_1.wagTail)("sparky");
