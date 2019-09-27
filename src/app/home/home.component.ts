import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ],
})
export class HomeComponent implements OnInit {
  public chgTheme = false;

  private el: ElementRef;
  private themeContainer: HTMLElement;
  constructor(private element: ElementRef) {
    this.el = this.element;
  }

  ngOnInit() {
    this.themeContainer = this.el.nativeElement.querySelector('.theme-container');
  }

  myFunc() {
    const styles = getComputedStyle(document.documentElement);
    const value = String(styles.getPropertyValue('--bg-color')).trim();
    document.getElementById('template-default').style.setProperty('--tp-background-color', '#d9444a');
    console.log(value);
  }

  ChangeTheme(changed: boolean) {
    console.log(changed);
    console.log(this.chgTheme);
    if (changed) {
      this.themeContainer.classList.add('light');
    } else {
      this.themeContainer.classList.remove('light');
    }
  }
}
