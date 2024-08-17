import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://secure-badlands-09295-6adb48c7cd0c.herokuapp.com/api/v1', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  // Users API
  getUsers() {
    return apiClient.get('/users');
  },
  getUser(id) {
    return apiClient.get(`/users/${id}`);
  },
  createUser(data) {
    return apiClient.post('/users', data);
  },
  updateUser(id, data) {
    return apiClient.put(`/users/${id}`, data);
  },
  deleteUser(id) {
    return apiClient.delete(`/users/${id}`);
  },

  // Merchants API
  getMerchants() {
    return apiClient.get('/merchants');
  },
  getMerchant(id) {
    return apiClient.get(`/merchants/${id}`);
  },
  createMerchant(data) {
    return apiClient.post('/merchants', data);
  },
  updateMerchant(id, data) {
    return apiClient.put(`/merchants/${id}`, data);
  },
  deleteMerchant(id) {
    return apiClient.delete(`/merchants/${id}`);
  },

  // Branches API
  getBranches() {
    return apiClient.get('/branches');
  },
  getBranch(id) {
    return apiClient.get(`/branches/${id}`);
  },
  createBranch(data) {
    return apiClient.post('/branches', data);
  },
  updateBranch(id, data) {
    return apiClient.put(`/branches/${id}`, data);
  },
  deleteBranch(id) {
    return apiClient.delete(`/branches/${id}`);
  },
};
