import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  gallery: string[] = [
    'https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg',
    'https://bipbap.ru/wp-content/uploads/2017/10/0_a9e8c_fefaa1d2_XL-640x400.jpg',
    'https://bipbap.ru/wp-content/uploads/2017/10/fon-3.jpg',
    'https://bipbap.ru/wp-content/uploads/2017/10/0_a9e8c_fefaa1d2_XL-640x400.jpg'];

    i:number = 0;

  constructor() { }

  cards = [
    {title:"hi title 1", text: "some text 1"},
    {title:"hi title 2", text: "some text 2"},
    {title:"hi title 3", text: "some text 3"},
    {title:"hi title 4", text: "some text 4"}
  ];

  ngOnInit() {
    this.currentImg = this.gallery[0];
  }

  currentImg: string;
  prev() {
    this.i--;
    if(this.i < 0 ){
      this.i = this.gallery.length - 1;
    }
    this.currentImg = this.gallery[this.i];    console.log('prev ' + this.i);
  }
  next(){
    this.i++;
    if(this.i >= this.gallery.length){
      this.i = 0;
    }
    this.currentImg = this.gallery[this.i];
    console.log('next ' + this.i);
  }

}
