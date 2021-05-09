import { When } from '@cucumber/cucumber';
import { UIActions } from '../support/actions';
var assert = require('chai').assert
var expect = require('chai').expect


let act = new UIActions();

When('I click on signin page', function(){
    act.clickSigninPage();
});

When('I enter email as {string}', function(newEmail: string){
    act.setRegisterEmail(newEmail);
});

When('I click on create account button', function(){
    act.clickCreateAccountButton();
});

When('I click on title as {string}', function(title: string){
    act.selectTitle(title);
});

When('I enter first name as {string}', function(firstName: string){
    act.enterFirstName(firstName)
});

When('I enter last name as {string}', function(lastname: string){
    act.enterLastName(lastname);
});

When('I verify email available as {string}', function(email: string){
    expect(email).to.equal(act.getEmail());
});

When('I enter password as {string}', function(password: string){
    act.enterPassword(password);
});

When('I enter DOB day as {string}', function(day: string){
    act.selectDay(day);
});

When('I enter DOB month as {string}', function(month: string){
    act.selectMonth(month);
});

When('I enter DOB year as {string}', function(year: string){
    act.selectYear(year);
});


When('I click on news letter checkbox', function(){
    act.clickOnNewsLetter();
});

When('I click on special offers checkbox', function(){
    act.clickOnOfferLetter();
});

When('I verify address first name as {string}', function(firstname: string){
    expect(firstname).to.equal(act.getAddressFirstName());
});

When('I verify address last name as {string}', function(lastname: string){
    expect(lastname).to.equal(act.getAddressLastName());
});

When('I entered company name as {string}', function(company: string){
    act.enterCompanyName(company);
});

When('I entered address1 as {string}', function(address: string){
    act.enterAddress1(address);
});

When('I entered address2 as {string}', function(address: string){
    act.enterAddress2(address);
});


When('I entered city as {string}', function(city: string){
    act.enterCity(city);
});

When('I selected state as {string}', function(state: string){
    act.enterState(state);
});

When('I entered zipcode as {string}', function(zipcode: string){
    act.enterZipcode(zipcode);
});

When('I selected country as {string}', function(country: string){
    act.enterCountry(country);
});

When('I entered additionalInformation as {string}', function(addInfo: string){
    act.enterAdditionalInformation(addInfo);
});

When('I entered home phone as {string}', function(homephone: string){
    act.enterHomePhone(homephone);
});

When('I entered mobile phone as {string}', function(mobilePhone: string){
    act.enterMobilePhone(mobilePhone);
});

When('I entered alias as {string}', function(aliasName: string){
    act.enteraliasAddress(aliasName);
});

When('I click on register button', function(){
    act.clickonRegisterButton();
});

When('I clicked on categories button', function() {
      act.clickOnCategerious();
})

When('I clicked on women category', function() {
    act.clickOnWomenbutton();
})

When('I will select product as {string}', function(productname: string) {
    act.selectProduct(productname);
})

When('I will click on proceed to checkout', function() {
    act.clickCheckout();
})


When('I enter email as {string} and password as {string}', function(username:string, password: string) {
     act.enterSigninEmail(username);
     act.enterSigninPassword(password);
     act.clickOnSubmitButton();
})