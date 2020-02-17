import { Component, OnInit } from '@angular/core';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  constructor(private router: Router) { }
  title = 'Upload a File';

  // public uploader: FileUploader = new FileUploader({url: URL});
  ngOnInit() {

    $(".page-header-wrapper").hide();

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

  navigate(flag) {
    if(flag === 1)
      this.router.navigate(['/resources']);
    else if(flag === 2)
      this.router.navigate(['/links']);
    else
      this.router.navigate(['/events']);
  }
}
