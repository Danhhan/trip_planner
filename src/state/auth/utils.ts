const userInfoLSkey = '_userInfo'
export const getUserInfoFromLS = () => {
  const userInfo = localStorage.getItem(userInfoLSkey)
  if (!userInfo) return null
  return JSON.parse(userInfo)
}
export const setUserInfoToLS = (userInfo: any) => {
  return localStorage.setItem(userInfoLSkey, JSON.stringify(userInfo))
}
export const removeUserInfoFromLS = () => {
  return localStorage.removeItem(userInfoLSkey)
}
