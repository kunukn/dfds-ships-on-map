export let getShipNameByIMO = imo => {
  switch (imo) {
    case 9293088:
      return 'Delft Seaways';
    case 9809095:
      return 'Gardenia Seaways';
    case 8701674:
      return 'Pearl Seaways';
    case 8917613:
      return 'Crown Seaways';
  }
  return null;
};
