import fsPromises from 'fs/promises'

export async function readFileTxt(directoryPath: string) {
   try {
      const data = await fsPromises.readFile(directoryPath, 'utf8')
      return data
   } catch (error) {
      throw new Error(`Erro ao ler o arquivo: `, error as any)
   }
}
