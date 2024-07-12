// import {
//   getQuotationSelect,
// } from "@/api/enquiryManage/customerQuotation";
// import {
//   getSonoPageLists,
// } from "@/api/marketManage/airline.js";

// /**
//  * 报价下拉
//  */
// export const httpQuotationSelect = (obj = {}) => {
//   return {
//     type: "autocomplete",
//     searchParamName: "numberLike",
//     httpRequest: (formModel) => getQuotationSelect({ ...formModel, ...obj }),
//     getCustomData: (item) => {
//       const {
//         id,
//         number,
//         productInfo,
//         shipCompanyName,
//         freight,
//         sailingSchedule,
//         startPricePeriodValidity,
//         endPricePeriodValidity,
//       } = item;
//       const label = `${number}${productInfo ? `|${productInfo}` : ""}`;
//       const subtitle = `${shipCompanyName}|${freight}|${sailingSchedule}|${startPricePeriodValidity}~${endPricePeriodValidity}`;
//       return {
//         label: label,
//         title: label,
//         value: id,
//         key: id,
//         subtitle: subtitle,
//       };
//     },
//   };
// };

// /**
//  * 获取SONO信息
//  */
// export const GETSonoPageListsHttpRequest = (obj) => {
//   const { httpRequest = getAccountSubjectList } = obj || {};
//   // getoptMainList
//   return {
//     type: "autocomplete",
//     httpRequest: (params) =>
//       getSonoPageLists({
//         ...params,
//       }),
//     defaultProp: {
//       value: "id",
//       label: "sono",
//     },
//   };
// };