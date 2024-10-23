import resDetails from "../utils/menuData";
const useFindData = (resID) => {
  const resObj = resDetails.find((resto) => resto.id == resID);
  return resObj;
};
export default useFindData;
