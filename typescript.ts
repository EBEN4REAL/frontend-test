let helloworld: string = "Hello Eben"
console.log(helloworld)


// becomes
interface User {
    name: string,
    id: number
}
class UserAccount {
    name: string;
    id: number;
  
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
  }
  
  const user: User = new UserAccount("Murphy", 1);

  var nums:number[] = [1,2,3,3] 
  console.log(nums)

// You can use interfaces to annotate parameters and return values to functions:

// function getAdminUser(): User {

// }

// function deleteUser(user: User) {

// }