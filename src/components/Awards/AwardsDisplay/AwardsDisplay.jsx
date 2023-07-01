import React, { useState } from 'react'
import Display from './Display'
import Tabs from './Tabs'

const tabContent = {
  "2023": [
    { "award": "HS Excellence Award", "team #": "4154X", "name": "U.S.R.", "affiliation": "NSU UNIVERSITY SCHOOL", "location": "Fort Lauderdale, Florida, United States" },
    { "award": "MS Excellence Award", "team #": "20315B", "name": "Marcelline Robotics", "affiliation": "Collège Sainte-Marcelline", "location": "Montreal, Quebec, Canada" },
    { "award": "Tournament Champions", "team #": "210Z", "name": "Eclipse", "affiliation": "Western Mechatronics", "location": "Calgary, Alberta, Canada" },
    { "award": "Tournament Champions", "team #": "5760B", "name": "UnBEARable", "affiliation": "Father Patrick Mercredi High School", "location": "Fort Mcmurray, Alberta, Canada" },
    { "award": "Tournament Finalists", "team #": "2011E", "name": "Ember", "affiliation": "BRECKSVILLE-BROADVIEW HEIGHTS HIGH SCHOOL", "location": "Broadview Heights, Ohio, United States" },
    { "award": "Tournament Finalists", "team #": "4154X", "name": "U.S.R.", "affiliation": "NSU UNIVERSITY SCHOOL	", "location": "Fort Lauderdale, Florida, United States" },
    { "award": "Design Award", "team #": "2011E", "name": "Ember", "affiliation": "BRECKSVILLE-BROADVIEW HEIGHTS HIGH SCHOOL", "location": "Broadview Heights, Ohio, United States" },
    { "award": "Robot Skills Champion", "team #": "9181N", "name": "Bababooey", "affiliation": "Seaquam Secondary", "location": "Delta, British Columbia, Canada" },
    { "award": "Robot Skills 2nd Place", "team #": "4154X", "name": "U.S.R.", "affiliation": "NSU UNIVERSITY SCHOOL	", "location": "Fort Lauderdale, Florida, United States" },
    { "award": "Robot Skills 3rd Place", "team #": "20315C", "name": "Marcelline Robotics", "affiliation": "Collège Sainte-Marcelline", "location": "Montreal, Quebec, Canada" },
    { "award": "Judges Award", "team #": "3388Z", "name": "Zookies", "affiliation": "Sir Winston Churchill High School", "location": "Calgary, Alberta, Canada" },
    { "award": "Innovate Award", "team #": "3388H", "name": "Hurricane", "affiliation": "Sir Winston Churchill High School", "location": "Calgary, Alberta, Canada" },
    { "award": "Think Award", "team #": "9181N", "name": "Bababooey", "affiliation": "Seaquam Secondary", "location": "Delta, British Columbia, Canada" },
    { "award": "Amaze Award", "team #": "4154V", "name": "U.S.R.", "affiliation": "NSU UNIVERSITY SCHOOL", "location": "Fort Lauderdale, Florida, United States" },
    { "award": "Build Award", "team #": "2011D", "name": "Dopamine", "affiliation": "BRECKSVILLE-BROADVIEW HEIGHTS HIGH SCHOOL", "location": "Broadview Heights, Ohio, United States" },
    { "award": "Create Award", "team #": "315K", "name": "Paradigm", "affiliation": "Paradigm", "location": "Redwood City, California, United States" },
    { "award": "Sportsmanship Award", "team #": "210Z", "name": "Eclipse", "affiliation": "Western Mechatronics", "location": "Calgary, Alberta, Canada" },
    { "award": "Energy Award", "team #": "86744M", "name": "MechaRauders Mu", "affiliation": "Fort McMurray Public School Division", "location": "Fort McMurray, Alberta, Canada" },
    { "award": "Inspire Award", "team #": "334Z", "name": "	Supernova ZZZZZZzzzz……", "affiliation": "SCIENCE ACADEMY STEM MAGNET", "location": "North Hollywood, California, United States" },
  ],
  "2024": [
    // Empty tab will be displayed as yet to occur
  ],
}


const AwardsDisplay = () => {

  const [currentTab, setCurrentTab] = useState("2023");

  return (
    <div className='flex flex-col gap-12 mt-12'>
      <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} tabs={Object.keys(tabContent)} />
      <Display data={tabContent[currentTab]} />
    </div>
  )
}

export default AwardsDisplay