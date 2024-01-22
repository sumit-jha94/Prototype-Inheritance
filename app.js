const myInfo = {
    isMale: true,
    Bio: function (){
        console.log(`My name is ${this.name}. Am I Male? ${this.isMale}`);
    }
}

const mySelf = Object.create(myInfo);
mySelf.name = 'Sumit';
mySelf.Bio();