import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private apollo: Apollo) {}

  getProjects(): Observable<any> {
    return this.apollo.query({
      query: gql`
      query GetProjectsWithLimit {
        projects {
          headline
          description
          videoUrl
          viewContent
          images {
            url
          }
        }
      }
      `
    });
  }

  getAbout(): Observable<any> {
    return this.apollo.query({
      query: gql`
      query GetAllAboutsWithLimit {
        abouts(first: 1) {
          title
          biography1 {
            html
          }
          biography2 {
            html
          }
          headshot {
            url
          }
        }
      }
      `
    });
  }

}
