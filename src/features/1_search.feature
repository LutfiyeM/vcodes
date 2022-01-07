@Search
Feature: Search voucher
    As a customer
    I can search voucher

    Background:
        Given the user navigates to the website

    Scenario Outline: the user selects "<section>" voucher
        When the user selects "<section>" section
        And the user filters location "<location>" and day "<day>" and people "<people>"
        Then the search results are listed in the page
        Examples:
            | section | location | day   | people |
            | food    | London   | Today | 2      |
