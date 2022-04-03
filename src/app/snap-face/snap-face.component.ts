import {
  Component,
  Input,
  OnInit,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { enableProdMode } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { Injectable } from '@angular/core';
import { FaceSnapService } from './../services/face-snaps.service';
import { Router } from '@angular/router';

enableProdMode();
@Component({
  selector: 'app-snap-face',
  templateUrl: './snap-face.component.html',
  styleUrls: ['./snap-face.component.scss'],
})
export class SnapFaceComponent implements OnInit {
  constructor(
    private faceSnapServide: FaceSnapService,
    private router: Router
  ) {}
  @Input() mySnap!: FaceSnap;
  cicked: boolean = false;
  checkClick() {
    this.faceSnapServide.getSingleSnap(this.mySnap.id);
    this.cicked ? (this.cicked = false) : (this.cicked = true);
  }
  viewDetails(): void {
    this.router.navigateByUrl(`snapfaces/${this.mySnap.id}`);
  }
  ngOnInit(): void {}
}
