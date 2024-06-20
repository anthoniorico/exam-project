/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Modal from './Modal';

const RepoDetails = () => {
    const { name } = useParams();
    const [repo, setRepo] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({});


    const handleCreate = () => {
      setIsModalOpen(true);
      setFormData({});
    };

    const handleUpdate = () => {
      setIsModalOpen(true);
      setFormData({

      });
    };

    const handleSubmit = () => {
      setIsModalOpen(false);
    };

    const handleDelete = () => {

    };
    

    
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repos/anthoniorico/${name}`);            
        setRepo(response.data);
      } catch (error) {
       console.error('Error fetching repository:', error);
      }      
    };
    fetchRepos();
  }, [name]);

  if (!repo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{repo.name}</h1>
      <h1 className="text-2xl font-bold mb-4">Repository Details</h1>
      <p>{repo.description}</p>
      <button onClick={handleCreate}>Create Repositorty</button>
      <button onClick={handleUpdate}>Update Repository</button>
      <button onClick={handleDelete}>Delete Repository</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleSubmit}>
        {/* Render form for/updating repository */}
      </Modal>
      </div> 
  );
}

export default RepoDetails;