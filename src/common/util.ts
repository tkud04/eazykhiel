import React from "react"
import { encryptData, decryptData } from "../lib/encryptionHelper"

const PROFILE = 'EAZYKHIEL_PROFILE'
const encKey = 'fdfkjeazykhiellbbxj@1512'

export const testEncryption = (data={test:'testing encryption/decryption'}) => {
 console.log({data})
 let enc = encryptData(encKey,JSON.stringify(data))
 console.log({enc})
 let dec = decryptData(encKey,enc)
 console.log({dec})
}

export const restoreProfileData = () => {
    let ret:string|null = null
    try {
      const data = localStorage.getItem(PROFILE)
      const decryptedData = decryptData(encKey,data!)
      console.log('data here: ',data)
      if(data !== null){
        ret = JSON.parse(decryptedData)
      }
    } 
    catch (error) {
        console.log('error restoring profile data: ',error)
    
    }

    return ret
}

export const storeProfileData = (data:Record<string,string>) => {
    try {
        let encryptedData = encryptData(encKey,JSON.stringify(data))
        localStorage.setItem(PROFILE, encryptedData)
      }
     catch (error) {
        console.log('error storing profile data: ',error)
     }
}

export const removeProfileData = async () => {
    try{
      localStorage.clear()
    }
    catch (error){
        console.log('error removing profile data: ',error)
    }
}

export const addScript = (url:string) => {
    const head = document.querySelector("head")
    const script = document.createElement("script")
  
    script.setAttribute("src", url)
    head?.appendChild(script)
  
    return () => {
      head?.removeChild(script)
    }
}

export const addStyle = (url:string,rel='stylesheet') => {
    const head = document.querySelector("head")
    const style = document.createElement("link")
  
    style?.setAttribute("rel", rel)
    style?.setAttribute("href", url)
    head?.appendChild(style)
  
    return () => {
      head?.removeChild(style)
    }
  }

  export const addMeta = ({name,content}:{name:string,content:string}) => {
    const head = document.querySelector("head")
    const meta = document.createElement("meta")
  
    meta?.setAttribute("name", name)
    meta?.setAttribute("content", content)
    head?.appendChild(meta)
  
    return () => {
      head?.removeChild(meta)
    }
  }