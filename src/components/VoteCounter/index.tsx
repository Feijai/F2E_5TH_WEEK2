import React, { useState, useEffect } from "react";
import FlipUnitContainer from "./FlipUnitContainer";
import "./voteCounter.sass";
import { time, getTimeDesc } from "@/utils/countFunc";
import TextBlock from "./TextBlock";

const compareTime = (
  timeBefore: number,
  timeNow: number,
  setTime: React.Dispatch<React.SetStateAction<number>>,
  setShuffle: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (timeBefore !== timeNow) {
    setTime(timeNow);
    setShuffle((pre) => !pre);
  }
};

const FlipClock = () => {
  const [timeValue, setTimeValue] = useState(time);
  const [days1Value, setDays1Value] = useState(0);
  const [days1Shuffle, setDays1Shuffle] = useState(false);
  const [days2Value, setDays2Value] = useState(0);
  const [days2Shuffle, setDays2Shuffle] = useState(false);
  const [hours1Value, setHours1Value] = useState(0);
  const [hours1Shuffle, setHours1Shuffle] = useState(false);
  const [hours2Value, setHours2Value] = useState(0);
  const [hours2Shuffle, setHours2Shuffle] = useState(false);
  const [mins1Value, setMins1Value] = useState(0);
  const [mins1Shuffle, setMins1Shuffle] = useState(false);
  const [mins2Value, setMins2Value] = useState(0);
  const [mins2Shuffle, setMins2Shuffle] = useState(false);
  const [seconds1Value, setSeconds1Value] = useState(0);
  const [seconds1Shuffle, setSeconds1Shuffle] = useState(false);
  const [seconds2Value, setSeconds2Value] = useState(0);
  const [seconds2Shuffle, setSeconds2Shuffle] = useState(false);
  // const []

  useEffect(() => {
    const timer = window.setInterval(
      () => setTimeValue((preValue) => preValue - 1000),
      1000
    );
    const { days1, days2, hours1, hours2, mins1, mins2, seconds1, seconds2 } =
      getTimeDesc(timeValue);
    compareTime(days1Value, days1, setDays1Value, setDays1Shuffle);
    compareTime(days2Value, days2, setDays2Value, setDays2Shuffle);
    compareTime(hours1Value, hours1, setHours1Value, setHours1Shuffle);
    compareTime(hours2Value, hours2, setHours2Value, setHours2Shuffle);
    compareTime(mins1Value, mins1, setMins1Value, setMins1Shuffle);
    compareTime(mins2Value, mins2, setMins2Value, setMins2Shuffle);
    compareTime(seconds1Value, seconds1, setSeconds1Value, setSeconds1Shuffle);
    compareTime(seconds2Value, seconds2, setSeconds2Value, setSeconds2Shuffle);

    return () => clearInterval(timer);
  }, [
    timeValue,
    seconds1Value,
    seconds2Value,
    days1Value,
    days2Value,
    hours1Value,
    hours2Value,
    mins1Value,
    mins2Value,
  ]);

  return (
    <div className="flex justify-center items-end">
      <FlipUnitContainer digit={days1Value} shuffle={days1Shuffle} />
      <FlipUnitContainer digit={days2Value} shuffle={days2Shuffle} />
      <TextBlock text={"天"} />
      <FlipUnitContainer digit={hours1Value} shuffle={hours1Shuffle} />
      <FlipUnitContainer digit={hours2Value} shuffle={hours2Shuffle} />
      <TextBlock text={"時"} />
      <FlipUnitContainer digit={mins1Value} shuffle={mins1Shuffle} />
      <FlipUnitContainer digit={mins2Value} shuffle={mins2Shuffle} />
      <TextBlock text={"分"} />
      <FlipUnitContainer digit={seconds1Value} shuffle={seconds1Shuffle} />
      <FlipUnitContainer digit={seconds2Value} shuffle={seconds2Shuffle} />
      <TextBlock text={"秒"} />
    </div>
  );
};

export default FlipClock;
