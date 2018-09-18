class Contact{
    constructor({ name = null, phone = null}){
        this.name = name;
        this.phone = phone;
    }

    print(){
        console.log(`${this.name} ${this.phone}`)
    }
}

export default Contact