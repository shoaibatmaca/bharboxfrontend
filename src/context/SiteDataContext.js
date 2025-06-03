// src/context/SiteDataContext.js
import { createContext, useContext, useEffect, useState } from "react";

const SiteDataContext = createContext();

export function SiteDataProvider({ children }) {
  const [siteData, setSiteData] = useState({
    // Website content sections
    home: {},
    about: {},
    services: {},

    // User authentication
    auth: {
      password: "",
      access: null,
      refresh: null,
      user: null,
    },

    // Contact information
    contact: {
      email: "",
      marketingOptIn: true,
    },

    // Toy preferences
    toys: {
      toyType: "", // 'plush' or 'durable'
      plushToy: "", // 'plush' or 'durable' (from PlushToys component)
    },

    // Dog information
    dog: {
      name: "",
      gender: "", // 'boy' or 'girl'
      size: "", // 'small', 'medium', 'large'
      // breed: "",
      primaryBreed: "",
      secondaryBreed: "",
      adoptionDate: "", // MM/YYYY format
      allergies: [], // array of allergies or ['None']
      image: null,
      imageFile: null,
    },
  });

  useEffect(() => {
    console.log("🌐 Site Data Updated:", siteData);
  }, [siteData]);

  const updateSiteData = (section, fields) => {
    setSiteData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...fields,
      },
    }));
  };

  // Helper function to reset all data (useful for logout)
  const resetSiteData = () => {
    setSiteData({
      home: {},
      about: {},
      services: {},
      auth: {
        password: "",
        access: null,
        refresh: null,
        user: null,
      },
      contact: {
        email: "",
        marketingOptIn: true,
      },
      toys: {
        toyType: "",
        plushToy: "",
      },
      // Dog information
      dog: {
        name: "",
        gender: "",
        size: "",
        primaryBreed: "", // ✅ NEW: replaces "breed"
        secondaryBreed: "", // ✅ NEW: second optional breed
        adoptionDate: "",
        allergies: [],
        image: null,
        imageFile: null,
      },
    });
  };

  // Helper function to check if dog data is complete
  const isDogDataComplete = () => {
    const { dog, toys } = siteData;
    return !!(dog.name && dog.gender && dog.size && toys.toyType);
  };

  return (
    <SiteDataContext.Provider
      value={{
        siteData,
        updateSiteData,
        resetSiteData,
        isDogDataComplete,
      }}
    >
      {children}
    </SiteDataContext.Provider>
  );
}

export function useSiteData() {
  const context = useContext(SiteDataContext);
  if (!context) {
    throw new Error("useSiteData must be used within a SiteDataProvider");
  }
  return context;
}
