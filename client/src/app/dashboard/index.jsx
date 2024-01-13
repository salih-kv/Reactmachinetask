import { ResponsiveLine } from "@nivo/line";
import { ResponsivePie } from "@nivo/pie";
import Avatar from "../../assets/Rectangle 10.png";

import { useEffect } from "react";
import { useData } from "../../context/DataContext";

import { CgMenuLeft } from "react-icons/cg";
import { useApp } from "../../context/AppContext";

const Dashboard = () => {
  const { toggleNav } = useApp();

  const {
    getLineChartData,
    lineChartData,
    getPieChartData,
    pieChartData,
    getTableData,
  } = useData();

  useEffect(() => {
    getPieChartData();
    getLineChartData();
    getTableData();
  }, []);

  console.log(lineChartData);

  return (
    <div className="lg:py-8 lg:px-16 p-4 bg-[#e8edff] w-full h-full">
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-6">
          <button
            onClick={toggleNav}
            className="active:ring-2 lg:hidden rounded ring-gray-300 p-1 transition-all"
          >
            <CgMenuLeft className="text-2xl" />
          </button>
          <h2 className="text-2xl font-medium">
            Good Morning! <span>🌞</span>{" "}
          </h2>
        </div>
        <div className="bg-white flex items-center justify-between gap-4 p-2 lg:p-4 rounded-xl">
          <article className="text-end hidden lg:block">
            <h6 className="font-medium">John Doe</h6>
            <p>john@doe.com</p>
          </article>
          <div className="">
            <img
              src={Avatar}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
        <section className="bg-white shadow-md rounded-xl w-full lg:w-2/3 h-[460px]">
          {/* LINE CHART */}
          <ResponsiveLine
            data={lineChartData}
            margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "0",
              max: "auto",
              stacked: true,
              reverse: false,
            }}
            curve="natural"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 0,
              tickPadding: 10,
              tickRotation: 0,
            }}
            axisLeft={{
              tickSize: 0,
              tickPadding: 10,
              tickRotation: 0,
            }}
            pointSize={10}
            pointColor="#a6cee3"
            pointBorderWidth={0}
            pointLabelYOffset={-12}
            areaOpacity={0}
          />
        </section>
        <section className="bg-white shadow-md rounded-xl w-full lg:w-1/3 h-[460px]">
          {/* PIE CHART */}
          <ResponsivePie
            data={pieChartData}
            margin={{ top: 50, right: 50, bottom: 180, left: 50 }}
            sortByValue={true}
            activeOuterRadiusOffset={8}
            colors={{ scheme: "greens" }}
            borderWidth={2}
            borderColor="#ffffff"
            enableArcLinkLabels={false}
            enableArcLabels={false}
            legends={[
              {
                anchor: "bottom-left",
                direction: "column",
                justify: false,
                translateX: 0,
                translateY: 150,
                itemWidth: 100,
                itemHeight: 30,
                symbolSize: 16,
                itemDirection: "left-to-right",
              },
            ]}
          />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
