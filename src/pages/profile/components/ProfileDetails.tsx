import { Stack, Paper, Typography } from "@mui/material";
import { BookingList } from "./BookingList";

export const ProfileDetails = () => {
  return (
    <>
      <Paper
        elevation={3}
        style={{
          width: "100%",
          borderRadius: 20,
          minHeight: "70vh",
        }}
        sx={{ px: 3, py: 4 }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="left"
          spacing={2}
        >
          <Typography variant="h5" style={{ fontWeight: 500 }}>
            Your last transactions
          </Typography>
          <BookingList />
        </Stack>
      </Paper>
    </>
  );
};
