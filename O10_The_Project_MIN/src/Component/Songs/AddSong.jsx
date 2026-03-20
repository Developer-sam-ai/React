import { useState, useRef } from 'react';

export default function AddSong({ onAddSong }) {
  // 1. Basic song info
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  
  // 2. The Toggle State ('url' or 'file')
  const [inputType, setInputType] = useState('url'); 
  
  // 3. States for the two different input methods
  const [urlValue, setUrlValue] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('audio/')) {
      setSelectedFile(file);
    } else {
      alert('Please select a valid audio file!');
      e.target.value = null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!title || !artist) {
      alert("Please fill in the title and artist!");
      return;
    }

    let finalUrl = '';

    // Check which mode we are in and grab the correct audio source
    if (inputType === 'url') {
      if (!urlValue) {
        alert("Please paste an audio URL!");
        return;
      }
      finalUrl = urlValue; // Use the pasted link
    } else {
      if (!selectedFile) {
        alert("Please select a file to upload!");
        return;
      }
      finalUrl = URL.createObjectURL(selectedFile); // Create the local temporary link
    }

    // Pass the final data up to the playlist
    onAddSong({ title, artist, url: finalUrl });

    // Reset everything
    setTitle('');
    setArtist('');
    setUrlValue('');
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div style={{ backgroundColor: '#181818', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#fff' }}>Add a New Track</h3>
        
        {/* THE TOGGLE BUTTONS */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={() => setInputType('url')}
            style={{
              backgroundColor: inputType === 'url' ? '#1db954' : 'transparent',
              color: inputType === 'url' ? 'black' : '#b3b3b3',
              border: '1px solid #1db954', padding: '5px 15px', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold'
            }}>
            Web Link
          </button>
          <button 
            onClick={() => setInputType('file')}
            style={{
              backgroundColor: inputType === 'file' ? '#1db954' : 'transparent',
              color: inputType === 'file' ? 'black' : '#b3b3b3',
              border: '1px solid #1db954', padding: '5px 15px', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold'
            }}>
            Local File
          </button>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', alignItems: 'center' }}>
        <input
          type="text" placeholder="Song Title" value={title} onChange={(e) => setTitle(e.target.value)}
          style={{ flex: 1, padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#333', color: 'white' }}
        />
        
        <input
          type="text" placeholder="Artist Name" value={artist} onChange={(e) => setArtist(e.target.value)}
          style={{ flex: 1, padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#333', color: 'white' }}
        />
        
        {/* CONDITIONAL RENDERING: Show the correct input based on the toggle state */}
        {inputType === 'url' ? (
          <input
            type="text" placeholder="Paste MP3 URL here..." value={urlValue} onChange={(e) => setUrlValue(e.target.value)}
            style={{ flex: 1, padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#333', color: 'white' }}
          />
        ) : (
          <input
            type="file" accept="audio/*" ref={fileInputRef} onChange={handleFileChange}
            style={{ flex: 1, color: '#b3b3b3' }}
          />
        )}
        
        <button 
          type="submit"
          style={{
            backgroundColor: '#1db954', color: 'black', border: 'none',
            padding: '10px 25px', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer'
          }}>
          Add to Playlist
        </button>
      </form>
    </div>
  );
}