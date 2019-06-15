export class Student {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    
    public get name() : string {
        return this._name
    }
    
    
    public get age() : number {
        return this._age;
    }

    
    public set name(v : string) {
        this._name = v;
    }

    
    public set age(v : number) {
        this._age = v;
    }
    
    
    
}