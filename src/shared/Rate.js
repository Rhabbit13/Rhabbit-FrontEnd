import moment from "moment";

export const Rate = List => {
  let count = 0;
  List.cardsDetailDtos.forEach(x => {
    if (x.checked === true) {
      count++;
    }
  });
  const today = moment();
  let rate = Math.round((count / List.cardsDetailDtos.length) * 100);
  const disabled = List.date === today.format("YYYYMMDD") ? false : true;

  return { disabled: disabled, rate: rate };
};
