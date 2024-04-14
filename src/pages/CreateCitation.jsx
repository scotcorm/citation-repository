import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateCitation = () => {
  const [title, setTitle] = useState('');
  const [creator, setCreator] = useState('');
  const [source, setSource] = useState('');
  const [sourceUrl, setSourceUrl] = useState('');
  const [license, setLicense] = useState('Uncategorized');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState('');

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ];

  const CITATION_LICENSES = [
    'CC0',
    'CCBY',
    'CCBYSA',
    'CCBYNC',
    'CCBYNCSA',
    'CCBYND',
    'CCBYNCND',
  ];

  return (
    <section className='create-citation'>
      <div className='container'>
        <h2>Create Citation</h2>
        <p className='form_error-message'>Error Message</p>
        <form className='form create-citation_form'>
          <input
            type='text'
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          <input
            type='text'
            placeholder='Creator'
            value={creator}
            onChange={(e) => setCreator(e.target.value)}
            autoFocus
          />
          <input
            type='text'
            placeholder='Source'
            value={source}
            onChange={(e) => setSource(e.target.value)}
            autoFocus
          />
          <input
            type='text'
            placeholder='Source URL (if different)'
            value={sourceUrl}
            onChange={(e) => setSourceUrl(e.target.value)}
            autoFocus
          />
          <select
            name='license'
            value={license}
            onChange={(e) => setLicense(e.target.value)}
          >
            {CITATION_LICENSES.map((lic) => (
              <option key={lic}>{lic}</option>
            ))}
          </select>
          <ReactQuill
            modules={modules}
            formats={formats}
            value={description}
            onChange={setDescription}
          />
          <input
            type='file'
            onChange={(e) => setThumbnail(e.target.files[0])}
            accept='png, jpg, jpeg'
          />
          <button type='submit' className='btn primary'>
            Create
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateCitation;
