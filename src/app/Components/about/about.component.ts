import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/Animations/fadeAni';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [fade]
})
export class AboutComponent implements OnInit {

  constructor() { }
  //Main card info
  name = "Kyle Visser" ;
  education = "BSc IT undergrad" ;
  area = "NWU Potchefstroom Campus";
  cell = "+27 81 429 4969";
  cellHref = "tel:+27814294969";
  email = "kv01mobile@icloud.com";
  emailHref = "mailto:kv01mobile@icloud.com?Subject=Job%20Opportunity";
  download = "Download CV";
  downloadHref ="assets/CV-kyle.pdf";

  //About Card info
  aboutTitle = "About";
  aboutSubTitle = "A Little about myself";
  aboutBody = "I am a very hardworking person. I have been working with code since grade 10" +
  " and I have loved it ever since. My strong points include hardworking, Creative, " +
  " and can learn easily. I'm a fast learner and am always looking for new oppertunities" +
  " to improve myself. I'm currently a member of my hostels house committee and have experience in" + 
  " managing projects and events. I have great people skills. I can speak both English and Afrikaans." + 
  " On my off days I'm always relaxing with the people closest to me or I'm trying to improve myself" +
  " with educational documentaries or hobbies. I'm flexible with any work that is given to me" +
  " and I will try and do my best on any assignment.";

  //Career Card info
  careerTitle = "Career";
  careerSubTitle = "Goal Objective" ;
  careerBody = "I am interested in improving myself and my skills in my field of study." +
  " I am always willing to learn and pick up new challenges along the way." +
  " I would like to improve my problem solving skills by using new and creative ways of thinking." +
  " When I come face to face with a problem I will face it head on and along the way ask for help." +
  " I am hardworking, determined, passionate and optimistic. I always go in with a smile"+
  " and look at life with a glass half full type of attitude."

  //Social Card info
  socialTile = "Social";
  socialSubTitle = "My Social Accounts";
  gitHub = "GitHub";
  linkedIn = "LinkedIn";

  gitHubHref = "https://github.com/Wallies3";
  linkedInHref = "https://www.linkedin.com/in/kyle-visser-09a3a0228/";

  //OffCanvas Information
  offCanvasTitle = "Contact Details" ;
  offConvasButton = "Contact Me";
  ngOnInit(): void {
  }

}
