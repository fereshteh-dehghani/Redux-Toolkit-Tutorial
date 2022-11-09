import { createSlice, createAsyncThunk } from "@redux/toolkit";
import API from '../API';

export const createTour = createAsyncThunk(
    'tour/createTour',
    async ({ updatedTourData, navigate, toast }, { rejectwithValue }) => {
        try {
            const response = await API.post('/tour', updatedTourData);
            toast.success("added successfully");
            navigate('/dashboard');
            return response.data;
        } catch (err) {
            return rejectwithValue(err.response.data);
        }

    }
);

export const getTourByUser = createAsyncThunk(
    'tour/getTourByUser',
    async (userId, { rejectwithValue }) => {
        try {
            const response = await API.get(`/tour/userTours/${userId}`);
            return response.data;
        } catch (err) {
            return rejectwithValue(err.response.data);
        }
    }
);

export const updateTour = createAsyncThunk(
    'tour/updateTour',
    async({id,updatedTourData,toast,navigate},{rejectwithValue})=>{
        try{
            const response = await API.patch(`/tour/${id}`,updatedTourData);
            toast.success('tour updated successfully');
            navigate("/dashboard");
            return response.data;
        }catch(err){
            return rejectwithValue(err.response.data)
        }
    }
)