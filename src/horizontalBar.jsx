import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

export default class HorizontalBar extends Component {
  constructor(props) {
    super(props);
    //
    this.state = {
      listBars: [],
      data: this.props.data
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (!_.isEqual(this.props, prevProps)) {
      this.setState(state => ({
        ...state,
        listBars: this.getListBarWithOtherParameters(),
        data: this.props.data
      }));
    }
  }

  componentDidMount() {
    this.setState(state => ({
      ...state,
      listBars: this.getListBarWithOtherParameters(),
      data: this.props.data
    }));
  }

  /**
   * Make the calculus of total width
   */
  calcWidthTotal() {
    let widthTotal = 0;
    this.props.data.forEach(bar => {
      widthTotal = widthTotal + bar.value;
    });
    return widthTotal;
  }

  /**
   * Returns the same list of bars with position and barWidth
   */
  getListBarWithOtherParameters() {
    const widthTotal = this.calcWidthTotal();
    let position = 0;
    let barWidth = 0;
    const listBars = this.props.data.map(bar => {
      position = position + barWidth;
      barWidth = (bar.value * 100) / widthTotal;
      bar = Object.assign({ position: position, barWidth: barWidth }, bar);
      return bar;
    });
    return listBars;
  }

  /**
   * Returns a new calculated rgb color
   */
  randomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
  }

  /**
   * Returns a list of texts of the bars into a div component
   */
  getListTextBar(showTextInsteadValue) {
    const { showTextWithValue } = this.props;
    const listText = this.state.listBars.map((bar, index) => {
      return (
        <div
          key={index}
          style={{
            position: "relative",
            float: "left",
            width: `${bar.barWidth}%`,
            fontSize: "90%"
          }}
        >
          {showTextInsteadValue && bar.name}
          {showTextInsteadValue && bar.name && showTextWithValue ? ": " : ""}
          {(!showTextInsteadValue || showTextWithValue) &&
            (bar.description || bar.value || "")}
        </div>
      );
    });
    return listText;
  }

  renderBars() {
    const listBars = [];
    const { showTextWithValue, showTextIn, showValueIn } = this.props;

    listBars.push(
      this.state.listBars.map((bar, index) => {
        return (
          <g key={index}>
            <rect
              width={`${bar.barWidth + 0.1}%`}
              height={this.props.height}
              style={{
                fill: bar.color || this.randomColor()
              }}
              x={`${bar.position}%`}
            />
            {(this.props.showTextIn || this.props.showValueIn) && (
              <text
                style={{ fill: this.props.fontColor, fontSize: "90%" }}
                x={`${bar.position + 1}%`}
                y="50%"
                dy="0.35em"
              >
                {showTextIn && bar.name}
                {bar.name && showTextIn ? ": " : ""}
                {(showValueIn || showTextWithValue) &&
                  (bar.description || bar.value || "1")}
              </text>
            )}
            <title>{`${bar.name || ""}${
              bar.name ? ": " : ""
            }${bar.description || bar.value || "1"}`}</title>
          </g>
        );
      })
    );
    return listBars;
  }

  renderLabel(showTextInsteadValue) {
    return (
      <div
        id={`${this.props.id}_text`}
        style={{
          textAlign: "left",
          display: "flex",
          width: "100%"
        }}
      >
        {this.getListTextBar(showTextInsteadValue)}
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        {(this.props.showTextUp || this.props.showValueUp) &&
          this.renderLabel(this.props.showTextUp)}
        <svg id={this.props.id} width="100%" height={this.props.height}>
          {this.renderBars()}
        </svg>
        {(this.props.showTextDown || this.props.showValueDown) &&
          this.renderLabel(this.props.showTextDown)}
      </React.Fragment>
    );
  }
}

HorizontalBar.propTypes = {
  data: PropTypes.array.isRequired,
  id: PropTypes.string,
  height: PropTypes.number,
  showTextIn: PropTypes.bool,
  showTextUp: PropTypes.bool,
  showTextDown: PropTypes.bool,
  showTextWithValue: PropTypes.bool,
  showValueIn: PropTypes.bool,
  showValueUp: PropTypes.bool,
  showValueDown: PropTypes.bool,
  fontColor: PropTypes.string
};

HorizontalBar.defaultProps = {
  height: 30,
  showTextIn: false,
  showTextUp: false,
  showTextDown: false,
  showTextWithValue: true,
  showValueIn: false,
  showValueUp: false,
  showValueDown: false,
  fontColor: "white",
  id: "hsbar"
};
