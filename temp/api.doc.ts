import type { IHTTPResponses, ISocketWorkspace } from "~/data/interfaces/http.infaces"

export const REPONSES: IHTTPResponses[] = [
  {
    status: 200,
    exception: {
      type: 'OK',
      message: 'Запрос прошёл успешно',
    },
    toast: { type: 'cool', message: 'Вы сегодня отлично выглядите' },
    body: {
      message: '(Но только сегодня)',
      tariffs: { type: 'TariffEntity', value: 'TariffEntity[]' }
    }
  },
  {
    status: 201,
    exception: {
      type: 'Created',
      message: 'Запись создана',
    },
  },
  {
    status: 202,
    exception: {
      type: 'Updated',
      message: 'Запись изменена',
    },
  },
  {
    status: 204,
    exception: {
      type: 'Delted',
      message: 'Запись удалена',
    },
  },
  {
    status: 400,
    exception: {
      type: 'InvalidRequest',
      message: 'Отправлены не валидные данные',
    },
  },
  {
    status: 401,
    exception: {
      type: 'Unauthorized',
      message: 'Для этого метода необходима авторизация',
    },
  },
  {
    status: 403,
    exception: {
      type: 'PermissionDenied',
      message: 'У вас недостаточно прав для выполнения данного запроса',
    },
  },
  {
    status: 404,
    exception: {
      type: 'NotFound',
      message: 'Данные не найдены',
    },
  },
  {
    status: 409,
    exception: {
      type: 'AlreadyExist',
      message: 'Такая запись уже существует. Возможно, в ней повторяются уникальные параметры',
    },
  },
  {
    status: 500,
    exception: {
      type: 'Unexcepted',
      message: 'Не обработанная ошибка сервера'
    },
    toast: {
      type: 'error',
      message: 'В работе сервера произошла необработанная ошибка. Пожалуйста, обратитесь в тех.поддержку'
    },
  },
]

export const SOCKET_WORKSPACES: ISocketWorkspace[] = [
  {
    id: 'online-workspace',
    name: 'online',
    description: 'Для подключения пользователя к сервису. Так он сможет получать актуальные данные о всех сущностях, взаимодействовать с директориями и списками проектов, друзьями и т.д.',
    evetns: [
      {
        name: 'invite-in-room',
        description: 'Пользователя приглосили в проект',
        body: {
          status: 200,
          exception: { type: 'OK', message: 'Матвей Храмов пригласил вас в комнату "Важный проект"' },
          body: {
            roomHash: 'AwnasWWS918Kpopisdevil'
          }
        },
      }
    ],
    actions: [
      {
        message: 'create-project',
        description: 'Создать проект',
        params: [
          {
            name: 'name',
            required: true,
            value: 'string',
            type: 'string'
          },
          {
            name: 'description',
            required: false,
            value: 'string',
            type: 'string'
          },
        ]
      }
    ],
  }
]
