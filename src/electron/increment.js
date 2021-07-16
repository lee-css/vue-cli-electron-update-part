import downloadFile from './downloadFile'
import global from './global'
const fse = require('fs-extra')
const AdmZip = require('adm-zip')
import log from './log'

export default async (updateZipUrl) => {  
  const resourcesPath = process.resourcesPath
  downloadFile({ url: updateZipUrl, targetPath: resourcesPath }).then(async (filePath) => {
    log.warn('unzip-filePath',filePath)
    const zip = new AdmZip(filePath)
    zip.extractAllToAsync(resourcesPath, true, (err) => {
      if (err) {
        console.error(err)
        return
      }      
      fse.removeSync(filePath)      
      setTimeout(() => {        
        log.warn('relaunch')
        global.sharedObject.win.webContents.reloadIgnoringCache()          
      }, 2000);
    })
  }).catch(err => {
    console.log(err)
  })
}