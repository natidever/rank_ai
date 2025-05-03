import { MetaTagTypes } from "./types"

export const getWebTitle=():string =>{
let title = document.title
console.log("titlex",title)

return title
}

export const getWebDescription=():MetaTagTypes =>{
    let description = document.querySelector('meta[name="description"]')?.getAttribute('content')
    console.log("desc",description)
    return description
    
}

export const getWebKeyword=():MetaTagTypes =>{
    let keyword = document.querySelector('meta[name="keywords"]')?.getAttribute('content')
    console.log("keyworsd",keyword)
    
    return keyword
    
}

export const getWebLinks=()=>{
    let links = document.getElementsByTagName('a')
    for(let i =0;i<links.length;i++){
       if (i >=500){
        return 
       }
        console.log("Links are ",links[i].href)
    }
    
    return links
    
}

export const getHeadings=()=>{
    let heading = document.querySelectorAll('h1,h2,h3,h4,h5,h6')
      heading.forEach(headings=>{ 
console.log(headings.tagName,headings.textContent)
      })
   
    
}
