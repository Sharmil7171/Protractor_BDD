# Protractor_BDD
Repo is Learning Protractor Testing tool with Cucumber

Installation

Install Protractor --> `$sudo npm install -g protractor`
install protractor command has automatically installed Webdriver-Manager along with Protractor

What is WebDriver Manager?
WebDriver-Manager allows automating the management of the binary drivers (e.g. chromedriver, geckodriver, etc.) required by Selenium WebDriver.

There are three goals of webdriver manager:
- Downloads the selenium server jar and browser drivers
- Runs the selenium server for the end to end tests
- Manages downloaded versions

To get a list of commands for webdriver-manager, use the help flag like --> `$webdriver-manager –help`

To check all web driver status --> `$webdriver-manager status`
Update Webdriver Manager --> `$webdriver-manager update`
To install the required Selenium Standalone Jars and Drivers executables, we need to make use of update command on WebDriver Manager. When we run the command 'webdriver-manager update' it downloads and updates three things namely browser drivers such as ChromeDriver, GheckoDriver, and Selenium Standalone Server. 


Jasmine as test-framework --> $sudo npm install -g jasmine

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Basics 

-- `Configuration file` as the name suggests is the file that will have all the configuration in order to run the Spec File (Feature file or Collection of TestCases). There can be multiple things which can be mentioned in the configuration file like:
Specify the selenium server address
Specify which tests to run
Set up the browsers (optional, default is chrome) 
Test framework to use 
Specify one or more global variable (optional)
specify before and after test execution options (optional)

// conf.js
exports.config = {
  framework: 'jasmine', //Type of Framework used 
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'], //Name of the Specfile
}

-- `Spec File` contains the specs or automated test cases commonly termed as a Test Scripts File.

The spec file is a combination of `describe-block` and `it-block`. `It-blocks` contains test scripts which sit inside the `describe-block`. In terms of Behaviour Driven Development, you can relate the it-blocks with Scenarios in Feature. There can be multiple it-blocks. It is just a function in jasmine which accepts two parameters namely a string and a function.

`Expectation or Expect` is a function which takes a value, called the actual value/output of the script.
A `matcher function` returns a boolean value by comparing actual with an expected value. Please note that this function is responsible for marking your test as Pass or Fail.
