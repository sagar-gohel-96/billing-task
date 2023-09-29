import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { User } from "@/src/data/userData";
import { Button } from "@mui/joy";

interface PatientCardProps {
  id: number;
  user: User;
  setId: Dispatch<SetStateAction<number>>;
  setInvUser: Dispatch<SetStateAction<User | undefined>>;
}

export const PatientCard: React.FC<PatientCardProps> = (props) => {
  const { setId, user, setInvUser, id: userId } = props;

  const { name, age, gender, id, image } = user;
  const isSelected = userId === user.id;

  return (
    <Box
      onClick={() => {
        setInvUser(user);
        setId(id as number);
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        width: "345px",
        height: "110px",
        backgroundColor: isSelected ? "#fff" : "#CBE3FF",
        padding: "10px",
        borderRadius: "10px",
        ":hover": {
          cursor: "pointer",
        },
      }}
    >
      <Box sx={{ marginRight: "16px" }}>
        <Image
          src={image}
          alt="placeholder"
          width={100}
          height={100}
          style={{ borderRadius: "8px" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "8px",
          height: "100%",
        }}
      >
        <Typography>{name}</Typography>
        <Typography>{`${age} / ${gender}`}</Typography>
        {isSelected ? (
          <Button
            variant="outlined"
            sx={{
              color: "#312E81",
              borderColor: "#312E81",
              borderRadius: "38px",
              width: "217px",
              height: "27px",
            }}
          >
            View Prescription
          </Button>
        ) : (
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ color: "#525252", marginRight: "10px" }}>
              Bill No
            </Typography>
            <Typography>{user?.billNo}</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};
