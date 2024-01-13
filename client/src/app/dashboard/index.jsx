import { Link } from "react-router-dom";
import { ResponsiveLine } from "@nivo/line";
import { ResponsivePie } from "@nivo/pie";
import Avatar from "../../assets/Rectangle 10.png";
import CEOImage from "../../assets/media.png";

import { Table } from "../../components/Table";
import { Pagination } from "../../components/Pagination";
import { useEffect } from "react";
import { useData } from "../../context/DataContext";

import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { useApp } from "../../context/AppContext";

const socialLinks = [
  { icon: <FaFacebook />, to: null },
  { icon: <FaInstagram />, to: null },
  { icon: <FaTwitter />, to: null },
];

const greetings = [
  { text: "Good Morning", emoji: "🌅" },
  { text: "Good Afternoon", emoji: "☀️" },
  { text: "Good Evening", emoji: "🌙" },
];

const Dashboard = () => {
  const { toggleNav } = useApp();

  const {
    getLineChartData,
    lineChartData,
    getPieChartData,
    pieChartData,
    getTableData,
    tableData,
  } = useData();

  useEffect(() => {
    getPieChartData();
    getLineChartData();
    getTableData();
  }, []);

  const greeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) return greetings[0];
    else if (currentHour >= 12 && currentHour < 18) return greetings[1];
    else return greetings[2];
  };

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
            {greeting().text} <span>{greeting().emoji}</span>{" "}
          </h2>
        </div>
        <div className="bg-white flex items-center justify-between gap-4 p-1 lg:p-4 rounded-xl">
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
        <section className="bg-white shadow-md rounded-xl w-full lg:w-2/3 h-[300px] lg:h-[460px]">
          {/* LINE CHART */}
          <ResponsiveLine
            data={lineChartData}
            margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
            xScale={{ type: "point" }}
            colors={["#a6cee3"]}
            yScale={{
              type: "linear",
              min: "0",
              max: "auto",
              stacked: true,
              reverse: false,
              // tickValues: [5, 10, 15, 20], // tick values are corresponding to data
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
        <section className="bg-white shadow-md rounded-xl w-full lg:w-1/3 h-[400px] lg:h-[460px]">
          {/* PIE CHART */}
          <ResponsivePie
            data={pieChartData}
            margin={{ top: 40, right: 50, bottom: 170, left: 50 }}
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
                symbolShape: "circle",
                itemDirection: "left-to-right",
              },
            ]}
          />
        </section>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {/*  */}
        <section className="flex flex-col items-center w-full lg:w-3/4">
          <Table data={tableData} />
          <Pagination />
        </section>
        <section className="w-full lg:w-1/4">
          {/* PROFILE CARD */}
          <div className="flex lg:block items-center justify-center">
            <div className="max-w-sm max-h-fit rounded-xl overflow-hidden bg-white shadow-md">
              <img className="w-full" src={CEOImage} alt="" />
              <div className="px-6 py-4 text-center">
                <div className="font-bold text-xl mb-2">John Doe</div>
                <p className="text-gray-700 text-base">CEO</p>
                <div className="flex items-center justify-center gap-4 p-4">
                  {socialLinks?.map(({ icon, to }, index) => (
                    <Link
                      to={to}
                      key={index}
                      className="text-2xl text-[#23a6f0]"
                    >
                      {icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
