class pearson{
    name;
    age;
    yearBirth;

    constructor(name, age){
        this.name = name;
        this.age = age;
        this.yearBirth = 2024 - age;
    }

    descrever(){
        console.log(`Meu nome é ${this.name} e minha idade é ${this.age}`);
    }
};

function comparePeople(p1, p2){
    if(p1.age > p2.age){
        //p1 é mais velho que p2
        console.log(`${p1.name} is older than ${p2.name}`);

    } else if (p2.age > p1.age){
        console.log(`${p2.name} is older than ${p1.name}`);
        
    } else {
        //p1 tem a mesma idade que p2
        console.log(`${p1.name} is the same age as ${p2.name}`);
    };
};

const martim = new pearson('Martim', 32);
const marcelly = new pearson('Marcelly', 29);

comparePeople(martim, marcelly);