import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';

@Component({
  selector: 'app-dictionary',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    CommonModule,
    FloatLabelModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    TableModule
  ],
  templateUrl: './dictionary.component.html',
  styleUrl: './dictionary.component.scss'
})
export class DictionaryComponent implements OnInit {
  value = '';
  url = '/assets/data.json';
  translations = [
    {
      es: 'hola',
      mfy: 'hola'
    },
    {
      es: 'adios',
      mfy: 'adios'
    }
  ];
  searchValue = '';

  ngOnInit() {
    fetch(this.url).then(res => res.json())
    .then(json => {
      this.translations = json;
    });
  }

  clear(table: Table) {
    table.clear();
    this.searchValue = ''
  }
}
