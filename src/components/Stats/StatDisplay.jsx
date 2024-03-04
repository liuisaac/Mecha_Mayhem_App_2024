import React from 'react'
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const blacklist        = ["210F", "2088A"];
const blacklist_ID     = [ 101323, 97008];

const eventId = 51496;

const validBlackListDataSet = {
  "2088A": 143220,
  "210F": 139532,
  "3300A": 138256,
  "1165A": 157126,
  "3300B": 150187,
  "5760H": 114837,
  "6030M": 93932,
  "12145A": 163822,
  "12145B": 163823,
  "12145C": 163824,
  "50865A": 156931,
  "80001B": 104912,
};

async function getTeamId(teamNumber) {
  const apiUrl = 'https://www.robotevents.com/api/v2/teams';
  const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNjZkYmEwODYzMGJlOGUzYjg1NTFhZWRiNTk2YWM2MmZlZDYxZDVlOGQwYjRkOGMxMWNlMTFkMzhhY2I5NTFiZWY2Y2VhZTcyZDNmODU5NmUiLCJpYXQiOjE2OTgwMTMxNjMuNTQ1NTk5LCJuYmYiOjE2OTgwMTMxNjMuNTQ1NjAyMSwiZXhwIjoyNjQ0Nzg3OTYzLjU0MDE1OTIsInN1YiI6IjEyMjEzNiIsInNjb3BlcyI6W119.hgL4p-6-GzfT1mYzI0Du7RIt9wqNutAsiwafj58kPwfGIY4pHawH-kRgNdqQbLguiO6HrObmQXwBiV5CwLZGX8OCYdr1vl-3SOVrNJqx8Q2f4bjertdymx2SWTcsNpXta2INxQR6hhGlcWD_sAzyicl1u-SI4nMge_XP--e25Va3X5xajdXPYqmpaWWxC54S2r85q4kBLX7dSelYrvAU1dmxqfyW8xakFaDWBVmH_jR_keweiPnqJnF1S80R2peSMoyxa0ncIviY2-Ft7Fi8cuilTKMIkXtbu3l_XPmLUdGcwMfb2-gZMhXU_HO67NReWgV5SEKFMIkLl06nw3j3c6MmdPhgQAgWauqH913UURh-_ok6DYr7_y1tJJIVm8AKaqFHqJ6wbQryNJdHNsw2I_GDSY9Mzge4Np2Rue2Sm4wB0o0vOxbHzB-2P-SCddTSzgcFMPvZP8Am4VZvJZ4Mi8jgfX5XOoUmRs8SxkKNOK9KXlxN3II_XBepw2jeYTYtmt7CEoZmZIZmblZqEsMJzucx9Vm-84INsXiGjn-JA7b37XMMFb1Kv9n_hpdgm7MCRh_TUBV6y0UAYo8SmEdiQPXDAgnVqED72MXeBK1irXMPpZaVBHBWbUJ3zMq36L2NbASyuOTPu467rCakjI6N-N7annfOUJwNooQSDD8S5M0'; // Replace with your actual API key

  const queryParams = new URLSearchParams({
    number: teamNumber,
  });

  try {
    const response = await fetch(`${apiUrl}?${queryParams.toString()}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (response.status === 200) {
      const data = await response.json();
      // HELPDJS what is this
      if (data && data.data && data.data.length > 0) {
        for (let i = 0; i < data.data.length; i++) {
          let teamId = data.data[i].id; // get team id in current json config
          let teamNumber = data.data[i].number; // get team number in current json config
          if (teamNumber in validBlackListDataSet) { // if id needs to be checked
            const value = validBlackListDataSet[teamNumber]; // ID of the correct team in mecha
            if (teamId == value) {  // if id of current team is equal to the desired ID
              return teamId; // set desired team to be current iteration
            }
          }
        }
      }
      return data.data[0].id;
    } else {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
}

async function getTeamOrganization(teamNumber) {
  const apiUrl = 'https://www.robotevents.com/api/v2/teams';
  const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNjZkYmEwODYzMGJlOGUzYjg1NTFhZWRiNTk2YWM2MmZlZDYxZDVlOGQwYjRkOGMxMWNlMTFkMzhhY2I5NTFiZWY2Y2VhZTcyZDNmODU5NmUiLCJpYXQiOjE2OTgwMTMxNjMuNTQ1NTk5LCJuYmYiOjE2OTgwMTMxNjMuNTQ1NjAyMSwiZXhwIjoyNjQ0Nzg3OTYzLjU0MDE1OTIsInN1YiI6IjEyMjEzNiIsInNjb3BlcyI6W119.hgL4p-6-GzfT1mYzI0Du7RIt9wqNutAsiwafj58kPwfGIY4pHawH-kRgNdqQbLguiO6HrObmQXwBiV5CwLZGX8OCYdr1vl-3SOVrNJqx8Q2f4bjertdymx2SWTcsNpXta2INxQR6hhGlcWD_sAzyicl1u-SI4nMge_XP--e25Va3X5xajdXPYqmpaWWxC54S2r85q4kBLX7dSelYrvAU1dmxqfyW8xakFaDWBVmH_jR_keweiPnqJnF1S80R2peSMoyxa0ncIviY2-Ft7Fi8cuilTKMIkXtbu3l_XPmLUdGcwMfb2-gZMhXU_HO67NReWgV5SEKFMIkLl06nw3j3c6MmdPhgQAgWauqH913UURh-_ok6DYr7_y1tJJIVm8AKaqFHqJ6wbQryNJdHNsw2I_GDSY9Mzge4Np2Rue2Sm4wB0o0vOxbHzB-2P-SCddTSzgcFMPvZP8Am4VZvJZ4Mi8jgfX5XOoUmRs8SxkKNOK9KXlxN3II_XBepw2jeYTYtmt7CEoZmZIZmblZqEsMJzucx9Vm-84INsXiGjn-JA7b37XMMFb1Kv9n_hpdgm7MCRh_TUBV6y0UAYo8SmEdiQPXDAgnVqED72MXeBK1irXMPpZaVBHBWbUJ3zMq36L2NbASyuOTPu467rCakjI6N-N7annfOUJwNooQSDD8S5M0'; // Replace with your actual API key

  const queryParams = new URLSearchParams({
    number: teamNumber,
  });

  try {
    const response = await fetch(`${apiUrl}?${queryParams.toString()}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (response.status === 200) {
      const data = await response.json();
      // HELPDJS what is this
      if (data && data.data && data.data.length > 0) {
        for (let i = 0; i < data.data.length; i++) {
          let teamId = data.data[i].id; // get team id in current json config
          let teamNumber = data.data[i].number; // get team number in current json config
          let organization = data.data[i].organization;
          if (teamNumber in validBlackListDataSet) { // if id needs to be checked
            const value = validBlackListDataSet[teamNumber]; // ID of the correct team in mecha
            if (teamId == value) {  // if id of current team is equal to the desired ID
              return organization; // set desired team to be current iteration
            }
          }
        }
      }
      return data.data[0].organization;
    } else {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
}

function getEventId(eventName) {
  const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNjZkYmEwODYzMGJlOGUzYjg1NTFhZWRiNTk2YWM2MmZlZDYxZDVlOGQwYjRkOGMxMWNlMTFkMzhhY2I5NTFiZWY2Y2VhZTcyZDNmODU5NmUiLCJpYXQiOjE2OTgwMTMxNjMuNTQ1NTk5LCJuYmYiOjE2OTgwMTMxNjMuNTQ1NjAyMSwiZXhwIjoyNjQ0Nzg3OTYzLjU0MDE1OTIsInN1YiI6IjEyMjEzNiIsInNjb3BlcyI6W119.hgL4p-6-GzfT1mYzI0Du7RIt9wqNutAsiwafj58kPwfGIY4pHawH-kRgNdqQbLguiO6HrObmQXwBiV5CwLZGX8OCYdr1vl-3SOVrNJqx8Q2f4bjertdymx2SWTcsNpXta2INxQR6hhGlcWD_sAzyicl1u-SI4nMge_XP--e25Va3X5xajdXPYqmpaWWxC54S2r85q4kBLX7dSelYrvAU1dmxqfyW8xakFaDWBVmH_jR_keweiPnqJnF1S80R2peSMoyxa0ncIviY2-Ft7Fi8cuilTKMIkXtbu3l_XPmLUdGcwMfb2-gZMhXU_HO67NReWgV5SEKFMIkLl06nw3j3c6MmdPhgQAgWauqH913UURh-_ok6DYr7_y1tJJIVm8AKaqFHqJ6wbQryNJdHNsw2I_GDSY9Mzge4Np2Rue2Sm4wB0o0vOxbHzB-2P-SCddTSzgcFMPvZP8Am4VZvJZ4Mi8jgfX5XOoUmRs8SxkKNOK9KXlxN3II_XBepw2jeYTYtmt7CEoZmZIZmblZqEsMJzucx9Vm-84INsXiGjn-JA7b37XMMFb1Kv9n_hpdgm7MCRh_TUBV6y0UAYo8SmEdiQPXDAgnVqED72MXeBK1irXMPpZaVBHBWbUJ3zMq36L2NbASyuOTPu467rCakjI6N-N7annfOUJwNooQSDD8S5M0'; // Replace with your Robot Events API key
  const apiUrl = 'https://www.robotevents.com/api/v2/events';

  const params = {
    sku: eventName,   
  };

  const url = new URL(apiUrl);
  url.search = new URLSearchParams(params);

  fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
    },
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to retrieve event data.');
      }
    })
    .then(data => {
      if (data.data && data.data.length > 0) {
        const eventId = data.data[0].id;
        console.log(`Event ID for ${eventName}: ${eventId}`);
      } else {
        console.log(`Event ${eventName} not found.`);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

async function getDriverSkillsScore(teamId) {
  const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNjZkYmEwODYzMGJlOGUzYjg1NTFhZWRiNTk2YWM2MmZlZDYxZDVlOGQwYjRkOGMxMWNlMTFkMzhhY2I5NTFiZWY2Y2VhZTcyZDNmODU5NmUiLCJpYXQiOjE2OTgwMTMxNjMuNTQ1NTk5LCJuYmYiOjE2OTgwMTMxNjMuNTQ1NjAyMSwiZXhwIjoyNjQ0Nzg3OTYzLjU0MDE1OTIsInN1YiI6IjEyMjEzNiIsInNjb3BlcyI6W119.hgL4p-6-GzfT1mYzI0Du7RIt9wqNutAsiwafj58kPwfGIY4pHawH-kRgNdqQbLguiO6HrObmQXwBiV5CwLZGX8OCYdr1vl-3SOVrNJqx8Q2f4bjertdymx2SWTcsNpXta2INxQR6hhGlcWD_sAzyicl1u-SI4nMge_XP--e25Va3X5xajdXPYqmpaWWxC54S2r85q4kBLX7dSelYrvAU1dmxqfyW8xakFaDWBVmH_jR_keweiPnqJnF1S80R2peSMoyxa0ncIviY2-Ft7Fi8cuilTKMIkXtbu3l_XPmLUdGcwMfb2-gZMhXU_HO67NReWgV5SEKFMIkLl06nw3j3c6MmdPhgQAgWauqH913UURh-_ok6DYr7_y1tJJIVm8AKaqFHqJ6wbQryNJdHNsw2I_GDSY9Mzge4Np2Rue2Sm4wB0o0vOxbHzB-2P-SCddTSzgcFMPvZP8Am4VZvJZ4Mi8jgfX5XOoUmRs8SxkKNOK9KXlxN3II_XBepw2jeYTYtmt7CEoZmZIZmblZqEsMJzucx9Vm-84INsXiGjn-JA7b37XMMFb1Kv9n_hpdgm7MCRh_TUBV6y0UAYo8SmEdiQPXDAgnVqED72MXeBK1irXMPpZaVBHBWbUJ3zMq36L2NbASyuOTPu467rCakjI6N-N7annfOUJwNooQSDD8S5M0'; 
  const apiUrl = `https://www.robotevents.com/api/v2/events/${eventId}/skills?team%5B%5D=${teamId}&type%5B%5D=driver`;

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to retrieve skills driver data.');
    }

    const data = await response.json();

    if (data && data.data && data.data.length > 0) {
      const driverSkillsScore = data.data[0].score;
      console.log(`Skills score for ${teamId}: ${driverSkillsScore}`);
      return driverSkillsScore;
    } else {
      console.log(`Skills Score for ${teamId} not found.`);
      return 0; // or any default value
    }
  } catch (error) {
    console.error('Error:', error);
    throw error; // Re-throw the error to indicate failure
  }
}

async function getProgrammingSkillsScore(teamId) {
  const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNjZkYmEwODYzMGJlOGUzYjg1NTFhZWRiNTk2YWM2MmZlZDYxZDVlOGQwYjRkOGMxMWNlMTFkMzhhY2I5NTFiZWY2Y2VhZTcyZDNmODU5NmUiLCJpYXQiOjE2OTgwMTMxNjMuNTQ1NTk5LCJuYmYiOjE2OTgwMTMxNjMuNTQ1NjAyMSwiZXhwIjoyNjQ0Nzg3OTYzLjU0MDE1OTIsInN1YiI6IjEyMjEzNiIsInNjb3BlcyI6W119.hgL4p-6-GzfT1mYzI0Du7RIt9wqNutAsiwafj58kPwfGIY4pHawH-kRgNdqQbLguiO6HrObmQXwBiV5CwLZGX8OCYdr1vl-3SOVrNJqx8Q2f4bjertdymx2SWTcsNpXta2INxQR6hhGlcWD_sAzyicl1u-SI4nMge_XP--e25Va3X5xajdXPYqmpaWWxC54S2r85q4kBLX7dSelYrvAU1dmxqfyW8xakFaDWBVmH_jR_keweiPnqJnF1S80R2peSMoyxa0ncIviY2-Ft7Fi8cuilTKMIkXtbu3l_XPmLUdGcwMfb2-gZMhXU_HO67NReWgV5SEKFMIkLl06nw3j3c6MmdPhgQAgWauqH913UURh-_ok6DYr7_y1tJJIVm8AKaqFHqJ6wbQryNJdHNsw2I_GDSY9Mzge4Np2Rue2Sm4wB0o0vOxbHzB-2P-SCddTSzgcFMPvZP8Am4VZvJZ4Mi8jgfX5XOoUmRs8SxkKNOK9KXlxN3II_XBepw2jeYTYtmt7CEoZmZIZmblZqEsMJzucx9Vm-84INsXiGjn-JA7b37XMMFb1Kv9n_hpdgm7MCRh_TUBV6y0UAYo8SmEdiQPXDAgnVqED72MXeBK1irXMPpZaVBHBWbUJ3zMq36L2NbASyuOTPu467rCakjI6N-N7annfOUJwNooQSDD8S5M0'; 
  const apiUrl = `https://www.robotevents.com/api/v2/events/${eventId}/skills?team%5B%5D=${teamId}&type%5B%5D=programming`;

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to retrieve skills programming data.');
    }

    const data = await response.json();

    if (data && data.data && data.data.length > 0) {
      const programmingSkillsScore = data.data[0].score;
      console.log(`Skills score for ${teamId}: ${programmingSkillsScore}`);
      return programmingSkillsScore;
    } else {
      console.log(`Skills Score for ${teamId} not found.`);
      return 0; // or any default value
    }
  } catch (error) {
    console.error('Error:', error);
    throw error; // Re-throw the error to indicate failure
  }
}

async function getOverallSkillsRanking(teamId) {
  const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNjZkYmEwODYzMGJlOGUzYjg1NTFhZWRiNTk2YWM2MmZlZDYxZDVlOGQwYjRkOGMxMWNlMTFkMzhhY2I5NTFiZWY2Y2VhZTcyZDNmODU5NmUiLCJpYXQiOjE2OTgwMTMxNjMuNTQ1NTk5LCJuYmYiOjE2OTgwMTMxNjMuNTQ1NjAyMSwiZXhwIjoyNjQ0Nzg3OTYzLjU0MDE1OTIsInN1YiI6IjEyMjEzNiIsInNjb3BlcyI6W119.hgL4p-6-GzfT1mYzI0Du7RIt9wqNutAsiwafj58kPwfGIY4pHawH-kRgNdqQbLguiO6HrObmQXwBiV5CwLZGX8OCYdr1vl-3SOVrNJqx8Q2f4bjertdymx2SWTcsNpXta2INxQR6hhGlcWD_sAzyicl1u-SI4nMge_XP--e25Va3X5xajdXPYqmpaWWxC54S2r85q4kBLX7dSelYrvAU1dmxqfyW8xakFaDWBVmH_jR_keweiPnqJnF1S80R2peSMoyxa0ncIviY2-Ft7Fi8cuilTKMIkXtbu3l_XPmLUdGcwMfb2-gZMhXU_HO67NReWgV5SEKFMIkLl06nw3j3c6MmdPhgQAgWauqH913UURh-_ok6DYr7_y1tJJIVm8AKaqFHqJ6wbQryNJdHNsw2I_GDSY9Mzge4Np2Rue2Sm4wB0o0vOxbHzB-2P-SCddTSzgcFMPvZP8Am4VZvJZ4Mi8jgfX5XOoUmRs8SxkKNOK9KXlxN3II_XBepw2jeYTYtmt7CEoZmZIZmblZqEsMJzucx9Vm-84INsXiGjn-JA7b37XMMFb1Kv9n_hpdgm7MCRh_TUBV6y0UAYo8SmEdiQPXDAgnVqED72MXeBK1irXMPpZaVBHBWbUJ3zMq36L2NbASyuOTPu467rCakjI6N-N7annfOUJwNooQSDD8S5M0'; 
  const apiUrl = `https://www.robotevents.com/api/v2/events/${eventId}/skills?team%5B%5D=${teamId}&type%5B%5D=programming`;

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to retrieve skills programming data.');
    }

    const data = await response.json();

    if (data && data.data && data.data.length > 0) {
      const ranking = data.data[0].rank;
      console.log(`Skills ranking for ${teamId}: ${ranking}`);
      return ranking;
    } else {
      console.log(`Skills Score for ${teamId} not found.`);
      return 0; // or any default value
    }
  } catch (error) {
    console.error('Error:', error);
    throw error; // Re-throw the error to indicate failure
  }
}


function getTeamAwards(teamId) {
  const apiKey ='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNjZkYmEwODYzMGJlOGUzYjg1NTFhZWRiNTk2YWM2MmZlZDYxZDVlOGQwYjRkOGMxMWNlMTFkMzhhY2I5NTFiZWY2Y2VhZTcyZDNmODU5NmUiLCJpYXQiOjE2OTgwMTMxNjMuNTQ1NTk5LCJuYmYiOjE2OTgwMTMxNjMuNTQ1NjAyMSwiZXhwIjoyNjQ0Nzg3OTYzLjU0MDE1OTIsInN1YiI6IjEyMjEzNiIsInNjb3BlcyI6W119.hgL4p-6-GzfT1mYzI0Du7RIt9wqNutAsiwafj58kPwfGIY4pHawH-kRgNdqQbLguiO6HrObmQXwBiV5CwLZGX8OCYdr1vl-3SOVrNJqx8Q2f4bjertdymx2SWTcsNpXta2INxQR6hhGlcWD_sAzyicl1u-SI4nMge_XP--e25Va3X5xajdXPYqmpaWWxC54S2r85q4kBLX7dSelYrvAU1dmxqfyW8xakFaDWBVmH_jR_keweiPnqJnF1S80R2peSMoyxa0ncIviY2-Ft7Fi8cuilTKMIkXtbu3l_XPmLUdGcwMfb2-gZMhXU_HO67NReWgV5SEKFMIkLl06nw3j3c6MmdPhgQAgWauqH913UURh-_ok6DYr7_y1tJJIVm8AKaqFHqJ6wbQryNJdHNsw2I_GDSY9Mzge4Np2Rue2Sm4wB0o0vOxbHzB-2P-SCddTSzgcFMPvZP8Am4VZvJZ4Mi8jgfX5XOoUmRs8SxkKNOK9KXlxN3II_XBepw2jeYTYtmt7CEoZmZIZmblZqEsMJzucx9Vm-84INsXiGjn-JA7b37XMMFb1Kv9n_hpdgm7MCRh_TUBV6y0UAYo8SmEdiQPXDAgnVqED72MXeBK1irXMPpZaVBHBWbUJ3zMq36L2NbASyuOTPu467rCakjI6N-N7annfOUJwNooQSDD8S5M0'; // Replace with your Robot Events API key
  const apiUrl = `https://www.robotevents.com/api/v2/events/${eventId}/awards?team%5B%5D=${teamId}`;

  let awardsTable = [];

  return fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
    },
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to retrieve awards data.');
      }
    })
    .then(data => {
      if (data.data && data.data.length > 0) {
        const awards = data.data;
        console.log(`Awards for Team ${teamId}`);
        awards.forEach(award => {
          console.log(`- ${award.title}`);
          awardsTable.push(award.title);
        });
      } else {
        console.log(`No awards found for Team ${teamId}`);
      }

      return awardsTable;
    })
    .catch(error => {
      console.error('Error:', error);
      return awardsTable; 
    });
}

const StatDisplay = () => {
    const data = useLocation();
    const [loading, setLoading] = useState(true);
    const [team_identification, setTeamIdentification] = useState(null);
    const [teamAwards, setTeamAwards] = useState(null);
    const [team_organization, setTeamOrganization] = useState(null);
    const [team_driver_skills, setTeamDriverSkills] = useState(0);
    const [team_programming_skills, setTeamProgrammingSkills] = useState(0);
    const [team_skills_ranking, setTeamSkillsRanking] = useState(0);
  
    let teamNum = "1010W";

    if (data.state && data.state.inputValue !== null) {
        teamNum = data.state.inputValue;
    } else {
        teamNum = "1010W";
    }
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const teamID = await getTeamId(teamNum);
          setTeamIdentification(teamID);
  
          const awards = await getTeamAwards(teamID);
          setTeamAwards(awards);
  
          const organization = await getTeamOrganization(teamNum);
          setTeamOrganization(organization);
  
          const driverSkillsScore = await getDriverSkillsScore(teamID);
          setTeamDriverSkills(driverSkillsScore);
  
          const programmingSkillsScore = await getProgrammingSkillsScore(teamID);
          setTeamProgrammingSkills(programmingSkillsScore);
  
          const overallSkillsRanking = await getOverallSkillsRanking(teamID);
          setTeamSkillsRanking(overallSkillsRanking);
          
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, [teamNum]);

  return (
    <div className={'border-2 rounded-xl border-gray-500/50 p-4 md:p-8 backdrop-blur-[10px] '}>
        <table className='w-full md:w-[60vw]'>
            <thead>
            <tr className='text-white font-rubik text-lg md:text-xl text-left'>
                <th className="pr-2 md:pr-4">TEAM NUMBER</th>
                <th className="pr-2 md:pr-4">ORGANIZATION</th>
                <th className="pr-2 md:pr-4">DRIVER</th>
                <th className="pr-2 md:pr-4">PROGRAMMING</th>
                <th className="pr-2 md:pr-4">SKILLS RANK</th>
            </tr>
            </thead>
            <tbody className='text-regular text-white'>
            <tr>
                <td className='pr-2 md:pr-4 pt-2 md:pt-4'>{teamNum}</td>
                <td className='pr-2 md:pr-4 pt-2 md:pt-4'>{team_organization}</td>
                <td className='pr-2 md:pr-4 pt-2 md:pt-4'>{team_driver_skills}</td>
                <td className='pr-2 md:pr-4 pt-2 md:pt-4'>{team_programming_skills}</td>
                <td className='pr-2 md:pr-4 pt-2 md:pt-4'>{team_skills_ranking}</td>
            </tr>
            </tbody>
        </table>
        <h4 className='w-full text-white text-center text-lg md:text-xl pt-2 md:pt-8'>
            {teamAwards ? (
            teamAwards.map((award, index) => (
                <p key={index}>{award}</p>
            ))
            ) : (
            'Loading awards...'
            )}
        </h4>
    </div>


  )
}

export default StatDisplay