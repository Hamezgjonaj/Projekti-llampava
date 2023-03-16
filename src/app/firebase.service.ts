import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  updateProduct(item: {
    id: number;
    emer: string;
    cmimi: number;
    sasia: number;
  }) {
    throw new Error('Method not implemented.');
  }
  constructor(private firestore: AngularFirestore) {}
  getData() {
    return this.firestore
      .collection('produktet')
      .valueChanges({ idField: 'customIdName' });
  }
  getPunonjes() {
    return this.firestore
      .collection('punonjesit')
      .valueChanges({ idField: 'customIdName' });
  }
  ndryshoProdukt(item: any) {
    return this.firestore
      .collection('produktet')
      .doc(item.customIdName)
      .update(item);
  }
  fshiProdukt(id: any) {
    console.log(id);
    return this.firestore.collection('produktet').doc(id).delete();
  }
  fshiPunonjes(id: any) {
    console.log(id);
    return this.firestore.collection('punonjesit').doc(id).delete();
  }
  addProduct(item: any) {
    return this.firestore.collection('produktet').add(item);
  }
  punonjesIRi(item: any) {
    return this.firestore.collection('punonjesit').add(item);
  }

  signOut() {}
}
