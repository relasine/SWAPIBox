import React from 'react';
import fetchCall from './fetchCalls';

describe('fetchCall', () => {
  let mockUrl;

  beforeEach(() => {
    mockUrl = ''

  })

  it('should call fetch with the correct params', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({json: () => Promise.resolve('returned Data')})
    )
    await fetchCall(mockUrl)
    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })

  it('should return an error', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject(error('failed fetch')))
    
    const response = await fetchCall(mockUrl)
    expect(response).toEqual('failed fetch')
  })
})