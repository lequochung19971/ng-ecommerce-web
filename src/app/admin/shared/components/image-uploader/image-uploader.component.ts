import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
})
export class ImageUploaderComponent implements OnInit {
  @Input() control: FormControl;
  imageTypes = [
    'image/jpeg',
    'image/jpg',
    'image/svg+xml',
    'image/apng',
    'image/bmp',
    'image/png',
    'image/gif',
    'image/x-icon',
    'image/tiff',
    'image/webp',
  ];
  selectedImage: any;
  imgSrc: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.control);
  }

  onFileUploaded(event) {
    const uploadedFile = event.target.files;

    if (uploadedFile && uploadedFile.length > 0) {
      if (uploadedFile.length === 1) {
        this.uploadOnlyOneImage(uploadedFile[0]);
      }
    }
  }

  uploadOnlyOneImage(file) {
    if (this.imageTypeDetection(file)) {
      this.showPreviewImage(file);
    }
  }

  imageTypeDetection(file) {
    return this.imageTypes.indexOf(file.type) > -1;
  }

  showPreviewImage(file) {
    const reader = new FileReader();
    reader.onload = (e: any) => (this.imgSrc = e.target.result);
    reader.readAsDataURL(file);
  }

  removeImage(event) {
    if (event) {
      this.imgSrc = '';
      event.value = '';
    }
  }
}
