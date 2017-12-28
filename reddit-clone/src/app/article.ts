export class Article {
  public publishedAt: Date;
  public title: string;
  public description: string;
  public votes?: number;

  constructor(obj?: any) {
    this.title = obj && obj.title || null;
    this.votes = obj && obj.votes || 0;
    this.publishedAt = new Date();
  }

/*  constructor(
    public title: string,
    public description: string,
    public votes?: number
  ){
    this.votes = votes || 0;
    this.publishedAt = new Date();
  }*/

  public upVote() {
    this.votes = this.votes + 1;
  }

  public downVote() {
    this.votes = (this.votes > 0) ? this.votes - 1 : 0;
  }
}
