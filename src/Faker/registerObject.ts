export class RegisterObject {

    getRandomPhoneNumber() {
        return Math.floor(Math.random() * 9000000000) + 1000000000;
    }

    getRandomDay() {
        return Math.floor(Math.random() * 10);
    }

    getRegisterObject() {
        var faker = require('faker');
        return {
            "newEmail": faker.internet.email(),
            "title": "Mr.",
            "firstName": faker.name.firstName(),
            "lastName": faker.name.lastName(),
            "passowrd": faker.internet.password(),
            "day": this.getRandomDay(),
            "month": faker.date.month(),
            "year": 1993,
            "company": faker.company.companyName(),
            "address1": faker.address.streetAddress(),
            "address2": faker.address.secondaryAddress(),
            "city": faker.address.city(),
            "state": "Alabama",
            "zipcode": "50007",
            "country": "United States",
            "additionalInfo": this.getRandomPhoneNumber(),
            "homePhone": this.getRandomPhoneNumber(),
            "mobileNumber": this.getRandomPhoneNumber(),
            "aliasName": this.getRandomPhoneNumber()
          }
    }
}
