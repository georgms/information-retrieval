function drawVectors(vectors, svgElement) {
    const width = getComputedStyle(svgElement).getPropertyValue("width"),
        height = getComputedStyle(svgElement).getPropertyValue("height"),
        scale = 40;
    console.log(width, height);
    const origin = {x: width / 2, y: height / 2};
    const svg = d3.select(svgElement);

    // Arrowhead marker
    svg.append("defs").append("marker")
        .attr("id", "arrow")
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 10).attr("refY", 0)
        .attr("markerWidth", 6).attr("markerHeight", 6)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M0,-5L10,0L0,5")
        .attr("fill", "orange");

    // Axes
    svg.append("line")
        .attr("x1", 0).attr("y1", origin.y)
        .attr("x2", width).attr("y2", origin.y)
        .attr("stroke", "black");
    svg.append("line")
        .attr("x1", origin.x).attr("y1", 0)
        .attr("x2", origin.x).attr("y2", height)
        .attr("stroke", "black");

    // Bind vector data and draw lines
    svg.selectAll("line.vector")
        .data(vectors)
        .enter()
        .append("line")
        .attr("class", "vector")
        .attr("x1", origin.x)
        .attr("y1", origin.y)
        .attr("x2", d => origin.x + d.x * scale)
        .attr("y2", d => origin.y - d.y * scale)
        .attr("stroke", "orange")
        .attr("stroke-width", 2)
        .attr("marker-end", "url(#arrow)");

    // Labels
    svg.selectAll("text.label")
        .data(vectors)
        .enter()
        .append("text")
        .attr("class", "label")
        .attr("x", d => origin.x + d.x * scale + 5)
        .attr("y", d => origin.y - d.y * scale - 5)
        .text(d => d.label)
        .style("font", "14px sans-serif");
}