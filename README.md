[![version](https://img.shields.io/npm/v/react-horizontal-stacked-bar-chart.svg?style=flat-square)](https://www.npmjs.com/package/react-horizontal-stacked-bar-chart)
[![downloads](https://img.shields.io/npm/dt/react-horizontal-stacked-bar-chart.svg?style=flat-square)](https://npm-stat.com/charts.html?package=react-horizontal-stacked-bar-chart&from=2018-12-17)
[![git-stars](https://img.shields.io/github/stars/ricardodorosario/react-horizontal-stacked-bar-chart.svg?style=flat-square)](https://github.com/ricardodorosario/react-horizontal-stacked-bar-chart)
[![license](https://img.shields.io/github/license/ricardodorosario/react-horizontal-stacked-bar-chart.svg?style=flat-square)](http://opensource.org/licenses/MIT)

# react-horizontal-stacked-bar-chart

React horizontal stacked bar responsive chart component

## Installation via NPM

```bash
npm install react-horizontal-stacked-bar-chart --save
```

## Usage

```js
import HSBar from "react-horizontal-stacked-bar-chart";

<HSBar
  height={30}
  data={[
    { name: "Cons", value: 10000, color: "red" },
    { name: "Pros", value: 5000, color: "blue" }
  ]}
/>;
```

### Properties

- data: PropTypes.array.isRequired,
- height: PropTypes.number

### Data object list

- name: Required
- value: Required
- color: Required
