
export interface User {
  id: number
  nombre_u: string;
  nombre?: string;
  apellidos?:string;
  email?:string;
  password?:string;
  fecha_n?: Date;
  telefono?: string;
  direccion?:string;
  activo?:string;
  foto_perfil?: string | ArrayBuffer;
  tipo_usuario?: string;
  estado?: string;
  remember_token: string;
  delated_at?: Date;
  updated_at?: Date;
  created_at?: Date;
}
