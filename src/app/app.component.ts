import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apollo-tooling';

  query = this.apollo.watchQuery({
    query: gql`
      query GetHello {
        hello
      }
    `
  }).valueChanges;

  constructor(
    private apollo: Apollo,
  ) {
  }
}
