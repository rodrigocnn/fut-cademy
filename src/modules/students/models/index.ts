export interface Student {
  name: string;
  email: string;
  date_of_birth: string;
  phone: string;
  rg: string;
  address: string;
  district: string;
  city: string;
  id: number;
}

export interface StudentIndexData {
  data: Student[];
}
