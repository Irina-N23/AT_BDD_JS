@angularjs
Feature: Browse AngularJS
    As a user
    I want to have access to AngularJS Home and Tutorial Pages,
    So that I can find required articles and work with them, choose the necessary version of AngularJS

Scenario: 1. I should have access to AngularJS home page
    Given I open "AngularJS" home page
    Then Page title should include text "AngularJS"

Scenario: 2. I should have access to Tutorial page
    Given I'm on the AngularJS "home" page
    When I click on "Learn Button"
    And I click on "Tutorial Link"
    Then Current URL should be equal to "https://docs.angularjs.org/tutorial"

Scenario: 3. It's possible to find an article "ngBindHtml"
    Given I'm on the AngularJS "tutorial" page
    When I type "ngBindHtml" into the "Search Field"
    And I click on "ngBindHtml Link"
    Then Text of "Found Article Header" should be equal to "ngBindHtml"

Scenario: 4. It's possible to hide content of the article "ngBindHtml"
    Given I'm on the AngularJS "ngBindHtml" page
    When I click on "Hide Button"
    Then Text of "Show Button" should be equal to "Show"

Scenario: 5. I should have access to page of a chosen version of AngularJS
    Given I'm on the AngularJS "ngBindHtml" page
    When I click on "Version Dropdown Menu"
    And I click on "Button with version 1.6.10"
    Then Current URL should include text "1.6.10"