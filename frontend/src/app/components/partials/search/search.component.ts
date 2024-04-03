import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchTerm = '';
  constructor(activatedRoute:ActivatedRoute, private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if(params["searchTerm"]){
        this.searchTerm = params["searchTerm"]
      }
    })
  }

  onSubmit(): void {
    if(this.searchTerm){
      this.router.navigateByUrl('search/' + this.searchTerm);
    } else {
      this.router.navigateByUrl('');
    }
  }

  clearSearch(): void {
    this.searchTerm = '';
  }

  search(term:string): void {
    if(term){
      this.router.navigateByUrl('search/' + term);
    } else {
      this.router.navigateByUrl('');
    }
  }
}
