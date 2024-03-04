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
    { "award": "HS Excellence Award", "team #": "10B", "name": "Exothermic Blaze", "affiliation": "Exothermic Robotics", "location": "Redmond, Washington, United States" },
    { "award": "MS Excellence Award", "team #": "10012G", "name": "Ten Ton Robotics", "affiliation": "Ten Ton Robotics	", "location": "West Vancouver, British Columbia, Canada" },
    { "award": "Tournament Champions", "team #": "9364C	", "name": "IronEagles C=299792458m/s", "affiliation": "Brentwood Academy", "location": "Brentwood, Tennessee, United States" },
    { "award": "Tournament Champions", "team #": "5327A", "name": "Gael Force Ascension	", "affiliation": "DUBLIN HIGH", "location": "Dublin, California, United States" },
    { "award": "Tournament Finalists", "team #": "886Y", "name": "YaBaDaBaDoo | WPRA", "affiliation": "Western Pacific Robotics Academy", "location": "Vancouver, British Columbia, Canada" },
    { "award": "Tournament Finalists", "team #": "1010W", "name": "TenTon Robotics", "affiliation": "West Vancouver School District #45", "location": "West Vancouver, British Columbia, Canada" },
    { "award": "Design Award", "team #": "2775V", "name": "Jackson Area Robotics", "affiliation": "Jackson Area Robotics", "location": "Jackson, Tennessee, United States" },
    { "award": "Robot Skills Champion", "team #": "1010W", "name": "TenTon Robotics", "affiliation": "West Vancouver School District #45", "location": "West Vancouver, British Columbia, Canada" },
    { "award": "Robot Skills 2nd Place", "team #": "10012G", "name": "Ten Ton Robotics", "affiliation": "Ten Ton Robotics", "location": "West Vancouver, British Columbia, Canada" },
    { "award": "Robot Skills 3rd Place", "team #": "9181S", "name": "Space", "affiliation": "Seaquam Secondary", "location": "Delta, British Columbia, Canada" },
    { "award": "Judges Award", "team #": "50280R", "name": "Rocky Mountain Rangers", "affiliation": "Rocky Mountain Robotics", "location": "Greenwood Village, Colorado, United States" },
    { "award": "Innovate Award", "team #": "6030J", "name": "Jesters", "affiliation": "Arizona College Prep High School", "location": "Chandler, Arizona, United States" },
    { "award": "Think Award", "team #": "210Z", "name": "Eclipse", "affiliation": "Western Mechatronics", "location": "Calgary, Alberta, Canada" },
    { "award": "Amaze Award", "team #": "1010W", "name": "TenTon Robotics", "affiliation": "West Vancouver School District #45", "location": "West Vancouver, British Columbia, Canada" },
    { "award": "Build Award", "team #": "9181S", "name": "Space", "affiliation": "Seaquam Secondary", "location": "Delta, British Columbia, Canada" },
    { "award": "Create Award", "team #": "886Y", "name": "YaBaDaBaDoo | WPRA", "affiliation": "Western Pacific Robotics Academy", "location": "Vancouver, British Columbia, Canada" },
    { "award": "Sportsmanship Award", "team #": "80634G", "name": "Loose Screws	", "affiliation": "	GREELEY WEST HIGH SCHOOL", "location": "Greeley, Colorado, United States" },
    { "award": "Energy Award", "team #": "9594A", "name": "RoboCavs - Ascendant", "affiliation": "Collingwood School", "location": "West Vancouver, British Columbia, Canada" },
    { "award": "Inspire Award", "team #": "2088H", "name": "Boopleanoot", "affiliation": "Western Mechatronics", "location": "Calgary, Alberta, Canada" },
  ],
}


const AwardsDisplay = () => {

  const [currentTab, setCurrentTab] = useState("2024");

  return (
    <div className='flex flex-col gap-12 mt-12'>
      <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} tabs={Object.keys(tabContent)} />
      <Display data={tabContent[currentTab]} />
    </div>
  )
}

export default AwardsDisplay