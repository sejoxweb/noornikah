import { Button } from "antd";
import ProfileCreateEditForm from "../../components/ProfileCreateEditForm/ProfileCreateEditForm";
import { useState } from "react";

const Profile = ({ currentUser }) => {
  const [open, setOpen] = useState(false);
  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setOpen(false);
  };
  return (
    <div>
      Profile
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Edit
      </Button>
      <ProfileCreateEditForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
        currentUser={currentUser}
      />
      {Object.entries(currentUser).map((entry) => (
        <div key={entry[0]}>
          {entry[0]}: {entry[0] === "password" ? "********" : entry[1]}
        </div>
      ))}
    </div>
  );
};

export default Profile;
