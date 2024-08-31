Feature: This is to check if user could enroll to new course

Background:
     Given User navigates to the application
     And User click on the login link

Scenario: Check user can enroll for the Cucumber course
    And User enter the username as "logintomani@gmail.com"
    And User enter the password as "London@1987"
    When User click on the login button
    Then Login should be success
    When User click new course button
    Then User should see title as "What is Cucumber?"
    When User click on Enroll to course button
    Then User should see message as "Enjoy the course in English or Tamil"






