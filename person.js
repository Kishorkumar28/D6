class person{
constructor(name,age,gender,occupation)
            {
                this.name=name;
                this.age=age;
                this.gender=gender;
                this.occupation=occupation;
            }    

        
    
        get name()
                {
                    return this._name
                }
        set name(value)
                {
                    this._name=value
                }
        get age()
                {
                    return this._age
                }
        set age(value)
                {
                    if(value>=0)
                        {
                            this._age=value
                        }
                    else{   
                        console.error("Age cannot be negative")
                    }
                }
       get gender()
        {
            return this._gender
        } 

        set gender(value)
            {
                this._gender=value
            }
            get occupation() {
                return this._occupation;
            }
            set occupation(value) {
                this._occupation = value;
            }
            displayDetails() {
                console.log(`Name: ${this.name}`);
                console.log(`Age: ${this.age}`);
                console.log(`Gender: ${this.gender}`);
                console.log(`Occupation: ${this.occupation}`);
            }
    }
const person1 = new person("John Doe", 30, "Male", "Full stack developer");
person1.displayDetails();