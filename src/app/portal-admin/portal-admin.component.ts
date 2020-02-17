import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal-admin',
  templateUrl: './portal-admin.component.html',
  styleUrls: ['./portal-admin.component.css']
})
export class PortalAdminComponent implements OnInit {

  constructor() { }

title = 'Upload a File';

// public uploader: FileUploader = new FileUploader({url: URL});
  ngOnInit() {

// this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
//     this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
//          console.log('FileUpload:uploaded:', item, status, response);
        //  alert('File uploaded successfully');
//      };
//  }
  }

view(e) {
	document.getElementById('masterId').setAttribute('style', 'display:block');
}

}

