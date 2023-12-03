import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const LinearRegressionGraph = () => {
  const svgRef = useRef();
  const data = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 7 },
    { x: 5, y: 8 },
    // Add more data points as needed
  ];

  useEffect(() => {
    // Set the dimensions and margins of the graph
    const margin = { top: 10, right: 30, bottom: 30, left: 60 },
      width = 460 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    // Append the SVG object to the ref element
    const svg = d3
      .select(svgRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Add X axis
    const x = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.x)])
      .range([0, width]);
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));

    // Add Y axis
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.y)])
      .range([height, 0]);
    svg.append("g").call(d3.axisLeft(y));

    // Add dots
    svg
      .append("g")
      .selectAll("dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d) => x(d.x))
      .attr("cy", (d) => y(d.y))
      .attr("r", 4)
      .style("fill", "#69b3a2");

    // Compute the linear regression
    const sum = (array, fn) => array.reduce((a, b) => a + fn(b), 0);
    const meanX = sum(data, (d) => d.x) / data.length;
    const meanY = sum(data, (d) => d.y) / data.length;
    const b1 =
      sum(data, (d) => (d.x - meanX) * (d.y - meanY)) /
      sum(data, (d) => Math.pow(d.x - meanX, 2));
    const b0 = meanY - b1 * meanX;

    // Add the regression line
    svg
      .append("line")
      .attr("x1", x(0))
      .attr("x2", x(d3.max(data, (d) => d.x)))
      .attr("y1", y(b0))
      .attr("y2", y(b0 + b1 * d3.max(data, (d) => d.x)))
      .attr("stroke", "blue");
  }, []);

  return <div ref={svgRef}></div>;
};

export default LinearRegressionGraph;
