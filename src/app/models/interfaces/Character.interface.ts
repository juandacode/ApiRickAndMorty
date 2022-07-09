export interface Character {
  id: number;
  name: string;
  status: string; // Yes or Not
  species: string;
  gender: string; // Sexo/Genero
  origin: CharacterOriginLocation; //Dimension
  location: CharacterOriginLocation; // Nombre del Planeta/Ciudad
  episode: string[]; // Cantidad de Capitulos
  created: string; // Fecha Creacion en Formato 'dd-mm-yyyy'
  image: string; // Icono Para visualizar Imagen Personaje
}

export interface CharacterOriginLocation {
  name: string;
  url: string;
}


