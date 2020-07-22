class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
    }
    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
}

class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;
    }

    addCoins(user){
        user.luCoins++;
        console.log(`${user.name} has ${user.luCoins} coins`);
        return this;
    }
    removeCoins(user){
        if(user.luCoins){
            user.luCoins--;
            console.log(`${user.name} has ${user.luCoins} coins`);
        } else {
            console.error(`${user.name} has ${user.luCoins} coins`);
        }
        return this;
    }

}

class Admin extends Moderator{
   addCourse(user, course){
       user.courses.push(course);
       console.log(user.courses)
       return this;
   }
   deleteCourse(user, course){
       if(user.courses.includes(course))
       {
           //Using Reduce HOF
        //    user.courses = user.courses.reduce((acc, val)=>{
        //     if(val != course)    
        //     acc.push(val)
        //     return acc;
        //    },[]);

        //Using Filter HOF
        user.courses = user.courses.filter(existingCourse => existingCourse != course)
           console.log(user.courses)
       } else {
           console.log(`User does not enrolled for the ${course}`)
       }
       return this;
   }
}


let user1 = new User('Tom',25,'tom@gmail.com')
let user2 = new User('Harry',24,'harry@gmai.com')
let mod = new Moderator('Avenger',24,'av@gmail.com','Moderator');
let admin = new Admin('Disney',25,'d@gmail.com', 'Admin');
let users = [user1, user2, mod, admin];

let user = users[0];
user.login();
console.log(user)
mod.addCoins(user).addCoins(user)
mod.removeCoins(user).removeCoins(user).addCoins(user)

admin.addCourse(user,'Javascript');
admin.addCourse(user,'Python');

admin.deleteCourse(user,'Javascript');
admin.deleteCourse(user,'AI/ML');
console.log(user)
user.logout()