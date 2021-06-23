Feature: Product Page


        Scenario Outline: Adding Products to cart
            Given User is on login page
             When I click on signin page
              And I enter email as "<newemail>"
              And I click on create account button
              And I click on title as "<title>"
              And I enter first name as "<first_name>"
              And I enter last name as "<last_name>"
              And I verify email available as "<newemail>"
              And I enter password as "<passowrd>"
              And I enter DOB day as "<day>"
              And I enter DOB month as "<month>"
              And I enter DOB year as "<year>"
              And I click on news letter checkbox
              And I click on special offers checkbox
              And I entered company name as "<company>"
              And I entered address1 as "<address1>"
              And I entered address2 as "<address2>"
              And I selected country as "<country>"
              And I entered city as "<city>"
              And I selected state as "<state>"
              And I entered zipcode as "<zipcode>"
              And I entered additionalInformation as "<additionalInfo>"
              And I entered home phone as "<home_phone>"
              And I entered mobile phone as "<mobile_number>"
              And I entered alias as "<alias_name>"
              And I click on register button
             Then I verify user first name as "<first_name>" and last name as "<last_name>"
              And I click on signout button
              And I verify user on home page
              And I click on signin page
              And I enter email as "<newemail>" and password as "<passowrd>"
             When I clicked on women category
              And I will select product as "<productName>"
              And I will click on proceed to checkout
             Then I verify product as "<productName>" on payment stage

        
        Examples:data
                  | newemail           | title | first_name | last_name | passowrd | day | month | year | company | address1 | address2 | city      | state   | zipcode | country       | additionalInfo | home_phone | mobile_number | alias_name | productName                 |
                  | anz34585001@gmail.com | Mr.   | san        | all       | D@rk9    | 5   | March | 1990 | anz     | address1 | address2 | hyderabad | Alabama | 50007   | United States | 8099223333     | 8099223332 | 8099223334    | 8099223335 | Faded Short Sleeve T-shirts |
