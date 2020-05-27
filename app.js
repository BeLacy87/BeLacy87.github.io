var toolTip = d3.tip()
    .attr("class", "d3-tip")
    .offset([80, -60])
    .html(function(d) {
      return (`${d.state}<br>${ylabel}${d[chosenYAxis]}<br>${xlabel}${d[chosenXAxis]}`);
    });

    textGroup.call(toolTip);
      textGroup
      .on("mouseover", function(data) {
          toolTip.show(data);
        })
      .on("mouseout", function(data) {
            toolTip.hide(data);
          });
    return textGroup;


