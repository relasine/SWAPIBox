import React from 'react';
import fetchCall from './fetchCalls';
import { shallow } from 'enzyme';

describe('fetchCall', () => {
  let mockUrl;

  beforeEach(() => {
    mockUrl = ''

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({json: () => Promise.resolve('testing')})
    )
  })

  it('should call fetch with the correct params', async () => {
    await fetchCall(mockUrl)
    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })
})