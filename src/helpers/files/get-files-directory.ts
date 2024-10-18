import fs from 'fs/promises'
import path from 'path'

type FileList = {
   fullPath: string
   previousPath: string
   file: string
   filename: string
   ext: string
}

export async function getFilesDirectory(directory: string) {
   let filesList: FileList[] = []

   async function traverseDirectory(dir: string) {
      try {
         const files = await fs.readdir(dir)

         for (const file of files) {
            const fullPath = path.join(dir, file)
            const stat = await fs.stat(fullPath)

            if (stat.isDirectory()) {
               await traverseDirectory(fullPath)
            } else {
               filesList.push({
                  fullPath,
                  previousPath: fullPath.split('\\')[fullPath.split('\\').length - 2],
                  file,
                  filename: path.basename(file, path.extname(file)),
                  ext: path.extname(file)
               })
            }
         }
      } catch (err) {
         console.error(`Erro ao ler o diretório ${dir}:`, err)
      }
   }

   await traverseDirectory(directory)

   return { filesList }
}
