import React from 'react';

const url = 'http://localhost:3000'

export async function getEvents () {
  try {
    const response = await fetch(`${url}/`);
    const data = await response.json()
    console.log('data in getEvents service: ', data)
    return data;
  } catch (error) {
    console.log(error)
  }
}
