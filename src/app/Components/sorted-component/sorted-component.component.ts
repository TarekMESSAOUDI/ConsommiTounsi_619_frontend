import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/Models/Category';
import { UnderCategory } from 'src/app/Models/UnderCategory';
import { UndercategoryService } from 'src/app/Services/UnderCategory/undercategory.service';

@Component({
  selector: 'app-sorted-component',
  templateUrl: './sorted-component.component.html',
  styleUrls: ['./sorted-component.component.css'],
})
export class SortedComponentComponent implements OnInit {
  underCategoryList: UnderCategory[];
  @Input()
  priceFilters: any[];
  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onFilterChange = new EventEmitter<any>();

  showFilters = true;
  sideShown = false;
  constructor(private undercategoryService: UndercategoryService) {}

  ngOnInit() {
    this.displayCategories();
  }
  displayCategories() {
    this.undercategoryService.getAllUnderCat().subscribe((data) => {
      this.underCategoryList = data;
    });
  }
  onInputChange($event, filter, type) {
    const change = $event.target.checked ? 1 : -1;
    this.onFilterChange.emit({
      type,
      filter,
      isChecked: $event.target.checked,
      change,
    });
  }
}
