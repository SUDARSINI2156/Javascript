function Sum(a,b){
    this.a =5;
    this.b=3;
     this.add=function(c)
    {
        //this.c;
        return this.a + this.b + c;
    }
}
let sums = new Sum();
console.log(sums.add(3));