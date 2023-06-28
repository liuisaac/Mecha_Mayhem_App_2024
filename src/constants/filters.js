import completed from '../constants/SideBarAssets/Completed.svg';
import live from '../constants/SideBarAssets/Live.svg';
import overunder from '../constants/SideBarAssets/OverUnder.svg';
import prairies_icon from '../constants/SideBarAssets/Prairies.svg';
import rockies_icon from '../constants/SideBarAssets/Rockies.svg';
import spinup from '../constants/SideBarAssets/SpinUp.svg';
import trailers from '../constants/SideBarAssets/Trailers.svg';
import upcoming from '../constants/SideBarAssets/Upcoming.svg';

export const filters = [
        {
            title: "DIVISION",
            subtitle: "DIVISION",
            icon: rockies_icon,
            isBorder: true
        },
  {
    title: "THE ROCKIES",
    subtitle: "DIVISION",
    icon: rockies_icon,
    filter_key: "rockies",
    default_state: false,
    isBorder: false,
    shift: "0"
  },
  {
    title: "THE PRAIRIES",
    subtitle: "DIVISION",
    icon: prairies_icon,
    filter_key: "prairies",
    default_state: false,
    isBorder: false,
    shift: "0"
  },
        {
            title: "STATUS",
            subtitle: "DIVISION",
            icon: rockies_icon,
            isBorder: true
        },
  {
    title: "UPCOMING",
    subtitle: "MATCHES",
    icon: upcoming,
    filter_key: "upcoming",
    default_state: false,
    isBorder: false,
    shift: "4"
  },
  {
    title: "LIVE",
    subtitle: "MATCHES",
    icon: live,
    filter_key: "live",
    default_state: false,
    isBorder: false,
    shift: "4"
  },
  {
    title: "COMPLETED",
    subtitle: "MATCHES",
    icon: completed,
    filter_key: "completed",
    default_state: false,
    isBorder: false,
    shift: "4"
  },
        {
            title: "PROMOTIONAL VIDEOS",
            subtitle: "DIVISION",
            icon: rockies_icon,
            isBorder: true
        },
  {
    title: "TRAILERS",
    subtitle: "REVEALS",
    icon: trailers,
    filter_key: "trailerS",
    default_state: false,
    isBorder: false,
    shift: "0"
  },
        {
            title: "YEAR",
            subtitle: "DIVISION",
            icon: rockies_icon,
            isBorder: true
        },
  {
    title: "VEX OVER UNDER",
    subtitle: "2024",
    icon: overunder,
    filter_key: "2024",
    default_state: false,
    isBorder: false,
    shift: "0"
  },
  {
    title: "VEX SPIN UP",
    subtitle: "2024",
    icon: spinup,
    filter_key: "2023",
    default_state: false,
    isBorder: false,
    shift: "0"
  },
        {
            title: "TEAMS",
            subtitle: "DIVISION",
            icon: rockies_icon,
            isBorder: true
        },
  {
    title: "COMING SOON",
    subtitle: "#MECHA2024",
    icon: rockies_icon,
    filter_key: "210Y",
    default_state: false,
    isBorder: false,
    shift: "0"
  },
]