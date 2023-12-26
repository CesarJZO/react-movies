export interface movie {
  id: number;
  title: string;
  poster: string;
}

export interface landingPageDTO {
  inTheaters?: movie[];
  upcomingReleases?: movie[];
}

export interface movieCreationDTO {
  title: string;
  inTheaters: boolean;
  trailer: string;
  releaseDate?: Date;
  poster?: File;
  posterURL?: string;
  genresIds?: number[];
  theatersIds?: number[];
  actors?: actorMovieDTO[];
}
