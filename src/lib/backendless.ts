import axios from "axios";

// const API_KEY = "2e79acdcf95f4b4a9fafddc26d3cefc8";
// // const BASE_URL = "https://newsapi.org/v2"
const BASE_URL = "https://jobbingfold-us.backendless.app/api/data/blog";

// interface IArticle{
//     title:string
//     description:string
//     url:string
//     urlToImage:string
// }

interface IArticle {
  created: string;
  objectId: string;
  title: string;
  content: string;
  author: string;
  imgurl: string;
}

export async function getNewsHeadline(): Promise<IArticle[]> {
  try {
    // const res=await axios.get(`${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`

    // )

    const res = await axios.get(`${BASE_URL}`);

    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getNewsDetail(objectId: string) {
  try {
    const res = await axios.get(`${BASE_URL}/${objectId}`);
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getHomepageHighlights(): Promise<IArticle[]> {
  try {
    // hanya ambil 3 artikel terbaru
    const res = await axios.get(
      `${BASE_URL}?pageSize=3&sortBy=created%20desc`
    );
    return res.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
