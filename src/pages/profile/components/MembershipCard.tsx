import { Paper, Stack, Typography } from "@mui/material";

export const MembershipCard = ({
  amount,
  description,
}: {
  amount: string;
  description: string;
}) => {
  return (
    <Paper
      elevation={5}
      sx={{ px: 3, py: 2 }}
      style={{
        width: "100%",
        background: " linear-gradient(92.09deg, #07293E 1.01%, #305D7A 98.65%)",
        borderRadius: 20,
      }}
    >
      <Stack spacing={2} sx={{ px: 1, py: 1 }}>
        <Typography variant="h4" color="white" style={{ fontWeight: "normal" }}>
          Income
        </Typography>

        <Typography
          variant="h3"
          color="white"
          style={{ textTransform: "uppercase" }}
        >
          ${amount}
        </Typography>

        <Typography variant="body1" color="white">
          {description}
        </Typography>
      </Stack>
    </Paper>
  );
};
