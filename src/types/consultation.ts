export type ConsultationField = "name" | "phone" | "email" | "area" | "message" | "consent";

export type ConsultationPayload = {
  name: string;
  phone: string;
  email: string;
  area: string;
  message: string;
  consent: boolean;
};

export type ConsultationResult = {
  ok: boolean;
  message: string;
  field?: ConsultationField;
};
