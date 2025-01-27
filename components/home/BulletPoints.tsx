import { GrCheckmark } from "react-icons/gr";
import TextContainer from "../global/TextContainer";

const BulletPoints = ({ points }: { points: string[] }) => {
  return (
    <div className="w-full my-4 lg:flex lg:items-center">
      <TextContainer>
        <ul className="flex flex-col md:gap-10 gap-6">
          {points.map((point, index) => (
            <li className="flex items-start gap-4" key={index}>
              <div className="flex-shrink-0">
                <GrCheckmark className="!w-6 !h-6 text-sky-400" />
              </div>
              <span className="flex-1">{point}</span>
            </li>
          ))}
        </ul>
      </TextContainer>
    </div>
  );
};

export default BulletPoints;
