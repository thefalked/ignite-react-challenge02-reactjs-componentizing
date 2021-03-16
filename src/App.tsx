import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  const [movies, setMovies] = useState<MovieProps[]>([]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar 
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        setMovies={setMovies}
      />

      <Content
        selectedGenre={selectedGenre}
        movies={movies}
      />
    </div>
  )
}