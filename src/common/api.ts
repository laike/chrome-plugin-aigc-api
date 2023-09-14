import { IAsk35Params } from './types'

/** 获取流数据 */
export const ask35Api = async (params: { messages: IAsk35Params[]; model: string }) => {
  return fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      accept: 'text/event-stream',
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Bearer ${import.meta.env.API_KEY}`,
    },
    body: JSON.stringify(params),
  })
}
