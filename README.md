[![version](https://img.shields.io/npm/v/react-horizontal-stacked-bar-chart.svg?style=flat-square)](https://www.npmjs.com/package/react-horizontal-stacked-bar-chart)
[![release](https://img.shields.io/github/release/ricardodorosario/react-horizontal-stacked-bar-chart.svg?style=flat-square)](https://github.com/ricardodorosario/react-horizontal-stacked-bar-chart)
[![downloads](https://img.shields.io/npm/dt/react-horizontal-stacked-bar-chart.svg?style=flat-square)](https://npm-stat.com/charts.html?package=react-horizontal-stacked-bar-chart&from=2018-12-17)
[![license](https://img.shields.io/github/license/ricardodorosario/react-horizontal-stacked-bar-chart.svg?style=flat-square)](http://opensource.org/licenses/MIT)

# react-horizontal-stacked-bar-chart

React horizontal stacked bar responsive chart component.

![HSBar Example](https://github.com/ricardodorosario/react-horizontal-stacked-bar-chart/blob/master/images/example.png)

## Example

[![HSBar](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/9k2jqjr9y)

## Installation via NPM

```bash
npm install react-horizontal-stacked-bar-chart --save
```

## Usage

```js
import HSBar from "react-horizontal-stacked-bar-chart";
```

Simple

```js
<HSBar data={[{ value: 10 }, { value: 20 }]} />
```

Complete

```js
<HSBar
  height={50}
  showTextIn
  showTextUp
  showTextDown
  outlineWidth: {0.5},
  outlineColor: "black"
  id="new_id"
  fontColor="rgb(50,20,100)"
  data={[
    {
      name: "To pay",
      value: 80,
      description: "U$80,00",
      color: "red"
    },
    {
      name: "Paid",
      value: 200,
      description: "U$200,00",
      color: "rgb(150,150,220)"
    }
  ]}
  onClick={e => console.log(e.bar);}
/>
```

### Properties

- data: PropTypes.array.isRequired
- id: PropTypes.string
- height: PropTypes.number
- showTextWithValue: PropTypes.bool
- showTextIn: PropTypes.bool
- showTextUp: PropTypes.bool
- showTextDown: PropTypes.bool
- showValueIn: PropTypes.bool
- showValueUp: PropTypes.bool
- showValueDown: PropTypes.bool
- fontColor: PropTypes.string
- onClick: PropTypes.func
- outlineWidth: PropTypes.number
- outlineColor: PropTypes.string

### Default Properties

- height: 30
- showTextWithValue: true
- showTextIn: false
- showTextUp: false
- showTextDown: false
- showValueIn: false
- showValueUp: false
- showValueDown: false
- fontColor: "white"
- outlineWidth: 0
- outlineColor: "black"
- id: "hsbar"

### Data object list

- value: Required
- name: Optional
- description: Optional
- color: Optional
