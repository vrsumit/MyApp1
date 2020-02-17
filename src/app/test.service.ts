import { Injectable } from '@angular/core';
import { Observable , Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  users=[
    {id:"1", fname:"A",lname:"Raut"},
    {id:"2", fname:"P",lname:"Lokhande"}
  ]

  constructor() { }

getTodayDate(){
  let date = new Date();
  return date;
}
getUsers(){
  return this.users;
}
private subject = new Subject<any>();

sendMessage(message:string){
  this.subject.next({ text:message });
}
clearMessage(){
  this.subject.next();
}
getMessage(): Observable<any> {
return this.subject.asObservable();
}

}
