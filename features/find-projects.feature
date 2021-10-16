Feature: Find projects

  This page displayes all available projects - filtered by defaults based on the user
  we can find here projects and start working on them

  Scenario: Should show 3 skeleton loaders when projects not available
    Given projects not available
    Then 3 skeleton loaders displayed on screen
    When loading done
    Then projects not available alert

  Scenario: Viewing all available projects
    Given Unauthorized user enters the page
    Then User views all available project without filters

  Scenario: Clicking on project should navigate to projects page
    Given Projects available on screen
    Then Project should have link to the project page
