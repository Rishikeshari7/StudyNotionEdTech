const BASEURL = import.meta.env.VITE_BASE_URL;

export const categories = {
  CATEGORIES_API: BASEURL + "/course/showAllCategory",
};
export const authenticate={
  LOGIN_API:BASEURL+"/auth/login",
}