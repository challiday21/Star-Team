import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-page-list-films',
  templateUrl: './page-list-films.component.html',
  styleUrls: ['./page-list-films.component.css']
})
export class PageListFilmsComponent implements OnInit {

  public listFilms!: Film[];
  public results!: any;
  router: any;
  public detail!: Film;


  constructor(private filmsService: FilmsService) { }

  ngOnInit(): void {

    this.filmsService.getAllFilms().subscribe((resp) => {
      console.log(resp);
      this.listFilms = resp.results;
    })
  }

  onClickFilm(filmClicked: Film) {
    console.log(filmClicked.title);
    this.detail = filmClicked;
  }
}
