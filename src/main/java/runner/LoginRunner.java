package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;	
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= {"E:\\MyNewWorkspace\\czechBDDPractice\\src\\main\\java\\features\\login.feature"},
       glue= {"stepDefinitions"},format= {"pretty","html:test-output"}
		)







public class LoginRunner {

}
