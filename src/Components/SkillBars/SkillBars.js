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
  { type: 'NodeJS', level: 60 },
  { type: 'VisualStudio', level: 75 },
  { type: 'C', level: 55 },
  { type: 'C++', level: 50 },
  { type: 'Visual C#', level: 50 },
  { type: 'NetBeans', level: 65 },
  { type: 'JAVA', level: 50 },
  { type: 'MySQL', level: 60 },
  { type: 'Angular', level: 25 }
];

const Skillbars = () => {
  return (
    <SkillBar skills={skills} barBackground={'rgba(255, 255, 255, .4)'} colors={colors} height={'2.9vh'}/>
  )
}

export default Skillbars