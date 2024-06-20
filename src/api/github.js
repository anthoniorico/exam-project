import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';
const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const githubApi = axios.create({
    baseURL: GITHUB_API_BASE_URL,
    headers: {
        Authorization: `token ${TOKEN}`,
    },
});

export const fetchRepos = async (username) => {
    try {
        const response = await githubApi.get(`/users/${username}/repos`);
        return response.data;
    } catch (error) {
        console.error('Error fetching repositories:', error);
        throw error;
    }
    };

    export const fetchRepoDetails = async (username, repoName) => {
        try {
            const response = await githubApi.get(`/repos/${username}/${repoName}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching repositories details:', error);
            throw error;
        }
        };
    
        export const createRepo = async (repoData) => {
            try {
                const response = await githubApi.post('/user/repos', repoData);
                return response.data;
            } catch (error) {
                console.error('Error creating repositories:', error);
                throw error;
            }
            };

            export const updateRepo = async (username, repoName, repoData) => {
                try {
                    const response = await githubApi.patch(`/repos/${username}/${repoName}`, repoData);
                    return response.data;
                } catch (error) {
                    console.error('Error updating repositories:', error);
                    throw error;
                }
                };

                
            export const DeleteRepo = async (username, repoName) => {
                try {
                    const response = await githubApi.delete(`/repos/${username}/${repoName}`);
                    return response.data;
                } catch (error) {
                    console.error('Error deleting repository:', error);
                    throw error;
                }
                };
    
