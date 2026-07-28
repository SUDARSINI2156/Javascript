class Animal{
    legs;

tail;

constructor(legs,tail){
    this.legs = legs;
    this.tail= tail;
}
display(){


    console.log("Animal");
    console.log(this.legs);
    console.log(this.tail);
}
}
class human extends Animal{
    nationality;
    leg;
    
    constructor(legs,tail,nationlity,leg){
        super (legs,tail);//to access parent data
        // this.legs=legs;
        // this.tail=tail;
        this.nationality=this.nationality;
        this.leg = this.leg;
    }
    display(){

        console.log("Human disp");
    console.log(this.legs);
    console.log(this.tail);
    console.log(this.nationality);
    console.log(this.leg);
}

}
let Anime = new Animal(2,false);
Anime.display();
let goms = new human(4,false,"indian",3);
console.log(goms);