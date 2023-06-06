import { useState } from "react";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const LineGraph = (props) => {
  const { productData } = props;
  const [product, setProduct] = useState(productData);

  const [options, setOptions] = useState({
    chart: {
      toolbar: {
        show: false,
      },
      parentHeightOffset: 0,
    },
    xaxis: {
      title: {
        style: {
          fontFamily: "@apply font-roboto",
          fontWeight: "font-semibold",
          fontSize: "text-sm",
        },
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    grid: {
      show: false,
    },
  });

  const series = product.map((item) => ({
    name: item.name,
    data: item.data,
  }));

  const colors = product.map((item) => item.color);

  const chartOptions = {
    ...options,
    colors: colors,
    stroke: {
      width: 2,
    },
    xaxis: {
      ...options.xaxis,
      labels: {
        ...options.xaxis.labels,
        style: {
          fontFamily: "@apply font-roboto",
          fontSize: "16px",
        },
      },
    },
    yaxis: {
      labels: {
        ...options.xaxis.labels,
        offsetX: -15,
        style: {
          fontFamily: "@apply font-roboto",
          fontSize: "16px",
        },
      },
    },
  };

  return (
    <div>
      {typeof window !== "undefined" && (
        <Chart
          type="line"
          height={194}
          series={series}
          options={chartOptions}
        />
      )}
    </div>
  );
};

export default LineGraph;
