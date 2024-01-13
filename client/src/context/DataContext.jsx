import { createContext, useContext, useState } from "react";
import { instance } from "../axios/instance";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [lineChartData, setLineChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);

  const getLineChartData = async () => {
    try {
      const response = await instance.get("/api/graph");

      const updatedLineChartData = [
        { id: "month", color: "#ffffff", data: response.data },
      ];

      setLineChartData(updatedLineChartData);
    } catch (err) {
      console.error(err);
    }
  };

  const getPieChartData = async () => {
    try {
      const response = await instance.get("/api/pie-chart");

      const updatedPieChartData = response.data?.map((data) => ({
        id: data.label,
        ...data,
      }));

      setPieChartData(updatedPieChartData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <DataContext.Provider
      value={{
        getLineChartData,
        lineChartData,
        getPieChartData,
        pieChartData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
