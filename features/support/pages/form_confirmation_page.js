const {Selector} = require('testcafe');

exports.confirmationTable = {
    submissionRow: function() {
        return Selector('.contact-form-submission').with({ boundTestRun: testController }).child('p')
    }
}
