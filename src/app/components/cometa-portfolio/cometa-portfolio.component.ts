import { Component, OnInit } from '@angular/core';
import { SwitcherService } from '../../cometa-services/shared/switcher.service';

@Component({
  selector: 'app-cometa-portfolio',
  templateUrl: './cometa-portfolio.component.html',
  styleUrls: ['./cometa-portfolio.component.scss']
})
export class CometaPortfolioComponent implements OnInit {

  screenshots = [
    {
      image: "assets/screenshots/StepEditor.PNG",
      title: "Testplan Editor",
      description: "Automated Software Testing made easy. The web testing editor is selfexplaining. Write parameterized tests in almost natural language."
    },
    {
      image: "assets/screenshots/BrowserSelection.PNG",
      title: "Selection of browsers",
      description: "Vast variety of browsers and operating systems to choose from. Massive parallel and automated website testing saves countless hours."
    },
    {
      image: "assets/screenshots/SchedulePopup.PNG",
      title: "Scheduling tests",
      description: "Let co.meta do automated web testing while your are sleeping. Why make things more complicated?"
    },
    {
      image: "assets/screenshots/LiveSteps.PNG",
      title: "Live steps",
      description: "See live what co.meta executes. Complex software made easy."
    },
    {
      image: "assets/screenshots/SearchFilters.PNG",
      title: "Overview Filtering",
      description: "Using flexible filtering gives every user a personal view to the testplan dashboard, as needed."
    },
    {
      image: "assets/screenshots/FeatureSorting.PNG",
      title: "Testplan Sorting",
      description: "Give your dashboard the correct importance of every items. This way co.meta users may focus just in time on what they need to see."
    },
    {
        image: "assets/screenshots/FeatureResults.PNG",
        title: "Test Results",
        description: "Understanding the performance of your gui testing is probably the most important task. Fine layout, easy overview and more details on click."
    },
    {
        image: "assets/screenshots/FeatureStepResult.PNG",
        title: "Step Detail Results",
        description: "Each step records the results as executed. Comparing the screenshots shows pixel difference."
    },
    {
        image: "assets/screenshots/FeatureResultScore.PNG",
        title: "Result Score",
        description: "Result score gives a clean and fast overview of your testplan performance."
    },
    {
        image: "assets/screenshots/FeatureResultLog.PNG",
        title: "Professional Logging",
        description: "Logging is the art of understanding details. Consume logs right inside co.meta. Selfservice at it's best."
    },
    {
        image: "assets/screenshots/FeatureOptions.PNG",
        title: "Testplan actions",
        description: "Most needed actions in prominent position for fast access. Saves valuable time. Reduced complexity for easy understanding."
    },
    {
        image: "assets/screenshots/AdminPanel.PNG",
        title: "Administration panel",
        description: "The administration panel provides a minimal set of actions. co.meta was designed to be self-service. This is probably the most unused screen."
    },
    {
        image: "assets/screenshots/EditFeatureInfo.PNG",
        title: "Choosing Departments",
        description: "Selfexplaining. co.meta offers an easy to understand security-concept for multi-homed tenants."
    },
    {
        image: "assets/screenshots/FeatureBox.PNG",
        title: "Testplan Box",
        description: "Each testplan is represented with detailed information on the dashboard. Focus on important information of complex test-situations."
    },
    {
        image: "assets/screenshots/FeatureOptionsMenu.PNG",
        title: "Actions Dashboard Menu",
        description: "The clean layout makes navigation to actions in testplan dashboard easy. Clean layouts help to focus."
    },
    {
        image: "assets/screenshots/ContinueOnFailure.PNG",
        title: "Continue on failure",
        description: "With 'Continue on failure' you can define whether or not failing steps will stop the execution of a feature."
    }
  ];

  currentTheme: any;

  constructor(private sw: SwitcherService) { }

  ngOnInit(): void {
    this.setCurrentTheme();
  }


  setCurrentTheme() {
    this.sw.getCurrentThemeObservable().subscribe( theme => this.currentTheme = theme );
  }

}
