import React from "react";
import { Label } from "recharts";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


// Handling Graph area using inputs from sliders
 
function Graph(props) {

  return (
    <>
      <div className="rightContainer">
        <div className="textForGraph">
          <span className="spanParaGraph">
            After{" "}
            <span className="yearsDisplay">
              {" "}
              {props.investmentPeriod} year's
            </span>{" "}
            you will have
          </span>
          <h2 className="sipAmount">₹ {props.result && props.toIndianRupees(Number(props.result.sip))}</h2>
          <span className="paraGraph">
            That's
            <span className="currencyRupeeInPara">
              ₹{" "}
              {props.result && props.toIndianRupees(
                Number(props.result.sip - props.result.totalInvestmentTillDate)
              )}
            </span>{" "}
            as potential capital gains on your investment of
            <span className="currencyRupeeInPara2">
              ₹ {props.result && props.toIndianRupees(Number(props.result.totalInvestmentTillDate))}
            </span>
          </span>
        </div>
        <ResponsiveContainer className="graphDiv" width="90%" aspect={1.6}>
          <LineChart
            width={550}
            height={550}
            min={0}
            max={5000000}
            data={props.result && props.result.graph}
            margin={{
              top:5,
              bottom:20,
              left: 7,
              right:2,
            }}
          >
            <XAxis dataKey="years" stroke="#000000" fontWeight="bold">
              <Label
                value="Investment Period(in Years)"
                position="bottom"
                offset={-1}
              />
            </XAxis>

            <YAxis stroke="#000000" fontWeight="bold" type="investment">
              <Label
                value="Amount( ₹ in Lacs )"
                position="left"
                offset={5}
                angle={270}
              />
            </YAxis>
            <Tooltip />
            <Line
              type="monotone"
              dataKey="investment"
              stroke="#2f50e8"
              r={0}
            />
            <Line
              type="monotone"
              dataKey="sipStepUp"
              stroke="#4822a2"
              r={0}

            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default Graph;