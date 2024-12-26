
import React from "react";
import type { PropsWithChildren } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

// Define IconProps using `type` with optional `size`
type IconProps = {
    name: string;
    size?: number; // size is optional, will default to 30 if not passed
    color?: string; // Optional color property
  };

//   <Icon name="google" size={32} color = "white" />
  

  const Icons = ({ name, size = 30, color = 'white' }: IconProps) => {
    
    switch (name) 
    {
        case "google":
            return <Icon name="google" size={size} color={color} />
            break;

        case "video":
            return <Icon name="video" size={size} color={color} />
            break;

        case "camera":
            return <Icon name="camera" size={size} color={color} />
            break;

        case "camera-rotate":
            return <Icon name="camera-rotate" size={size} color={color} />
            break;

        case "microphone":
            return <Icon name="microphone" size={size} color={color} />
            break;

        case "play":
            return <Icon name="play" size={30} color="white" />
            break;

        case "stop":
            return <Icon name="stop" size={30} color="white" />
            break;

        case "pause":
            return <Icon name="pause" size={30} color="white" />
            break;
        
        case "rename":
            return <Icon name="rename" size={30} color="white" />
            break;
        
        case "delete":
            return <Icon name="trash" size={30} color="white" />
            break;

        default:
            return <Icon name="pageline" size={30} color="white" />
            break;
        }
}

export default Icons;

