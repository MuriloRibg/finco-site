export interface ProjetoResponse {
  id: number;
  category: string;
  sub_category_1: string;
  sub_category_2: string;
  country: string;
  title: string;
  description: string;
  end_date: Date | string | null;
  required_value: number;
  rollout_date: Date | string | null;
  funded_value: number;
  image: string;
  username: string;
}

export class DataProjectsResponse {
  data!: ListProjectsResponse;
}

export class DataProjectResponse {
  data!: ProjetoResponse;
}

export class ListProjectsResponse {
  projects!: ProjetoResponse[];
}


