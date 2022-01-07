@Homepage
Feature: Homepage features
    As a customer
    I can reach the homepage

    Background:
        Given the user navigates to the website

    Scenario: Failed scenario - The expectation is not correct
        Then the start searching box should be disabled
