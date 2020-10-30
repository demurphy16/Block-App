import api from "./apiConfig";

export const getAnnouncements = async () => {
  try {
    const response = await api.get("/announcements");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAnnouncement = async (id) => {
  try {
    const response = await api.get(`/announcements/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createAnnouncement = async (announcement) => {
  try {
    const response = await api.post("/announcements", announcement);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateAnnouncement = async (id, announcement) => {
  try {
    const response = await api.put(`/announcements/${id}`, announcement);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteAnnouncement = async (id) => {
  try {
    const response = await api.delete(`/announcements/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};