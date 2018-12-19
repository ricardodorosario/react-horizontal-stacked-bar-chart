import React, { Component } from "react";
import PropTypes from "prop-types";

export default class HorizontalBar extends Component {
  constructor(props) {
    super(props);
    this.renderBars = this.renderBars.bind(this);
  }

  randomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
  }

  renderBars() {
    const listBars = [];
    let widthTotal = 0;
    let oldWidth = 0;
    let newWidth = 0;

    this.props.data.forEach(bar => {
      widthTotal = widthTotal + bar.value;
    });

    listBars.push(
      this.props.data.map((bar, index) => {
        oldWidth = oldWidth + newWidth;
        newWidth = (bar.value * 100) / widthTotal;
        return (
          <React.Fragment key={index}>
            <g>
              <rect
                width={`${newWidth + 0.1}%`}
                height={this.props.height}
                style={{
                  fill: bar.color || this.randomColor()
                }}
                x={`${oldWidth}%`}
              />
              {this.props.legend && (
                <text
                  style={{ fill: this.props.fontColor, fontSize: "90%" }}
                  x={`${oldWidth + 1}%`}
                  y="50%"
                  dy="0.35em"
                >
                  {bar.name}
                  {bar.name ? ": " : ""}
                  {bar.description || bar.value || "1"}
                </text>
              )}
              <title>{`${bar.name || ""}${
                bar.name ? ": " : ""
              }${bar.description || bar.value || "1"}`}</title>
            </g>
          </React.Fragment>
        );
      })
    );
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

HorizontalBar.propTypes = {
  height: PropTypes.number,
  data: PropTypes.array.isRequired,
  legend: PropTypes.bool,
  fontColor: PropTypes.string
};

HorizontalBar.defaultProps = {
  height: 30,
  legend: false,
  fontColor: "white"
};
