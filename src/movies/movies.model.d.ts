export interface movie {
  id: number;
  title: string;
  poster: string;
}

export interface landingPageDTO {
  inTheaters?: movie[];
  upcomingReleases?: movie[];
}
