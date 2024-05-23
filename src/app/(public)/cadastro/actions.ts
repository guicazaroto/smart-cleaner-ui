import { compressImage } from "@/helpers/compressor";
import { BASE_URL } from "@/helpers/constants";

export const getCities = async (uf: string) => {
  const res = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);

  const data = await res.json();

  return data.map((city: any) => ({
    value: city.nome,
    label: city.nome
  }));
}

export const handleUpload = async (photo: any, userId: string) => {
  if (!photo) return;

  const formData = new FormData();
  const compressedFile = await compressImage(photo) as File;

  formData.append('file', compressedFile);

  const response = await fetch(`${BASE_URL}/cleaner/${userId}/img`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Falha ao fazer upload');
  }

  return response.json();
};

export const handleCreateUser = async (userData: any) => {
  const res = await fetch(`${BASE_URL}/cleaner`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });


  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const user = await res.json();
  return user.data;
}
