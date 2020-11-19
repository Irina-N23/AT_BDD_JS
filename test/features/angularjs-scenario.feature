@angularjs
Feature: A simple AngularJS website demo

Scenario: As a user I should have access to AngularJS home page
    Given I open "AngularJS" home page
    Then Page title should include text "AngularJS"

Scenario: As a user I should have access to Tutorial page
    Given I'm on the AngularJS "home" page
    When I click on "Learn Button"
    When I click on "Tutorial Link"
    Then Current URL should be equal to "https://docs.angularjs.org/tutorial"

Scenario: It's possible to find an article "ngBindHtml"
    Given I'm on the AngularJS "tutorial" page
    When I type "ngBindHtml" into the "Search Field"
    When I click on "ngBindHtml Link"
    Then Text of "Found Article Header" should be equal to "ngBindHtml"

Scenario: It's possible to hide content of the article "ngBindHtml"
    Given I'm on the AngularJS "ngBindHtml" page
    When I click on "Hide Button"
    Then Text of "Show Button" should be equal to "Show"

Scenario: As a user I should have access to page of a chosen version of AngularJS
    Given I'm on the AngularJS "ngBindHtml" page
    When I click on "Version Dropdown Menu"
    When I click on "Button with version 1.6.10"
    Then Current URL should include text "1.6.10"