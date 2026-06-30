export type EventInfo = {
  title: string;
  names: string;
  dateLabel: string;
  dateTime: string;
  ceremony: {
    place: string;
    time: string;
    address: string;
    mapUrl: string;
  };
  party: {
    place: string;
    time: string;
    address: string;
    mapUrl: string;
  };
  dressCode: {
    label: string;
    note: string;
  };
  gifts: {
    note: string;
    alias: string;
  };
  rsvp: {
    deadline: string;
    url: string;
  };
};

export const eventInfo: EventInfo = {
  title: "Nos casamos",
  names: "Facu y Luchi",
  dateLabel: "10 OCT 26",
  dateTime: "2026-10-10T18:30:00-03:00",
  ceremony: {
    place: "Sagrada Familia de Nazaret",
    time: "18.30 hs",
    address: "Direccion a confirmar",
    mapUrl: "#",
  },
  party: {
    place: "Salon a confirmar",
    time: "20 hs",
    address: "Direccion a confirmar",
    mapUrl: "#",
  },
  dressCode: {
    label: "Elegante",
    note: "Reservamos los tonos claros para la novia.",
  },
  gifts: {
    note: "Si quisieras regalarnos algo mas que compartir esa noche...",
    alias: "alias.a.confirmar",
  },
  rsvp: {
    deadline: "10 de agosto",
    url: "#",
  },
};
