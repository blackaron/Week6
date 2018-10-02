import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas',
  templateUrl: './tugas.component.html',
  styleUrls: ['./tugas.component.css']
})
export class TugasComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'Tidak ada user baru yang telah dibuat!';
  serverName = 'TestServer';
  dataUsername ='';
  Username='';

  constructor() { 
    // () => {} adalah arrow function atau lamda --> fitur ES6 javascript
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  //onCreationStatus(){

    //this.serverCreationStatus = 'User telah dibuat!';
    
  //}
  

  onCreateServer(){
    this.dataUsername =''+ this.Username;
  }

  onUpdateServerName(event: Event){
    this.Username = (<HTMLInputElement>event.target).value;
  }

}

