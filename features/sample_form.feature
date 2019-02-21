Feature: Sample Form

    As a user
    I want to fill out the form
    So that the company receives my information

    @active
    Scenario Outline: Form Submission - Required Fields Only
        Given I navigate to the example form page
        When I fill out the name field with "<name>"
        And I fill out the email field with "<email>"
        And I fill out the comment box with "<comment>"
        And I select "<experience>" from the expereince dropdown
        And I click the submit button
        Then I see "<name>" in the name field on the submission form
        And I see "<email>" in the email field on the submission form
        And I see "<experience>" in the expereince field on the submission form
        And I see "<comment>" in the message field on the submission form
        And I see the "Message Sent" message

        Examples:
            | name     | email             | comment                    | experience |
            | Jane Doe | janedoe@gmail.com | This is a comment Jane Doe | 5-7        |
            | John Doe | johndoe@gmail.com | This is a comment John Doe | 1-3        |
