import Papa from 'papaparse';

export const parseCSV = (csvString: string) => {
  return new Promise((resolve, reject) => {
    Papa.parse(csvString, {
      header: true,
      dynamicTyping: true,
      complete: (results: any) => {
        resolve(results.data);
      },
      error: (error: any) => {
        reject(error);
      },
    });
  });
};

export const formatChartData = (data: any[]) => {
  return data.map(item => ({
      ...item,
      date: new Date(item['Date']).toLocaleDateString(),
      close: parseFloat(item['Close']),
  }));
};


// import { csvParse } from 'd3-dsv';

// const parseCSV = (csvString: string) => {
//     const data = csvParse(csvString);
//     return data.map((row: any) => ({
//       date: new Date(row['Date']),
//       open: +row['Open'],
//       high: +row['High'],
//       low: +row['Low'],
//       close: +row['Close'],
//       volume: +row['Volume'],
//       dividends: +row['Dividends'],
//       splits: +row['Stock Splits'],
//       capitalGains: +row['Capital Gains'],
//       normalized: +row['Normalized'],
//     }));
//   };
  