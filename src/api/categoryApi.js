import axios from "axios";

const API_URL =
    "https://babjibestpipes.com/royaldiamond/mobileapis/fetchCategories.php";

export const fetchCategories = async () => {
    try {
        const response = await axios.post(API_URL);

        if (response.data.status) {
            return response.data.data;
        }

        return [];
    } catch (error) {
        console.error("Category Fetch Error:", error);
        return [];
    }
};