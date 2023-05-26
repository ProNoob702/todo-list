import { Button, Input, Typography } from "@material-tailwind/react";
import { AppLayout } from "../../layout/Layout";
import { Link } from "react-router-dom";

const AddTodoItem = () => {
  return (
    <AppLayout>
      <Typography variant="h3" className="my-4">
        Ajouter un todo liste
      </Typography>

      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input variant="standard" size="lg" label="Name" />
        </div>

        <Button className="mt-6" fullWidth>
          Valider
        </Button>
      </form>
    </AppLayout>
  );
};

export default AddTodoItem;
