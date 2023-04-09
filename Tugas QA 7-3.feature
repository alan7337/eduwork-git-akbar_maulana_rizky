Feature: visit and login to zero.webappsecurity.com

    As a valid user
    I want to login to the website

    Scenario: Valid signin
        Given I open login page
        When I submit login
        Then I should see the homepage