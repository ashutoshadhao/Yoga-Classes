import React from "react";
import "./features.css";
import Box from "./Box";
import one from "../Images/1.png";
import two from "../Images/2.png";
import three from "../Images/3.png";
import four from "../Images/4.png";
import five from "../Images/5.png";
import six from "../Images/6.png";

const Features = () => {
  const arr = [
    "Yoga For Health",
    "Improves Strength",
    "Pain Relief",
    "Heart Health",
    "Sleep Benifits",
    "Manage Stress",
  ];
  const imgLink = [one, two, three, four, five, six];
  const paraTxt = [
    "Help improve general wellness by relieving stress, supporting good health habits, and improving mental/emotional health, sleep, and balance",
    "Slow movements and deep breathing increase blood flow and warm up muscles, while holding a pose can build strength.",
    "Yoga is as good as basic stretching for easing pain and improving mobility in people with lower back pain.",
    "Regular yoga practice may reduce levels of stress and body-wide inflammation, contributing to healthier hearts. Several of the factors contributing to heart disease",
    "Research shows that a consistent bedtime yoga routine can help you get in the right mindset and prepare your body to fall asleep and stay asleep.",
    "According to the National Institutes of Health, scientific evidence shows that yoga supports stress quality sleep, mindfulness,weight loss and management.",
  ];
  return (
    <div>
      <div className="container mb-3">
        <h1 className="text-center display-4 m-5">Yoga For Health</h1>
        <div className=" d-flex flex-wrap justify-content-center ">
          {arr.map((data, index) => (
            <Box value={data} imgVal={imgLink[index]} para={paraTxt[index]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
