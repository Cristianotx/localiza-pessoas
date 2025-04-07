import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContentComponent } from './components/content/content.component';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, MenuComponent, ContentComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
