import Image from "next/image";
import bcImage from "../Home_Bc.png"

export default function Home() {
  return (
    <div style={{
        backgroundImage: `url$({Home_Bc.url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      
    </div>
  );
}
