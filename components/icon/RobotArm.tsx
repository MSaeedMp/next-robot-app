import Image from "next/image";
import RobotArmIcon from "@/public/robotic-arm.png";

const RobotArm = () => {
  return (
    <Image src={RobotArmIcon} alt="robotic arm icon" width={32} height={32}  className="w-8 h-8"/>
  );
};
export default RobotArm;
