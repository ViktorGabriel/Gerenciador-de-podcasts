# Podcast Manager

### Domínio

Um app ao estilo netflix, aonde passa centralizar diferentes episódios de podcast separados por categoria

### Descrição

Podcast feitos em vídeo

### Features

- Listar os episodios dos podcasts por sessões de categorias
- [saúde, fitness, mentalidade, humor]
- Filtrar episodios por nome de podcasts

## Como

#### Feature:

- Listar os episodios podcasts em sessões de categorias

### Como eu vou fazer:

- Vou retornar em uma API REST, o nome do podcast, thumbnail, data do episódio, link do vídeo e categoria

```js
[
  {
    podcastName: "Flow Podcast",
    episodeName: "IGORFINA + FERNANDO SARDINHA - Flow #623",
    videoId: "bbTjV6V7hVg",
    cover: "https://i.ytimg.com/vi/bbTjV6V7hVg/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=QxCO6UigCvY&",
    categories: ["humor"],
  },
  {
    podcastName: "Flow Podcast",
    episodeName: "DANIEL LOPEZ - Flow #622",
    videoId: "n7FxfxBqe6c",
    cover: "https://i.ytimg.com/vi/n7FxfxBqe6c/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=n7FxfxBqe6c",
    categories: ["saude", "fitness"],
  },
];
```
