export const options_popularity = {
    method: 'GET',
    params: { 'sort-by': 'popularity' },
    headers: {
      'X-RapidAPI-Key': `${process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY}`,
      'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
    }
  };

  export const options_id = (id:string) => {
    return {
      method: 'GET',
      params: { id: id },
      headers: {
        'X-RapidAPI-Key': `${process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY}`,
        'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
      }
    }
    
  };

  export const options_date = {
    method: 'GET',
    params: { 'sort-by': 'date' },
    headers: {
      'X-RapidAPI-Key': `${process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY}`,
      'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
    }
  };