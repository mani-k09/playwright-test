const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "test-results/reports/",
  reportName:"PlayWright Automation Report",
  pageTitle:"let code user home page",
  displayDuration:false,
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "my-MAC",
    platform: {
      name: "Sonomo",
      version: "14.6.1",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Let code test application" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "Smoke-Test-002" },
      { label: "Execution Start Time", value: (new Date).toLocaleString() },
      { label: "Execution End Time", value: (new Date).toLocaleString() },
    ],
  },
});