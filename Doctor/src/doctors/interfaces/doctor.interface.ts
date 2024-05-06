export interface AvailableShift {
  date: string;
  methods: { method: string; status: boolean }[];
  shifts: { shift: string; slots: { time: string; status: string }[] }[];
}

export interface Doctor {
  name: string;
  gender: string;
  email: string;
  dob: Date;
  mobile: string;
  country: string;
  state: string;
  district: string;
  city: string;
  street: string;
  pincode: string;
  expertise: string[];
  yearsOfExp: number;
  isVerified: boolean;
  medicalLicenseNumber: string;
  nameOfCollege: string;
  currentWorkingHospital: string;
  workingDays: string[];
  languageKnown: string[];
  medicalLicensePhoto: string;
  experienceCertificatePhoto: string;
  profilePhoto: string;
  availableShifts: AvailableShift[];
}
