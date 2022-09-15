export const options_popularity = {
    method: 'GET',
    params: { 'sort-by': 'popularity' },
    headers: {
      'X-RapidAPI-Key': `${process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY}`,
      'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
    }
  };

  export const options_id = {
    method: 'GET',
      params: { id: "4" },
      headers: {
        'X-RapidAPI-Key': `${process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY}`,
        'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
      }
  }