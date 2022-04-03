import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
@Injectable({
  providedIn: 'root',
})
export class FolderService {}
export class FaceSnapService {
  faceSnaps: FaceSnap[] = [
    {
      id: 5,
      title: 'Archibald',
      descreption: 'Mon meilleur ami depuis tout petit !',
      date: new Date(),
      snaps: 0,
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      location: 'Paris',
    },
    {
      id: 4,
      title: 'Archibald',
      descreption: 'second descreption !',
      date: new Date(),
      snaps: 0,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Bkzh2U442GsT06dRG-6mvkR5LRPi6g5YGFy-VwIhCSbyUzV1Z9LbqMCfVBZSbuGTfsY&usqp=CAU',
      location: 'Tunisie',
    },
    {
      id: 13,
      title: 'Three Rock Mountain',
      descreption: 'third descreption',
      date: new Date(),
      snaps: 0,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
    },
  ];
  getAllSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }
  getSingleSnap(id: number): void {
    const snap = this.faceSnaps.find((elt) => elt.id === id);
    if (snap) {
      snap.snaps++;
    } else {
      throw new Error('faceSnap is not found');
    }
  }
  getItem(id: number): FaceSnap {
    const snap = this.faceSnaps.find((elt) => elt.id === id);
    if (snap) {
      return snap;
    } else {
      throw new Error('faceSnap is not found');
    }
  }
}
