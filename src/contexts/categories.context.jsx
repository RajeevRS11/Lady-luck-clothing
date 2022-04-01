import { createContext, useState, useEffect } from "react";
// import { addCollectionAndDocuments } from "../utils/firebase.utils";

import { getCategoriesAndDocuments } from "../utils/firebase.utils";

// Adding value to database
// import PRODUCTS from '../shop-data.js';

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setCategoriesMap(categoryMap);

        }
        getCategoriesMap();
    }, [])
// Every time it runs add the data value in database
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', PRODUCTS);
    // }, [])

    const value = { categoriesMap };
    return (
        <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
    );
};