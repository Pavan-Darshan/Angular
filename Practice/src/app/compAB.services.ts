import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class CommunicationComponent{
    messageEvent =new EventEmitter<string>();
  
    sendMessage(msg:string){
       this.messageEvent.emit(msg);
        
    }
  
}