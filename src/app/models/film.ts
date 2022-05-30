export class Film {

    title!: string;
    release_date!: string;
    episode_id!: number;
    opening_crawl!: string;
    director!: string;
    producer!: string;

    constructor(paramTitle: string, paramReleaseDate: string, paramEpisode_id: number, paramOpening_crawl: string, paramDirector: string, paramProducer: string) {
        this.title = paramTitle;
        this.release_date = paramReleaseDate;
        this.episode_id = paramEpisode_id;
        this.opening_crawl = paramOpening_crawl;
        this.director = paramDirector;
        this.producer = paramProducer;

    }
}