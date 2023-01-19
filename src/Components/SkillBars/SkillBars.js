import React from "react";
import SkillBar from 'react-skillbars';

const colors = {
  bar: 'darkred',
  title: {
    text: '#abc123',
    background: '#fff',
  },
};

const skills = [
  { type: 'HTML', level: 100 },
  { type: 'GitHub', level: 100 },
  { type: 'CSS', level: 85 },
  { type: 'JavaScript', level: 85 },
  { type: 'Bootstrap', level: 80 },
  { type: 'React', level: 70 },
  { type: 'NPM', level: 70 },
  { type: 'Redux', level: 60 },
  { type: 'Postgres', level: 60 },
  { type: 'NodeJS', level: 60 }
];

const Skillbars = () => {
  return (
    <SkillBar skills={skills} barBackground={'gray'} colors={colors} height={'4vh'}/>
  )
}

export default Skillbars