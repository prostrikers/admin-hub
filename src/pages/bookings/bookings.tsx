import {
  Box,
  Select,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AppName } from "../../constants/app";
import useCompletedBookings from "../../hooks/meta/completed-bookings";
import { MembershipCard } from "../profile/components/MembershipCard";
import { CalendarScheduler } from "./event-calender/scheduler";

export const Bookings = () => {
  const [selectedLane, setSelectedLane] = useState("1");
  const bookedEvents = useCompletedBookings(selectedLane);

  useEffect(() => {
    bookedEvents.refetch();
  }, [selectedLane]);

  return (
    <>
      <Helmet>
        <title> Booking Details | {AppName} </title>
      </Helmet>

      <Stack spacing={5}>
        <MembershipCard
          amount="10,552.69"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing "
        />

        <Paper
          elevation={5}
          sx={{ px: 4, py: 3 }}
          style={{
            width: "100%",
            borderRadius: 20,
          }}
        >
          <Box sx={{ mt: 5, mb: 5 }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <FormControl style={{ width: "30%" }}>
                <InputLabel>Select a lane</InputLabel>
                <Select
                  value={selectedLane}
                  label="Select a lane"
                  onChange={(e) => setSelectedLane(e.target.value)}
                >
                  <MenuItem value={"1"}>Lane 1</MenuItem>
                  <MenuItem value={"2"}>Lane 2</MenuItem>
                  <MenuItem value={"3"}>Lane 3</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Box>

          {bookedEvents.isRefetching ? (
            <>
              <CircularProgress />
            </>
          ) : (
            <>
              {bookedEvents.isLoading ? (
                <>
                  <CircularProgress />
                </>
              ) : (
                <>
                  {bookedEvents.isSuccess && (
                    <CalendarScheduler
                      eventsCalendar={bookedEvents.data.data}
                    />
                  )}
                </>
              )}
            </>
          )}
        </Paper>
      </Stack>
    </>
  );
};
