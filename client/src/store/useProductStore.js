import { axiosInstance } from "../services/axios.js";
import { create } from "zustand";

// export const useProductStore = create((set, get) => ({
//   products: [],
//   reviews: [],
//   loading: false,
//   error: null,

//   fetchProducts: async (query = "") => {
//     try {
//       set({ loading: true, error: null });

//       const res = await axiosInstance.get(`/products${query}`);

//       set({
//         products: res.data,
//         loading: false,
//       });

//     } catch (err) {
//       set({
//         error: "Failed to fetch products",
//         loading: false,
//       });
//     }
//   },
//   fetchProductById: async (id) => {
//     try {
//       set({ loading: true, error: null });
//       const res = await axiosInstance.get(`/products/${id}`);
//       set({
//         products: [res.data],
//         loading: false,
//       });
//     } catch (err) {
//       set({
//         error: "Failed to fetch product",
//         loading: false,
//       });
//     }
//   },
//   fetchProductReviews: async (id) => {
//     try {
//       set({ loading: true, error: null});
//       const res = await axiosInstance.get(`/products/${id}/reviews`);
//       set({
//         reviews: [res.data]
//       })
//     } catch (error) {
//       set({
//         error: "Fail to fetch reviews",
//         loading: false,
//       });
      
//     }
//   }
// }));


export const useProductStore = create((set) => ({
  products: [],
  product: null,
  reviews: [],
  loading: false,
  error: null,

  fetchProducts: async (query = "") => {
    try {
      set({ loading: true, error: null });

      const res = await axiosInstance.get(`/products${query}`);

      set({
        products: res.data,
        loading: false,
      });
    } catch {
      set({ error: "Failed to fetch products", loading: false });
    }
  },

  fetchProductById: async (id) => {
    try {
      set({ loading: true, error: null });

      const res = await axiosInstance.get(`/products/${id}`);

      set({
        product: res.data,
        loading: false,
      });
    } catch {
      set({ error: "Failed to fetch product", loading: false });
    }
  },

  fetchProductReviews: async (id) => {
    try {
      const res = await axiosInstance.get(`/products/${id}/reviews`);

      set({
        reviews: res.data,
      });
    } catch {
      set({ error: "Failed to fetch reviews" });
    }
  },
}));
