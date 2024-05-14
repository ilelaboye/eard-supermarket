import moment from "moment";
export const formatDate = (date: string) => moment(date).format("MMM D, YYYY");
export const formatDateTime = (date: string) =>
  moment(date).format("MMM D, YYYY h:mm:ss A");

export const formatPrice = (amount: number) => {
  return amount
    ? new Intl.NumberFormat("en-NG", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(amount)
    : amount;
};
