# Intro to TDD
* What is TDD?
* Why?
* Define unit test vs. integration test
* Define regression
* Write some tests using rspec
* Define happy path & sad path

### Lecture Notes
Define TDD vs. BDD

##### What is TDD
- Write the test, it should be failing!
- Write the code to make the test pass
- Make it better, refactor under green

**Red - Green - Refactor**

##### Why
- Process/Workflow
- Documentation
- Confidence against regression, software becomes harder to change overtime, tests help

##### How
Phases of a test (follow a narrative)
- Setup
- Execute/trigger
- Expectation
- Teardown

##### What NOT to test
- implementation details
- private methods
- library code (ActiveRecord associations, JSON.parse)
