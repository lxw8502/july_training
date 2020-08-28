# Assignment 15

1. What does describe do in Jasmine?  
    ```
    In Jasmine, describe function is for grouping related specs. 
    The string parameter is for naming the collection of specs, and will be concatenated with specs to make a spec’s full name. 
    This helps in finding specs in a large suite. 
    ```    

2. What does SpyOn do in Jasmine?
    ```
    spyOn() is inbuilt into the Jasmine library which allows you to spy on a definite piece of code. 
    ```

3. Code Coverage
    ```
    Code coverage is a metric that can help you understand how much of your source is tested. 
    It's a very useful metric that can help you assess the quality of your test suite.
    ```
    ```
    The common metrics that you might see mentioned in your coverage reports include:     

    Function coverage: how many of the functions defined have been called.
    Statement coverage: how many of the statements in the program have been executed.
    Branches coverage: how many of the branches of the control structures (if statements for instance) have been executed.
    Condition coverage: how many of the boolean sub-expressions have been tested for a true and a false value.
    Line coverage: how many of lines of source code have been tested.
    ```
4. What e2e in angular
    ```
    End to end testing (E2E) or also known as integration testing is a great way to make sure at a high-level overview that our applications function correctly. 
    Commonly we use E2E tests to help ensure our components are working correctly together to create an entirely functioning feature cohesively. 
    E2E tests are not Unit tests. Unit tests should test a small isolated piece of code while the E2E test is a high-level test of a feature or several interactions.

    The Angular CLI gives us all the functionality we need for scaffolding, building and testing our Angular applications. 
    This scaffolding the Angular CLI provides includes unit tests and the setup needed for our E2E tests.       
    Our E2E tests are powered by a testing library called Protractor. 
    Protractor is an E2E test runner that can take scenario tests and run them in the browser.       
    The test code itself is written using Jasmine. 
    Jasmine is a testing library the provides all the assertion and utility functions needed to write unit and E2E tests.     
    In Angular CLI project we have a folder named e2e. We can write E2E test code in this folder.
    ```

5. What are the differences between Angular 2/4/6/8 versions.

|Angular 2 | Angular 4 |	Angular 6 |	Angular 8|
|:---- | :---- |:----|:----|
Angular 2 is the rewrite and copied version of the basic angular framework | Angular 4 is the rewrite version of angular 2 but is it added with the feature of backward compatibility | Angular 6 is the advanced version of Angular 4 which is faster and easy to use the framework. |	Angular 8 is the latest version of the angular framework which is incorporated with differential loading of modern JavaScript feature
This framework is built around the concept and logic circle of components |	This framework is added with the feature of supporting typescript |	Angular 6 enables the users to make an angular component and distribute it as a web component. | This framework enables users to create their own components as per their usability criteria.
Angular 2 is not incorporated with the feature of backward compatibility which implies that angular 2 application can not run on angular is the platform. |	Angular 4 is backward compatible with the Angular 2 framework for most of the applications. | This framework is compatible with all the previous versions of angular. |	This version of Angular is fully compatible with all the existing versions of angular.
It supports service/controller architecture | Its support module /component and templates-based architecture |	It supports angular-plugin architecture | The architecture which supports all the latest and previous feature of angular are supported by this framework.
Angular 2 uses ES2, ES6 typescript | Angular 4 uses 2.4 typescript | The typescript ES6 and 2.4 are used by this framework of angular.	| The typescript 3.4 is supported by the latest version of angular