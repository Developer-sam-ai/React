import { useState, useContext, useEffect } from 'react';
import { PlayerContext } from './PlayerContext'; 
import AddSong from './AddSong';

export default function Songs() {
  // 1. Hook into the global player state
  const { setCurrentSong } = useContext(PlayerContext); 

  // 2. Initialize state from LocalStorage
  const [songs, setSongs] = useState(() => {
    const savedSongs = localStorage.getItem('mySpotifyPlaylist');
    if (savedSongs) {
      return JSON.parse(savedSongs); // Load saved songs if they exist
    } else {
      // Otherwise, load default test tracks
      return [
        { id: 1, title: 'Sample Track 1', artist: 'Unknown', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
        { id: 2, title: 'Sample Track 2', artist: 'Unknown', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' }
      ];
    }
  });

  // 3. Save to LocalStorage automatically whenever the 'songs' array changes
  useEffect(() => {
    localStorage.setItem('mySpotifyPlaylist', JSON.stringify(songs));
  }, [songs]);

  // Add a new song
  const handleAddSong = (newSong) => {
    const songWithId = { ...newSong, id: Date.now() }; // Temporary ID generator
    setSongs([...songs, songWithId]);
  };

  // Delete a song
  const handleDelete = (id) => {
    setSongs(songs.filter(song => song.id !== id));
  };

  // The UI
  return (
    <div style={{ padding: '30px', color: 'white', backgroundColor: '#121212', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 'bold' }}>Your Library</h1>
      
      <AddSong onAddSong={handleAddSong} />
      
      <div style={{ marginTop: '50px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', borderBottom: '1px solid #282828', paddingBottom: '10px' }}>
          Playlist
        </h2>
        
        {songs.length === 0 ? (
          <p style={{ color: '#b3b3b3' }}>No songs yet. Add your first track up top!</p>
        ) : (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {songs.map((song) => (
              <li 
                key={song.id} 
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '15px 20px', 
                  backgroundColor: '#181818',
                  marginBottom: '10px',
                  borderRadius: '8px',
                }}
              >
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#fff' }}>{song.title}</h3>
                  <p style={{ margin: '5px 0 0', color: '#b3b3b3', fontSize: '0.9rem' }}>{song.artist}</p>
                </div>
                
                <div style={{ display: 'flex', gap: '15px' }}>
                  <button 
                    onClick={() => setCurrentSong(song)}
                    style={{
                      backgroundColor: '#1db954',
                      color: 'black',
                      border: 'none',
                      padding: '8px 20px',
                      borderRadius: '20px',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}>
                    Play
                  </button>
                  <button 
                    onClick={() => handleDelete(song.id)}
                    style={{
                      backgroundColor: 'transparent',
                      color: '#b3b3b3',
                      border: '1px solid #b3b3b3',
                      padding: '8px 20px',
                      borderRadius: '20px',
                      cursor: 'pointer'
                    }}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}