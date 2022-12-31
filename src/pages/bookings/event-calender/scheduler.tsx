import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { ITransactionDetails } from "../interface";
import { mapArrayEventCalendar } from "./event-calender";
import "./style.css";

type CalendarSchedulerProps = {
  eventsCalendar: ITransactionDetails[];
};

export const CalendarScheduler = ({
  eventsCalendar,
}: CalendarSchedulerProps) => {
  const listAllEventsCalendar = mapArrayEventCalendar(eventsCalendar);

  console.log(listAllEventsCalendar);

  const weekends = {
    weekendsVisible: true,
    currentEvents: [],
  };

  return (
    <>
      <div className="mx-auto mt-10">
        <FullCalendar
          plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          weekends={weekends.weekendsVisible}
          eventClick={() => console.log("click")}
          eventChange={() => console.log("change event")}
          initialEvents={listAllEventsCalendar}
          longPressDelay={1000}
          eventLongPressDelay={1000}
          selectLongPressDelay={1000}
          selectable={true}
          dayMaxEvents={true}
          allDaySlot={false}
          editable={true}
          height="500px"
          timeZone="local"
        />
      </div>
    </>
  );
};
