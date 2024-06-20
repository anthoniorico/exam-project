/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
//import { fetchRepositories } from '../api/github';

const Portfolio = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
 // const [loading, setLoading] = useState(true);
 // const [error, setError] = useState(null);
 

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/anthoniorico/repos`, {       
        params: {
          page: page,
          per_page: 10,
          q: search,
          sort: 'updated',
          direction: 'desc'
        }
      });
        setRepos(response.data);
      } catch (error) {
       console.error('Error fetching repositories:', error);
      }      
    };
    fetchRepos();
  }, [page, search]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Github Repositories</h1>
      <div className="mb-4">
        <input 
        type="text"
        placeholder="Search Repositories"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border rounded mr-2"
        />
         <input 
        type="text"
        placeholder="Filter Repositories"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="p-2 border rounded mr-2"
        />
        <button onClick={() => setPage(page -1)} disabled={page === 1} className="bg-gray-200 text-gray-800 px-3 py-1 rounded mr-2">Previous</button>
        <button onClick={() => setPage(page + 1)} className="bg-gray-200 text-gray-800 px-3 py-1 rounded">Next</button>
      </div>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
          </li>          
        ))}
      </ul>  
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <Link to={`/repo/${repo.name}`} className="text-blue-500">{repo.name}</Link>
          </li>          
        ))}
      </ul>    
    </div>
  );
}

export default Portfolio;