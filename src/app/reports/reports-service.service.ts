import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReportsServiceService {
  readonly MasterServerURL = localStorage.getItem('ict_ip');
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  // private http = inject(HttpClient);
  // private data: any[] = [];

  getData() {
    // this.http.get(this.apiUrl).subscribe((data:any)=>{
    //   console.log(data);
    //   return this.data = data;
    return this.http.get(this.apiUrl);
  }
  getReportCollection(Order_paratab31, FieldData: any[]) {
    return this.http.post(
      this.MasterServerURL + '/getReportCollection/' + Order_paratab31,
      FieldData
    );
  }
}

//ngOnInit(): void {this.getData();}

// private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// http = Inject(HttpClient);

// getPosts(){
//   return this.http.get(this.apiUrl);
// }

// getPost(id: number){
//   return this.http.get(this.apiUrl+'/'+id);
// }

// createPost(post: any){
//   return this.http.post(this.apiUrl, post);
// }

// updatePost(post: any){
//   return this.http.put(this.apiUrl+'/'+post.id, post);
// }

// deletePost(id: number){
//   return this.http.delete(this.apiUrl+'/'+id);
// }
// }
