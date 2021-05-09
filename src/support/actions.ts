
import { RegisterObject } from '../Faker/registerObject'
import { AccountPage } from '../pageObjects/accountPage';
import { HomePage } from '../pageObjects/homePage';
import { personalInformation as personalinfo } from '../pageObjects/personalInformation';
import { RegisterPage } from '../pageObjects/registerPage';
import { ProductPage } from '../pageObjects/ProductsPage';

import {BasePage} from '../support/basePage'

export class UIActions {
   // registerObject;
    registerPage;
    AccountPage;
    HomePage;
    personalInformation;
    BasePage;
    ProductPage;

    constructor() {
        
     //   this.registerObject = new RegisterObject();
        this.registerPage = new RegisterPage();
        this.AccountPage = new AccountPage();
        this.HomePage = new HomePage();
        this.personalInformation = new personalinfo();
        this.BasePage = new BasePage();
        this.ProductPage = new ProductPage();
    }


    public goToLoginPage() {
         this.BasePage.open("http://automationpractice.com/index.php");
    }

    selectTitle(title:string){
        if(title === "Mr.")
        {
            this.personalInformation.mrButton().click();
        }else if(title == "Mrs.") {
            this.personalInformation.mrsButton().click();
        }
    }

    enterFirstName(firstname: string){
        this.personalInformation.firstName().setValue(firstname);
    }

    enterLastName(lastname: string){
        this.personalInformation.lastName().setValue(lastname);
    }

    getEmail(){
        return this.personalInformation.email().getAttribute('value');
    }

    enterPassword(password: string) {
        this.personalInformation.password().setValue(password);
    }

    selectDay(day:string) {
        this.selectByVisibleTextCustom( this.personalInformation.days(), day);
    }

    selectMonth(month: string) {
        this.selectByVisibleTextCustom( this.personalInformation.months(), month);
    }

    selectYear(year: string) {
        this.selectByVisibleTextCustom( this.personalInformation.years(), year);
    }

    clickOnNewsLetter() {
        this.personalInformation.newsLetter().click();
    }

    clickOnOfferLetter() {
        this.personalInformation.specialOffers().click();
    }

    getAddressFirstName(){
        return this.personalInformation.address_firstName().getAttribute('value');
    }

    getAddressLastName(){
        return this.personalInformation.address_firstName().getAttribute('value');
    }

    enterCompanyName(company: string) {
        this.personalInformation.address_company().setValue(company);
    }

    enterAddress1(address: string) {
        this.personalInformation.address_address1().setValue(address)
    }

    enterAddress2(address: string) {
        this.personalInformation.address_address1().setValue(address)
    }

    enterCity(city: string) {
        this.personalInformation.address_city().setValue(city)
    }

    enterState(state: string) {
        this.selectByVisibleTextCustom(this.personalInformation.address_state(), state);
    }

    enterCountry(country : string) {
        this.selectByVisibleText(this.personalInformation.address_country(), country);
    }

    enterZipcode(zipcode: string){
       this.personalInformation.zipcode().setValue(zipcode);
    }

    enterAdditionalInformation(addInfo:string) {
        this.personalInformation.additional_information().setValue(addInfo);
    }


    enterHomePhone(homephone: string) {
        this.personalInformation.homePhone().setValue(homephone);
    }

    enterMobilePhone(mobilephone: string) {
        this.personalInformation.mobilePhone().setValue(mobilephone);
    }

    enteraliasAddress(aliasName: string) {
        this.personalInformation.address_alias_No().setValue(aliasName);
    }

    selectByVisibleText(selector:WebdriverIO.Element, value:string) {
     selector.click();
     selector.selectByVisibleText(value)
    }

    selectByIndex(selector:WebdriverIO.Element, value:string) {
    selector.click();
     selector.selectByIndex(Number(value))
    }

    selectByVisibleTextCustom(selector:WebdriverIO.Element, value:string){
    selector.click();
    selector.$$('option').forEach(element => {
        if(element.getText().includes(value))
        {
            element.click();
            return true;
        } 
    });
    }

    clickSigninPage() {
        this.HomePage.signin_button().click();
    }

    setRegisterEmail(newEmail: string) {
        this.registerPage.emailAddress().setValue(newEmail);
    }

    clickCreateAccountButton() {
        this.registerPage.createAccount().click();
    }

    clickOnLogout(){
        this.AccountPage.logout().click();
    }

    gettheLoggedUserName() {
        return this.AccountPage.accountName().getText();
    }

    clickOnCategerious() {
        this.AccountPage.categories().click();
    }

    clickOnWomenbutton() {
        this.AccountPage.womenDresses().waitForExist({ timeout: 5000 });
        this.AccountPage.womenDresses().click();
    }

    addFirstProduct() {
        this.AccountPage.firstProduct_addtocart().click();
    }

    gettheFirstProductName() {
        return this.AccountPage.firstProductName().getText();
    }

    clickCheckout() {
        browser.pause(4000)
        this.AccountPage.proceedToCheckout().click();
    }

    getPaymentProductName() {
        return this.AccountPage.payment_ProductName().getAttribute("title");
    }

    clickonRegisterButton() {
       this.personalInformation.registerButton().click();
    }

    logout() {
        this.AccountPage.logout().click();
    }

    getTitle() {
        return browser.getTitle();
    }

    selectProduct(name: string){
        let allproducts = this.ProductPage.getListofProducts();
        allproducts.forEach(product => {
            if(product.$('.product-name').getText().includes(name)) {
                product.$('[title="Add to cart"]').click();
                return true;
            }
        });
    }

    enterSigninEmail(email:string) {
        this.HomePage.signin_email().setValue(email);
    }

    enterSigninPassword(password: string) {
       this.HomePage.signin_password().setValue(password)
    }

    clickOnSubmitButton() {
       this.HomePage.submit_button().click();
    }
}
