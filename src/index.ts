import {wagTail} from "./dog";

import axios from 'axios';

//-----------------------------------------------
interface Person {
    firstName: string,
    lastName: string
}
//-----------------------------------------------







export class Hello {
    firstName: string;
    lastName: string;
    
    
    
    public constructor(person:Person) {
        this.firstName = person.firstName;
        this.lastName = person.lastName;
    }
    //----------end function constructor




    
    
    public function_get_name(): void {
        //console.log(`hello there ${this.firstName} the angle is ${this.function_convert_to_degrees(Math.asin(0.5))}`);

        console.log(`distance = ${this.function_calculate_ballistic_distance(1000,30,100)}`);
    }
    //----------end function_get_name






    
    public function_calculate_ballistic_distance(velocity:number, angle:number, height:number = 0):number {

        let a1:number = (velocity * Math.cos((angle * Math.PI / 180)) / 9.8);
        console.log(`a1 = ${a1}`);

        let a2:number = velocity * Math.sin((angle * Math.PI / 180));
        console.log(`a2 = ${a2}`);

        let a3:number = Math.sqrt( (Math.pow(a2,2)) + (2 * 9.8 * height));
        console.log(`a3 = ${a3}`);

        let a4:string = (a1 * (a2 + a3)).toFixed(0);

        let ballistic_distance:number = parseInt(a4,10);

        return ballistic_distance;
    }
    //-----------end function_calculate_ballistic_distance




    

    
    public function_convert_to_degrees(radians:number):number {
        return parseInt((radians * 180 / Math.PI).toFixed(0));
    }
    //----------end function_convert_to_degrees

}
//----------end class Hello





//-----------------------------------------------
const matt: Person = {
    firstName: 'Matt',
    lastName: 'Marven'
}
//-----------------------------------------------



type User = {
    id: number;
    email: string;
    first_name: string;
  };
  
  type GetUsersResponse = {
    data: User[];
  };
  
  async function getUsers() {
    try {
      // 👇️ const data: GetUsersResponse
      const { data, status } = await axios.get<GetUsersResponse>(
        'https://reqres.in/api/users',
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );
  
      console.log(JSON.stringify(data, null, 4));
  
      // 👇️ "response status is: 200"
      console.log('response status is: ', status);
  
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }
  
  getUsers();




let yo = new Hello(matt);
yo.function_get_name();


wagTail("sparky");
