$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/EclipseOxygenWorkspace/CRM/src/main/java/Features/DealPage.feature");
formatter.feature({
  "line": 1,
  "name": "CRM DealsPage test",
  "description": "",
  "id": "crm-dealspage-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 25580372002,
  "status": "passed"
});
formatter.before({
  "duration": 20838640174,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Add Deals in DealsPage",
  "description": "",
  "id": "crm-dealspage-test;add-deals-in-dealspage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user mouse hover to DealsTab and clicks on New Deals link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user will be on Add New Deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enter the required details and clicks on save button on dealspage",
  "rows": [
    {
      "cells": [
        "Title",
        "Amount",
        "Company"
      ],
      "line": 8
    },
    {
      "cells": [
        "Council",
        "5000",
        "ShireCamden"
      ],
      "line": 9
    },
    {
      "cells": [
        "Bread",
        "10000",
        "LondonShell"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify Deals entered are saved in DealsPage",
  "keyword": "And "
});
formatter.match({
  "location": "DealsPageTest.user_is_on_homepage()"
});
formatter.result({
  "duration": 319421583,
  "status": "passed"
});
formatter.match({
  "location": "DealsPageTest.user_mouse_hover_to_contacts_and_clicks_on_New_Contacts_link()"
});
formatter.result({
  "duration": 5558749805,
  "status": "passed"
});
formatter.match({
  "location": "DealsPageTest.user_will_be_on_Add_New_Deals_page()"
});
formatter.result({
  "duration": 11265742,
  "status": "passed"
});
formatter.match({
  "location": "DealsPageTest.user_enter_the_required_details_and_clicks_on_save_button_on_dealspage(DataTable)"
});
formatter.result({
  "duration": 33346422720,
  "status": "passed"
});
formatter.match({
  "location": "DealsPageTest.verify_Deals_entered_are_saved_in_DealsPage()"
});
formatter.result({
  "duration": 5854945773,
  "status": "passed"
});
});