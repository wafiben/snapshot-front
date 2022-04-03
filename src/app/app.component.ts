import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'snapface';
  nap!: FaceSnap[];

  ngOnInit(): void {

  }
}
