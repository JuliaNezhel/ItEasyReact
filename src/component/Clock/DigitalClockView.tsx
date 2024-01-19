import { ClockViewPropsType, } from "./Clock";

export const DigitalClockView: React.FC<ClockViewPropsType> = ({ date }) => {
  function get2digitsString(num: number) {
    return num < 10 ? "0" + num : num;
  }

  return (
    <>
      <span>{get2digitsString(date.getHours())}</span>:
      <span>{get2digitsString(date.getMinutes())}</span>:
      <span>{get2digitsString(date.getSeconds())}</span>
    </>
  );
};
