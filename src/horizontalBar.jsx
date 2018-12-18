import React, { Component } from "react";

export default class HorizontalBar extends Component {
  constructor(props) {
    super(props);
    this.renderBars = this.renderBars.bind(this);
  }

  renderBars() {
    const listBars = [];
    let widthTotal = 0;
    this.props.data.forEach(bar => {
      widthTotal = widthTotal + bar.value;
    });
    let oldWidth = 0;
    let newWidth = 0;
    this.props.data.forEach(bar => {
      oldWidth = newWidth;
      newWidth = (bar.value * 100) / widthTotal;
      listBars.push(
        <g>
          <rect
            width={`${newWidth + 0.1}%`}
            height={this.props.height}
            style={{ fill: bar.color }}
            x={`${oldWidth}%`}
          />
          <text
            style={{ fill: "white", fontSize: "12px" }}
            x={`${oldWidth + 1}%`}
            y="50%"
            dy="0.35em"
          >
            {bar.name}: {bar.value}
          </text>
          <title>{`${bar.name}: ${bar.value}`}</title>
        </g>
      );
    });
    return listBars;
  }

  render() {
    return (
      <svg width="100%" height={this.props.height}>
        {this.renderBars()}
      </svg>
    );
  }
}
