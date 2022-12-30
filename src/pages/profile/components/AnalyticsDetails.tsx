import { Box, Paper, Stack, Typography } from "@mui/material";
import "kalend/dist/styles/index.css"; // import styles

export const AnalyticsData = () => {
  return (
    <>
      <Paper
        elevation={5}
        sx={{ px: 4, py: 3 }}
        style={{
          width: "100%",
          borderRadius: 20,
        }}
      >
        <Stack spacing={2} sx={{ px: 2, py: 2 }}>
          <Typography variant="h4">Analytics</Typography>

          <Box style={{ minWidth: "100vh" }}></Box>
        </Stack>
      </Paper>
    </>
  );
};
