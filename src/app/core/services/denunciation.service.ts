import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, docData, getDoc, getFirestore, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Denunciation, IDenunciation } from 'src/app/modules/denunciation/create-denunciation/denunciation.model';
// import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DenunciationService {

  private denunciationRef = collection(this.firestore, 'denunciation');

  constructor(
    private firestore: Firestore,
  ) { }


  addDenunciation(denunciation: IDenunciation) {
    return addDoc(this.denunciationRef, denunciation)
  }

  getDenunciation(): Observable<IDenunciation[]> {
    return collectionData(this.denunciationRef, { idField: 'id' }) as Observable<IDenunciation[]>;
  }

  getIdDenunciation(idDenunciation: string): Observable<IDenunciation> {
    const docRef = doc(this.firestore, 'denunciation', idDenunciation);
    return docData(docRef) as Observable<IDenunciation>;
  }

}
