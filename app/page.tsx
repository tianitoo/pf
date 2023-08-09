import Image from "next/image";
import Terminal from "../components/terminal";

export default function Home() {
  return (
		<div className="flex flex-col w-full h-full">
      <div className="flex fixed w-full h-full -z-10">
        <Image
          src="/windows.jpg"
          alt="background"
          layout="fill"
          objectFit="cover"
					/>
      </div>
			<div className="flex flex-row w-full h-full container">
				<Terminal />
			</div>
    </div>
  );
}
 
