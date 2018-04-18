@account

Feature: Sign up
  In order to benefit from the advantages of an user account
  As a free user without an account
  I want to be able to sign up for an account

  @stable
  Scenario: Sign up for an account with an email
    Given I open the page "Homepage"
    When I write query "hello world"
    Then I see search result