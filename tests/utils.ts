import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post('/categories', () => {
    return HttpResponse.json({
      name: 'Professional',
    });
  }),

  http.put(`/categories/${8}`, () => {
    return HttpResponse.json({
      id: 8,
      name: 'Professional',
    });
  }),

  http.get(`/categories`, () => {
    return HttpResponse.json([
      {
        id: 1,
        name: 'sub-7',
      },
      {
        id: 2,
        name: 'sub-9',
      },
      {
        name: 'sub-11',
        id: 3,
      },
    ]);
  }),
];
