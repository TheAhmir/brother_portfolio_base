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
          id
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

  getProjectById(id: string): Observable<any> {
    return this.apollo.query({
      query: gql`
      query GetProjectById($id: ID!) {
        project(where: {id: $id}) {
          headline
          description
          videoUrl
          detailedDescription {
            htmls
          }
          viewContent
          images {
            url
          }
        }
      }
      `,
      variables: {
        id: id
      }
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
