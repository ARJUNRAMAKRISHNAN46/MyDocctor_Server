export interface bookingEntity {
    date: string;
    methods: { method: string; status: boolean }[];
    shifts: {
      shift: string;
      slots: { time: string; status: boolean }[];
    }[];
  }
  