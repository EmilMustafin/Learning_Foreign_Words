import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/cards', () => {
    return HttpResponse.json([
      {
        id: 1,
        title: 'Word of the Day',
        word: 'benevolent',
        transcription: 'be·nev·o·lent',
        partOfSpeech: 'adjective',
        example: 'a benevolent smile',
        translation: 'добросердечный, великодушный',
      },
      {
        id: 2,
        title: 'Expand Your Vocabulary',
        word: 'serendipity',
        transcription: 'ser·en·dip·i·ty',
        partOfSpeech: 'noun',
        example: 'a fortunate stroke of serendipity',
        translation: 'счастливая случайность',
      },
      {
        id: 3,
        title: 'Learn Something New',
        word: 'ephemeral',
        transcription: 'e·phem·er·al',
        partOfSpeech: 'adjective',
        example: 'fame is ephemeral',
        translation: 'мимолетный, недолговечный',
      },
      {
        id: 4,
        title: 'Did You Know?',
        word: 'labyrinth',
        transcription: 'lab·y·rinth',
        partOfSpeech: 'noun',
        example: 'the streets form a labyrinth',
        translation: 'лабиринт',
      },
      {
        id: 5,
        title: 'Boost Your Vocabulary',
        word: 'quintessential',
        transcription: 'quin·tes·sen·tial',
        partOfSpeech: 'adjective',
        example: 'he was the quintessential tough guy',
        translation: 'типичный, квинтэссенциальный',
      },
      {
        id: 6,
        title: 'Word Power',
        word: 'eloquent',
        transcription: 'el·o·quent',
        partOfSpeech: 'adjective',
        example: 'an eloquent speech',
        translation: 'красноречивый',
      },
      {
        id: 7,
        title: 'Thought for the Day',
        word: 'nostalgia',
        transcription: 'nos·tal·gia',
        partOfSpeech: 'noun',
        example: 'a wave of nostalgia swept over her',
        translation: 'ностальгия',
      },
      {
        id: 8,
        title: 'New Word Alert',
        word: 'lucid',
        transcription: 'lu·cid',
        partOfSpeech: 'adjective',
        example: 'a lucid explanation',
        translation: 'ясный, четкий',
      },
      {
        id: 9,
        title: 'Enrich Your Lexicon',
        word: 'ineffable',
        transcription: 'in·ef·fa·ble',
        partOfSpeech: 'adjective',
        example: 'the ineffable beauty of the countryside',
        translation: 'неописуемый, невыразимый',
      },
      {
        id: 10,
        title: 'Nature Wonders',
        word: 'serenity',
        transcription: 'se·ren·i·ty',
        partOfSpeech: 'noun',
        example: 'The serenity of the mountains was breathtaking.',
        translation: 'спокойствие, безмятежность',
      },
    ]);
  }),
];

const mockToken = 'mocked-token-admin';

export const authHandlers = [
  http.post<never, { username: string; password: string }>('/api/login', async ({ request }) => {
    const { username, password } = await request.json();

    if (username === 'admin' && password === 'admin') {
      return HttpResponse.json(
        {
          token: mockToken,
        },
        { status: 200 },
      );
    }

    return HttpResponse.json(
      {
        error: 'Invalid username or password',
      },
      { status: 403 },
    );
  }),
];
