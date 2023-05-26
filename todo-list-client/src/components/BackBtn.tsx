import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export const BackBtn: React.FC<{}> = () => {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate(-1)} size="sm" variant="outlined" className="flex items-center justify-center">
      <FontAwesomeIcon className="text-2xl text-white-800 " icon={faArrowLeft} />
    </Button>
  );
};
