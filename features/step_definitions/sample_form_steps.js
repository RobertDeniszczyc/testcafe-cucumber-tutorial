const { Given, When, Then } = require('cucumber');
const { Selector } = require('testcafe');
const formConfirmationPage = require('../support/pages/form_confirmation_page.js')


Given('I navigate to the example form page', async function () {
    await testController.navigateTo('http://www.globalsqa.com/samplepagetest/')
});

When('I fill out the name field with {string}', async function (name) {
    const nameField = Selector('#g2599-name').with({ boundTestRun: testController });

    await testController.typeText(nameField, name)
});

When('I fill out the email field with {string}', async function (email) {
    const emailField = Selector('[name="g2599-email"]').with({ boundTestRun: testController });

    await testController.typeText(emailField, email)
});

When('I fill out the comment box with {string}', async function (comment) {
    const commentBox = Selector('#contact-form-comment-g2599-comment').with({ boundTestRun: testController });

    await testController.typeText(commentBox, comment)
});

When('I select {string} from the expereince dropdown', async function (experience) {
    const experienceSelect = Selector('#g2599-experienceinyears').with({ boundTestRun: testController });
    const experienceOption = experienceSelect.find('option').with({ boundTestRun: testController });

    await testController
        .click(experienceSelect)
        .click(experienceOption.withText(experience))
});

When('I click the submit button', async function () {
    const submitButton = Selector('input.pushbutton-wide').with({ boundTestRun: testController });

    await testController.click(submitButton)
});

Then('I see {string} in the name field on the submission form', async function (name) {
    await testController.expect(formConfirmationPage.confirmationTable.submissionRow().innerText).contains(name)
});

Then('I see {string} in the email field on the submission form', async function (email) {
    await testController.expect(formConfirmationPage.confirmationTable.submissionRow().nth(1).innerText).contains(email)
});

Then('I see {string} in the expereince field on the submission form', async function (experience) {
    await testController.expect(formConfirmationPage.confirmationTable.submissionRow().nth(3).innerText).contains(experience)
});

Then('I see {string} in the message field on the submission form', async function (message) {
    await testController.expect(formConfirmationPage.confirmationTable.submissionRow().nth(6).innerText).contains(message)
});

Then('I see the {string} message', async function (confirmation) {
    const sentConfirmation = Selector('#contact-form-2599').child('h3').with({ boundTestRun: testController })

    await testController.expect(sentConfirmation.innerText).contains(confirmation)
});
