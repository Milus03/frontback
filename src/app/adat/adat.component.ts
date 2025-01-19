import { Component, OnInit } from '@angular/core';
import { ValamiService } from '../valami.service';

@Component({
  selector: 'app-adat',
  templateUrl: './adat.component.html',
  styleUrls: ['./adat.component.css'],
  standalone: false
})
export class AdatComponent implements OnInit {
  data: any[] = [];
  newProduct = {
    name: '',
    cuisine: '',
    ingredients: '',
    instructions: '',
    image_url: '',
    type: '' // hozzáadjuk a type mezőt
  };
  editProduct = {
    id: null,
    name: '',
    cuisine: '',
    ingredients: '',
    instructions: '',
    image_url: '',
    type: '' // hozzáadjuk a type mezőt
  };
  isEditMode = false;

  constructor(private valamiService: ValamiService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.valamiService.getAll().subscribe((response: any) => {
      this.data = response;
    });
  }

  createProduct(): void {
    this.valamiService.create(this.newProduct).subscribe({
      next: (response) => {
        alert('Termék hozzáadva!');
        this.newProduct = { name: '', cuisine: '', ingredients: '', instructions: '', image_url: '', type: '' }; // reset after adding
        this.loadData();
      },
      error: (error) => {
        console.error('Hiba történt:', error);
        alert('Nem sikerült a hozzáadás');
      },
      complete: () => {
        console.log('Hozzáadás kész');
      }
    });
  }

  startEdit(product: any): void {
    if (product && product.id) {
      this.isEditMode = true;
      this.editProduct = { ...product };
    } else {
      alert('Hiba: nem lehet szerkeszteni');
    }
  }

  updateProduct(): void {
    if (this.editProduct.id !== null) {
      this.valamiService.update(this.editProduct.id, this.editProduct).subscribe({
        next: (response) => {
          alert('Termék frissítve!');
          this.isEditMode = false;
          this.loadData();
        },
        error: (error) => {
          console.error('Hiba történt:', error);
          alert('Nem sikerült a frissítés');
        },
        complete: () => {
          console.log('Frissítés kész');
        }
      });
    } else {
      alert('Hibás ID.');
    }
  }

  patch(): void {
    if (this.editProduct.id !== null) {
      this.valamiService.patch(this.editProduct.id, this.editProduct).subscribe({
        next: (response) => {
          alert('Termék frissítve');
          this.isEditMode = false;
          this.loadData();
        },
        error: (error) => {
          console.error('Hiba:', error);
        },
        complete: () => {
          console.log('Patch kész');
        }
      });
    } else {
      alert('Hiba: Nincs kijelölt termék');
    }
  }

  deleteProduct(id: number): void {
    if (id !== null && id !== undefined) {
      this.valamiService.delete(id).subscribe({
        next: (response) => {
          alert('Termék törölve');
          this.loadData();
        },
        error: (error) => {
          console.error('Hiba történt:', error);
          alert('Nem sikerült a törlés');
        },
        complete: () => {
          console.log('Törlés kész');
        }
      });
    } else {
      alert('Hiba: nincs ID');
    }
  }
}
