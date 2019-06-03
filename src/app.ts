import "../node_modules/rrssb/css/rrssb.css";
import $ from 'jquery';
import "rrssb";

export class App {
  public message: string = 'Hello World!';
  activate() {
    $('.rrssb-buttons').rrssb({
      // required:
      title: 'This is the email subject and/or tweet text',
      url: 'https://rrssb.netlify.com/',
  
      // optional:
      description: 'Longer description used with some providers',
      emailBody: 'Usually email body is just the description + url, but you can customize it if you want'
    });
  }
}
