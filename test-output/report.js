$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/MyNewWorkspace/czechBDDPractice/src/main/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM feature",
  "description": "",
  "id": "free-crm-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Login Test",
  "description": "",
  "id": "free-crm-feature;free-crm-login-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 990767500,
  "status": "passed"
});
});