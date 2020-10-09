// https://stackoverflow.com/questions/28041840/convert-dataurl-to-file-using-javascript

const dataURLtoBlob = (dataUrl: string) => {
  const arr = dataUrl.split(','),
    mime = arr[0].match(/:(.*?);/)?.[1],
    bstr = atob(arr[1])

  let n = bstr.length
  const u8arr = new Uint8Array(n)

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}

export default dataURLtoBlob
