export interface AppointmentEntity {
  _id: string;
  date: string;
  consultationMethods: string[];
  slots: {
    start: string;
    userId: string;
    status: string;
    reservedAt: Date | null;
  }[];
  doctorId: string;
}
