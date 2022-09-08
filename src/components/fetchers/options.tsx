export  const options = {
    method: 'GET',
    params: { 'sort-by': 'popularity' },
    headers: {
      'X-RapidAPI-Key': `${process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY}`,
      'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
    }
  };