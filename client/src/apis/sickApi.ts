import axios from "axios";

interface getSickCacheGuard {
  [key: string]: { sickCd: string, sickNm: string }[]
};

const apiRoot =  axios.create({
  baseURL: 'http://localhost:4000/sick/',
});

const getSickCache: getSickCacheGuard = {};
export const getSickApi = async (inputText: string) => {
  if (!inputText) return [];
  if (getSickCache.hasOwnProperty(inputText)) return getSickCache[inputText];
  try {
    console.info("calling api");
    const { data } = await apiRoot(`?q=${inputText}`);
    getSickCache[inputText] = data;
    
    return data;
  } catch (error) {
    throw error;
  };
};
