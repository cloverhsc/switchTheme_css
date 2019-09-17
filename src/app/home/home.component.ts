import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ],
})
export class HomeComponent implements OnInit {
	public chgTheme = false;
	constructor() {}

	ngOnInit() {}

	myFunc() {
		let styles = getComputedStyle(document.documentElement);
		let value = String(styles.getPropertyValue('--bg-color')).trim();
		document.getElementById('template-default').style.setProperty('--tp-background-color', '#d9444a');
		console.log(value);
	}

	ChangeTheme(changed: boolean) {
		console.log(changed);
		console.log(this.chgTheme);
	}
}
