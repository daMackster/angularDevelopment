export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }
  /*
    Increases the Votes
  */
  voteUp(): void {
    this.votes += 1;
  }
  /*
    Decreases the Votes
  */
  voteDown(): void {
    this.votes = (this.votes > 0) ? this.votes - 1 : 0;
  }
  /*
    Extracts the Domain and path from a url/link
  */
  domain(): string {
    try {
      const domainAndPath: string = this.link.split('//')[1];
      return domainAndPath.split('/')[0];
    } catch (err) {
      return null;
    }
  }
}
