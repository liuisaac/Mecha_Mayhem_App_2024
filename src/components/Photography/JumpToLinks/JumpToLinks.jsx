import React from 'react'
import IndentedText from './IndentedText'
import Directory from './Directory';

const directoryData = {
    "99197 Photos": "https://drive.google.com/drive/folders/1VxJ4P3SkLA0jtRkczvGRpKtMxGep9ECA?usp=drive_link",
    "Daniel Howe": "https://drive.google.com/drive/folders/1tahjfM6wwQW8Iyks0oMCxpjN7dJ_H_Ow?usp=drive_link",
    "Jon 210Y Photos": "https://drive.google.com/drive/folders/1-C9y6ONAuQLAAObwX-05R-Q6aNdKBVrE?usp=drive_link",
    "Merc Media Team": {
        "Feb 3rd": "https://drive.google.com/drive/folders/1V9joY6dosNIw0ZXYsvbxPp0i43h1fkJb?usp=drive_link",
        "Feb 4th": "https://drive.google.com/drive/folders/1adozcnxpQ-dF30gmKKU-4V5dc4SC7Siu?usp=drive_link",
        "Feb 5th": "https://drive.google.com/drive/folders/1_I4Z0VU-7ICgDGF4EDT4LQAXLjNhG6Zf?usp=drive_link",
        "Top Ten": "https://drive.google.com/drive/folders/1igiROKCHAfUtgRZrDa-rO60BAsVYpxOL?usp=drive_link",

    },
    "Tim Videos": "https://drive.google.com/drive/folders/1f1RZNL3Q6-c05G4nBBFYR9TfTMBRJa2B?usp=drive_link",
}

const JumpToLinks = () => {

  return (
    <div>
        <h4 className='text-white font-rubik text-xl mt-8 mb-4'>JUMP TO</h4>

        <div className='flex w-full gap-16'>
            <Directory data={directoryData} title={"2023"} />
            <Directory title={"2024"} />
        </div>

    </div>
  )
}

export default JumpToLinks