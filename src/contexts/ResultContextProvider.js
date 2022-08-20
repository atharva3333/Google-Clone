// eslint-disable-next-line
import React , { createContext, useState , useContext} from 'react'

const ResultContext = createContext();

const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({children}) =>{

    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Elon Musk');


    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}` , {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Key': '102df0ca65msh3446c23f3a9a412p192fd3jsn0643f603bdd2',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        });

        const data = await response.json();


        if (type.includes('/news')){
            console.log({data});
            setResults(data.entries)
        } else if(type.includes('/image')){
            console.log({data});
            setResults(data.image_results)
        } else{
             setResults(data.results);
        }

        
        setIsLoading(false);
    }


    return(
        <ResultContext.Provider value={{getResults, results,searchTerm,setSearchTerm,isLoading}}>
          {children}
        </ResultContext.Provider>
    )




}

export const useResultContext = ()=> useContext(ResultContext);