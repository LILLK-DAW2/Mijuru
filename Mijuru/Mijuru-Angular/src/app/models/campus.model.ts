export interface CampusModel {
  id_campus: number;
  nombre_campus: string;
  descripcion?: string;
  foto_portada?: string;
  creador: number;
  foro_padre?: number;
  herramientas_campus: any[];
  estado: string;
  fecha_b?: Date;
  created_at: Date;
  updated_at: Date;
}
