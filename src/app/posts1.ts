export class Posts1 {

    post_date: string ;
    post_id: string ;
    post_comments: string ;
  static post_date: any;

    constructor (  post_date: string , post_id: string,post_comments: string  ){
        
        this.post_date=post_date;
        this.post_id=post_id;
        this.post_comments=post_comments;
    }
  
}
