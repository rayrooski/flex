const person = {
    firstName: 'Ray',
    lastName: 'Rooski',
    fullName: () => {
        return this;
        // return this.firstName + this.lastName
    }
}

console.log(person.fullName());